import { Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import Ingredient from "./Ingredient";
import { Ingredient as IngredientProps } from "./materials";

interface RecipeProps {
  name: string;
  ingredients: IngredientProps[];
}

export default function Recipe(props: RecipeProps): React.ReactElement {
  const { name, ingredients } = props;

  return (
    <Box mb={1}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <Typography variant="h5">{name}</Typography>
            </Box>
            {ingredients.map((ingredient) => (
              <Ingredient
                key={ingredient.name}
                name={ingredient.name}
                quantity={ingredient.quantity}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
