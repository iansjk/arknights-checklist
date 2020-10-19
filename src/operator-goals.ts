import { Ingredient } from "./materials";
import RECIPES from "./recipes";

export enum GoalCategory {
  "Elite" = 0,
  "Mastery",
  "Skill Level",
}

export interface GoalData {
  name: string;
  shortName: string;
  category: GoalCategory;
  requiredItems: Ingredient[];
}

export type OperatorGoalData = GoalData & { operatorName: string };

export function goalsForOperator(name: string): GoalData[] {
  const operatorData = RECIPES.operators[name];
  if (!operatorData) {
    return [];
  }
  const goals = [
    {
      name: "Elite 1",
      shortName: "Elite 1",
      category: GoalCategory.Elite,
      requiredItems: operatorData.elite[1],
    },
    ...Array(6)
      .fill(0)
      .map((_, i) => ({
        name: `Skill Level ${i + 1} → ${i + 2}`,
        shortName: `Skill Level ${i + 2}`,
        category: GoalCategory["Skill Level"],
        requiredItems: operatorData.skillLevels[i + 2],
      })),
  ];
  if (operatorData.rarity >= 4) {
    goals.push({
      name: "Elite 2",
      shortName: "Elite 2",
      category: GoalCategory.Elite,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      requiredItems: operatorData.elite[2]!,
    });
    const skillSlots = operatorData.rarity === 6 || name === "Amiya" ? 3 : 2;
    goals.push(
      ...Array(skillSlots * 3)
        .fill(0)
        .map((_, i) => {
          const skillSlot = Math.floor(i / 3) + 1;
          const masteryLevel = (i % 3) + 1;
          return {
            name: `Skill ${skillSlot} Mastery ${masteryLevel}`,
            shortName: `S${skillSlot} M${masteryLevel}`,
            category: GoalCategory.Mastery,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            requiredItems: operatorData.masteries![skillSlot][masteryLevel],
          };
        })
    );
  }
  return goals.sort(
    (a, b) => a.category - b.category || a.name.localeCompare(b.name)
  );
}
