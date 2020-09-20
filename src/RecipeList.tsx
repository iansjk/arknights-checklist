import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import IngredientComponent from "./Ingredient";
import { Ingredient } from "./materials";
import Recipe from "./Recipe";

interface RecipeListProps {
  recipes: { name: string; ingredients: Ingredient[] }[];
}

export default function RecipeList(props: RecipeListProps): React.ReactElement {
  const { recipes } = props;
  const allIngredients: Record<string, number> = {};

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((item) => {
      allIngredients[item.name] =
        item.quantity + (allIngredients[item.name] || 0);
    });
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {Object.keys(allIngredients).length > 0 && (
          <Card>
            <CardContent>
              <Typography variant="h5">Required materials:</Typography>
              <Box display="flex" alignItems="center">
                <Grid container>
                  {Object.keys(allIngredients).map((key) => (
                    <IngredientComponent
                      key={key}
                      name={key}
                      editable
                      quantity={allIngredients[key]}
                    />
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.name}
              name={recipe.name}
              ingredients={recipe.ingredients}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
