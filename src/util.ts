/* eslint-disable import/prefer-default-export */
import slugify from "slugify";

const operatorImageDir = `${process.env.PUBLIC_URL}/images/operators`;
export const getOperatorImagePath = (
  name: string,
  eliteLevel?: number
): string => {
  let filename = `${slugify(name, { lower: true })}.png`;
  if (name === "Amiya" && eliteLevel === 1) {
    filename = `${slugify(`${name} elite 1`, { lower: true })}.png`;
  }
  if (eliteLevel === 2) {
    filename = `${slugify(`${name} elite 2`, { lower: true })}.png`;
  }
  return `${operatorImageDir}/${filename}`;
};
