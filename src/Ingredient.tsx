import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import slugify from "slugify";
import MATERIALS, { Ingredient as IngredientProps } from "./materials";

const imageSize = 95;
const backgroundSize = imageSize + 5;

const useStyles = makeStyles({
  ingredientBackground: {
    width: backgroundSize,
    height: backgroundSize,
    backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
    position: "relative",
  },
  ingredientImage: {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
  },
});

export default function Ingredient(props: IngredientProps): React.ReactElement {
  const { name, quantity } = props;
  const classes = useStyles();
  const materialData = MATERIALS[name];
  return (
    <>
      <div
        className={classes.ingredientBackground}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/item-bgs/tier${materialData.tier}.png)`,
        }}
      >
        <Box
          display="flex"
          position="absolute"
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <img
            className={classes.ingredientImage}
            src={`${process.env.PUBLIC_URL}/images/items/${slugify(name, {
              lower: true,
            })}.png`}
            alt={name}
          />
        </Box>
      </div>
    </>
  );
}
