import { Ingredient } from "./materials";

import * as operatorData from "./operator-recipes.json";

export interface OperatorRecipeBook {
  rarity: number;
  elite: { 1: Ingredient[]; 2?: Ingredient[] };
  skillLevels: { [skillLevel: number]: Ingredient[] };
  masteries?: {
    [skillSlot: number]: {
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
