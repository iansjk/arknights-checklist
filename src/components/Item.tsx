import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles, Box, Tooltip } from "@material-ui/core";
import React from "react";
import slugify from "slugify";
import MATERIALS from "../materials";

const useStyles = makeStyles({
  ingredientBackground: {
    position: "relative",
    margin: "auto",
  },
  ingredientImage: {
    objectFit: "contain",
  },
  overlay: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  size: number;
  complete?: boolean;
}

export default function Item({
  name,
  size,
  complete = false,
}: ItemProps): React.ReactElement {
  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();
  const backgroundSize = size - 5;

  return (
    <Box position="relative">
      <div
        className={classes.ingredientBackground}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/item-bgs/tier${MATERIALS[name].tier}.png)`,
          opacity: complete ? 0.3 : 1,
          width: backgroundSize,
          height: backgroundSize,
          backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
        }}
      >
        <Box className={classes.overlay}>
          <Tooltip arrow classes={tooltipClasses} title={name} placement="top">
            <img
              className={classes.ingredientImage}
              style={{
                width: size,
                height: size,
              }}
              src={`${process.env.PUBLIC_URL}/images/items/${slugify(name, {
                lower: true,
              })}.png`}
              alt={name}
            />
          </Tooltip>
        </Box>
      </div>
      {complete && (
        <Box className={classes.overlay} top="0" zIndex="1">
          <CheckCircleIcon htmlColor="greenyellow" fontSize="large" />
        </Box>
      )}
    </Box>
  );
}
