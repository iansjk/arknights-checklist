import { Ingredient } from "./materials";

import * as operatorData from "./operator-recipes.json";

export interface OperatorRecipeBook {
  rarity: number;
  isCnOnly: boolean;
  elite: { 1: Ingredient[]; 2?: Ingredient[] };
  skillLevels: { [skillLevel: number]: Ingredient[] };
  masteries?: {
    [skillSlot: number]: {
      skillId: string;
      skillName: string;
      [masteryLevel: number]: Ingredient[];
    };
  };
}

const RECIPES = {
  operators: {
    ...(operatorData.operators as { [name: string]: OperatorRecipeBook }),
  },
};
export default RECIPES;
