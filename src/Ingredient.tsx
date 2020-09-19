import { Box } from "@material-ui/core";
import React from "react";
import { Ingredient as IngredientProps } from "./materials";

export default function Ingredient(props: IngredientProps): React.ReactElement {
  const { name, quantity } = props;
  return (
    <Box>
      <span>
        {name} {`x${quantity}`}
      </span>
    </Box>
  );
}
