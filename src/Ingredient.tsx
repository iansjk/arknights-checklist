import { Box, makeStyles, Typography } from "@material-ui/core";
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
  quantityWrapper: {
    background: "rgba(0, 0, 0, 0.7)",
  },
});

function formatQuantity(quantity: number): string {
  if (quantity < 1000) {
    return `${quantity}`;
  }

  return `${
    quantity % 1000 === 0 ? `${quantity / 1000}` : (quantity / 1000).toFixed(1)
  }K`;
}

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
        <Box
          className={classes.quantityWrapper}
          position="absolute"
          right="10%"
          bottom="10%"
          py="2px"
          px={1.5}
          boxShadow={3}
        >
          <Typography variant="button">{formatQuantity(quantity)}</Typography>
        </Box>
      </div>
    </>
  );
}
