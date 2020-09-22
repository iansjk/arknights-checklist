import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
  complete?: boolean;
}

export default function Item({
  name,
  complete = false,
}: ItemProps): React.ReactElement {
  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();

  return (
    <Box position="relative">
      <div
        className={classes.ingredientBackground}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/item-bgs/tier${MATERIALS[name].tier}.png)`,
          opacity: complete ? 0.3 : 1,
        }}
      >
        <Box className={classes.overlay}>
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
      {complete && (
        <Box className={classes.overlay} top="0">
          <CheckCircleIcon htmlColor="greenyellow" fontSize="large" />
        </Box>
      )}
    </Box>
  );
}
