/* eslint-disable import/prefer-default-export */
const operatorImageDir = `${process.env.PUBLIC_URL}/images/operators`;
export const getOperatorImagePath = (
  name: string,
  eliteLevel?: number
): string => {
  if (name === "Amiya" && eliteLevel === 1) {
    return `${operatorImageDir}/Amiya Elite 1.png`;
  }
  if (eliteLevel === 2) {
    return `${operatorImageDir}/${name} Elite 2.png`;
  }
  return `${operatorImageDir}/${name}.png`;
};
