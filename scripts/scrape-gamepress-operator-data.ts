import got from "got";
import cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { OperatorRecipeBook } from "../src/recipes";
import { Ingredient } from "../src/materials";

const getOperatorRecipeBook = async (
  url: string
): Promise<OperatorRecipeBook> => {
  const response = await got(url);
  const $ = cheerio.load(response.body);

  function getIngredientList($tableCell: any): Ingredient[] {
    return $tableCell
      .find("div[data-item]")
      .toArray()
      .map((ingredientTag: any) => {
        const $ingredient = $(ingredientTag);
        const name = $ingredient.attr("data-item")!;
        const rawQuantity = $ingredient
          .find(".material-quantity")
          ?.text()
          ?.match(/x(?<quantity>\d+)/)?.groups?.quantity;
        const quantity = parseInt(rawQuantity!, 10);
        return {
          name,
          quantity,
        };
      });
  }

  const rarity = $(".rarity-cell").children().length;

  const skillLevels = Object.fromEntries(
    $(".skill-material-cost17")
      .find("tbody > tr:not(:first-child) > td:last-child")
      .toArray()
      .map((skillLevelTd, i) => [i + 2, getIngredientList($(skillLevelTd))])
  );

  const skillSlots = rarity === 6 || url.endsWith("amiya") ? [1, 2, 3] : [1, 2];
  const masteries = Object.fromEntries(
    skillSlots.map((skillSlot) => [
      skillSlot,
      Object.fromEntries(
        $(".skill-material-cost810")
          .find("tbody > tr:not(:first-child) > td:last-child")
          .toArray()
          .slice((skillSlot - 1) * 3, (skillSlot - 1) * 3 + 3)
          .map((masteryLevelTd, i) => [
            i + 1,
            getIngredientList($(masteryLevelTd)),
          ])
      ),
    ])
  );

  const elite1 = getIngredientList($(".e1-material-cost"));
  const elite2 = getIngredientList($(".e2-material-cost"));

  const basicData = {
    rarity,
    skillLevels,
  };

  if (rarity >= 4) {
    return {
      elite: {
        1: elite1,
        2: elite2,
      },
      masteries,
      ...basicData,
    };
  }
  return {
    elite: {
      1: elite1,
    },
    ...basicData,
  };
};

const fixOperatorName = (name: string): string => {
  if (name === "Rosa (Poca)") {
    return "Rosa";
  }
  return name;
};

(async () => {
  let operators: { [operatorName: string]: OperatorRecipeBook } = {};
  const response = await got(
    "https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##stats"
  );
  const $ = cheerio.load(response.body);
  await Promise.all(
    $("#operators-list")
      .find("tr.operators-row")
      .not('[data-rarity="1"], [data-rarity="2"], [data-availserver="cn"]')
      .find("a.operator-title-actual")
      .toArray()
      .map(async (anchor) => {
        const $a = $(anchor);
        const operatorName = $a.text().trim();
        const operatorUrl = $a.attr("href");
        operators[operatorName] = await getOperatorRecipeBook(
          `https://gamepress.gg${operatorUrl}`
        );
      })
  );
  operators = Object.fromEntries(
    Object.keys(operators)
      .sort((a, b) => a.localeCompare(b))
      .map((name) => [fixOperatorName(name), operators[name]])
  );
  fs.writeFileSync(
    path.join(__dirname, "../src/operator-recipes.json"),
    JSON.stringify({ operators }, null, 2)
  );
})();
