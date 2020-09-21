import { makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import Item, { backgroundSize } from "./Item";

const useStyles = makeStyles({
  quantityWrapper: {
    background: "rgba(0, 0, 0, 0.7)",
  },
});

export function formatQuantity(quantity: number): string {
  if (quantity < 1000) {
    return `${quantity}`;
  }

  return `${
    quantity % 1000 === 0 ? `${quantity / 1000}` : (quantity / 1000).toFixed(1)
  }K`;
}

interface ItemStackProps {
  name: string;
  quantity: number;
}

export default function ItemStack(props: ItemStackProps): React.ReactElement {
  const { name, quantity } = props;
  const classes = useStyles();

  return (
    <Box
      position="relative"
      width={backgroundSize}
      height={backgroundSize}
      margin="auto"
    >
      <Item name={name} />
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
    </Box>
  );
}
