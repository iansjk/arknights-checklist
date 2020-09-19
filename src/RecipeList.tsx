import React from "react";
import { Ingredient as IngredientProps } from "./materials";
import Ingredient from "./Ingredient";

interface Recipe {
  name: string;
  ingredients: IngredientProps[];
}

interface RecipeProps {
  recipes: Recipe[];
}

export default function RecipeList(props: RecipeProps): React.ReactElement {
  const { recipes } = props;
  return (
    <>
      {recipes.map((recipe) => (
        <div>
          {recipe.name}
          {recipe.ingredients.map((ingredient) => (
            <Ingredient name={ingredient.name} quantity={ingredient.quantity} />
          ))}
        </div>
      ))}
    </>
  );
}
