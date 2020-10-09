import path from "path";
import fs from "fs";
import { OperatorRecipeBook } from "../src/recipes";
import { Ingredient } from "../src/materials";

const ARKNIGHTS_DATA_BASEDIR = path.join(__dirname, "../ArknightsData");

interface ItemRequirement {
  id: string;
  count: number;
}

interface EliteLevelEntry {
  evolveCost: ItemRequirement[];
}

interface MasteryLevelEntry {
  skillId: string;
  levelUpCostCond: {
    levelUpCost: ItemRequirement[];
  }[];
}

interface SkillLevelEntry {
  lvlUpCost: ItemRequirement[];
}

interface OperatorEntry {
  name: string;
  rarity: 0 | 1 | 2 | 3 | 4 | 5;
  phases: EliteLevelEntry[];
  skills: MasteryLevelEntry[];
  allSkillLvlup: SkillLevelEntry[];
}

interface ItemData {
  name: string;
}

interface ItemTable {
  items: Record<string, ItemData>;
}

function getEliteLMDCost(rarity: number, eliteLevel: number): Ingredient {
  let quantity = -1;
  if (rarity === 3) {
    quantity = 10000;
  } else if (rarity === 4) {
    quantity = eliteLevel === 2 ? 60000 : 15000;
  } else if (rarity === 5) {
    quantity = eliteLevel === 2 ? 120000 : 20000;
  } else if (rarity === 6) {
    quantity = eliteLevel === 2 ? 180000 : 30000;
  }
  return {
    name: "LMD",
    quantity,
  };
}

interface SkillTableEntry {
  levels: {
    name: string;
  }[];
}

interface SkillTable {
  [skillId: string]: SkillTableEntry;
}

async function buildOperatorRecipes(): Promise<
  Record<string, OperatorRecipeBook>
> {
  const jsonDir = path.join(
    ARKNIGHTS_DATA_BASEDIR,
    "en-US",
    "gamedata",
    "excel"
  );
  const operatorData: Record<string, OperatorEntry> = await import(
    path.join(jsonDir, "character_table.json")
  );
  const itemTable: ItemTable = await import(
    path.join(jsonDir, "item_table.json")
  );
  const itemData = itemTable.items;
  const skillTable: SkillTable = await import(
    path.join(jsonDir, "skill_table.json")
  );

  const toIngredients = ({ id, count }: { id: string; count: number }) => ({
    name: itemData[id].name,
    quantity: count,
  });

  const entries = await Promise.all(
    Object.keys(operatorData)
      .filter(
        (operatorId) =>
          // internal rarity is 0-indexed; we only want 3* and above
          // ids starting with "token_" are summons, not operators
          !operatorId.startsWith("token") &&
          operatorData[operatorId].rarity + 1 >= 3
      )
      .map(async (operatorId) => {
        const { name } = operatorData[operatorId];
        const rarity = operatorData[operatorId].rarity + 1;
        const skillLevels = Object.fromEntries(
          operatorData[operatorId].allSkillLvlup.map((skillLevelEntry, i) => {
            const cost = skillLevelEntry.lvlUpCost;
            const ingredients = cost.map(toIngredients);
            // we want to return the result of a skillup as the object key,
            // and since [0] points to skill level 1 -> 2, we add 2
            return [i + 2, ingredients];
          })
        );
        // operatorData[id].phases[0] is E0, so we skip that one
        const elite = Object.fromEntries(
          operatorData[operatorId].phases.slice(1).map(({ evolveCost }, i) => {
            const ingredients = evolveCost.map(toIngredients);
            ingredients.unshift(getEliteLMDCost(rarity, i + 1));
            // [0] points to E1, [1] points to E2, so add 1
            return [i + 1, ingredients];
          })
        );
        const baseObj = {
          rarity,
          elite,
          skillLevels,
        };
        if (rarity < 4) {
          return [name, baseObj];
        }
        const masteries = Object.fromEntries(
          operatorData[operatorId].skills.map((masteryLevelEntry, i) => {
            // masteryLevelEntry contains data on all 3 mastery levels for one skill
            const masteryCosts = Object.fromEntries(
              masteryLevelEntry.levelUpCostCond.map(({ levelUpCost }, j) => {
                const ingredients = levelUpCost.map(toIngredients);
                // mastery level -> array of ingredients
                return [j + 1, ingredients];
              })
            );
            // skill # -> { skill name, skill 1 masteries, skill 2 masteries, ... }
            return [
              i + 1,
              {
                name: skillTable[masteryLevelEntry.skillId].levels[0].name,
                ...masteryCosts,
              },
            ];
          })
        );
        return [name, Object.assign(baseObj, { masteries })];
      })
  );
  return Object.fromEntries(entries);
}

(async () => {
  const operatorRecipes = await buildOperatorRecipes();
  const sorted = Object.fromEntries(
    Object.keys(operatorRecipes)
      .sort((a, b) => a.localeCompare(b))
      .map((name) => [name, operatorRecipes[name]])
  );
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "operator-recipes.json"),
    JSON.stringify({ operators: sorted }, null, 2)
  );
})();
