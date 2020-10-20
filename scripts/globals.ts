/* eslint-disable import/prefer-default-export */
import cnOperatorData from "../ArknightsData/zh-CN/gamedata/excel/character_table.json";

const SPECIAL_OPERATOR_NAMES: Record<string, string> = {
  Гум: "Gummy",
  Зима: "Zima",
  Истина: "Istina",
  Роса: "Rosa",
};

export function getOperatorName(operatorId: string): string | null {
  const entry = cnOperatorData[operatorId as keyof typeof cnOperatorData];
  if (entry === undefined) {
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
