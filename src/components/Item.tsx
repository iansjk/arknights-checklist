import { makeStyles, Box, Tooltip } from "@material-ui/core";
import React from "react";
import slugify from "slugify";
import MATERIALS from "../materials";

const imageSize = 95;
export const backgroundSize = imageSize + 5;

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
});

const useTooltipStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: theme.typography.pxToRem(12),
  },
}));

interface ItemProps {
  name: string;
}

export default function Item(props: ItemProps): React.ReactElement {
  const { name } = props;
  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();

  return (
    <div
      className={classes.ingredientBackground}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/item-bgs/tier${MATERIALS[name].tier}.png)`,
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
        <Tooltip arrow classes={tooltipClasses} title={name} placement="top">
          <img
            className={classes.ingredientImage}
            src={`${process.env.PUBLIC_URL}/images/items/${slugify(name, {
              lower: true,
            })}.png`}
            alt={name}
          />
        </Tooltip>
      </Box>
    </div>
  );
}
