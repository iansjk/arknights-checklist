import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import slugify from "slugify";
import MATERIALS from "../materials";

const imageSize = 95;
const backgroundSize = imageSize + 5;

const useStyles = makeStyles({
  ingredientBackground: {
    width: backgroundSize,
    height: backgroundSize,
    backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
    position: "relative",
    margin: "auto",
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

interface IngredientProps {
  name: string;
  quantity: number;
  // eslint-disable-next-line react/require-default-props
  editable?: boolean;
}

export default function Ingredient({
  name,
  quantity,
  editable = false,
}: IngredientProps): React.ReactElement {
  const classes = useStyles();
  const materialData = MATERIALS[name];
  return (
    <Grid item md={2}>
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
        {!editable && (
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
        )}
      </div>
      {editable && (
        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="remove 1 from owned amount"
                  edge="start"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                / {formatQuantity(quantity)}
                <IconButton aria-label="add 1 to owned amount" edge="end">
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      )}
    </Grid>
  );
}
