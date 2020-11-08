/* eslint-disable import/prefer-default-export */
import globalItemData from "../ArknightsData/en-US/gamedata/excel/item_table.json";
import cnOperatorData from "../ArknightsData/zh-CN/gamedata/excel/character_table.json";

const SPECIAL_OPERATOR_NAMES: Record<string, string> = {
  ShiraYuki: "Shirayuki",
  Гум: "Gummy",
  Зима: "Zima",
  Истина: "Istina",
  Роса: "Rosa",
};

const manuallyTranslatedItemNames: Record<string, string> = {
  "31033": "Crystal Component",
  "31034": "Crystal Circuit",
  "30145": "Crystal Electronic Unit",
};

export function getOperatorName(operatorId: string): string | null {
  const entry = cnOperatorData[operatorId as keyof typeof cnOperatorData];
  if (entry === undefined || entry.isNotObtainable) {
    return null;
  }
  const { appellation } = entry;
  return Object.prototype.hasOwnProperty.call(
    SPECIAL_OPERATOR_NAMES,
    appellation
  )
    ? SPECIAL_OPERATOR_NAMES[appellation]
    : appellation;
}

export function getItemName(itemId: string): string | null {
  const entry =
    globalItemData.items[itemId as keyof typeof globalItemData.items];
  const name = entry?.name ?? manuallyTranslatedItemNames[itemId] ?? null;
  return name;
}
