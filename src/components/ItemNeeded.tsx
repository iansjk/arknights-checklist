import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import GavelIcon from "@material-ui/icons/Gavel";
import React from "react";
import ItemStack from "./ItemStack";
import MATERIALS from "../materials";

const useOutlinedInputStyles = makeStyles((theme) => ({
  input: {
    textAlign: "center",
  },
  adornedStart: {
    paddingLeft: theme.spacing(1),
  },
  adornedEnd: {
    paddingRight: theme.spacing(1),
  },
}));

const useInputAdornmentStyles = makeStyles({
  positionStart: {
    marginRight: 0,
  },
  positionEnd: {
    marginLeft: 0,
  },
});

const useStyles = makeStyles({
  input: {
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  notCraftableDisabledButton: {
    height: "2rem",
    fontSize: "smaller",
  },
});

interface ItemNeededProps {
  name: string;
  owned: number | null;
  needed: number;
  complete?: boolean;
  crafting?: boolean;
  onIncrement: (itemName: string) => void;
  onDecrement: (itemName: string) => void;
  onChange: (itemName: string, rawInput: string) => void;
  onCraftingToggle: (itemName: string) => void;
}

export default function ItemNeeded({
  name,
  owned,
  needed,
  complete = false,
  crafting = false,
  onIncrement,
  onDecrement,
  onChange,
  onCraftingToggle,
}: ItemNeededProps): React.ReactElement {
  const outlinedInputClasses = useOutlinedInputStyles();
  const inputAdornmentClasses = useInputAdornmentStyles();
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <ItemStack name={name} quantity={needed} complete={complete} />
        <TextField
          size="small"
          variant="outlined"
          value={owned}
          onFocus={(event) => event.target.select()}
          onChange={(event) => onChange(name, event.target.value)}
          inputProps={{
            type: "number",
            className: classes.input,
            min: 0,
            step: 1,
          }}
          InputProps={{
            classes: outlinedInputClasses,
            startAdornment: (
              <InputAdornment position="start" classes={inputAdornmentClasses}>
                <IconButton
                  aria-label="remove 1 from owned amount"
                  edge="start"
                  disabled={owned === 0}
                  onClick={() => onDecrement(name)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" classes={inputAdornmentClasses}>
                {name === "LMD" ? "K" : null}
                <IconButton
                  aria-label="add 1 to owned amount"
                  edge="end"
                  onClick={() => onIncrement(name)}
                >
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {MATERIALS[name]?.ingredients ? (
          <Button
            size="small"
            fullWidth
            color="secondary"
            variant={crafting ? "contained" : "outlined"}
            onClick={() => onCraftingToggle(name)}
          >
            <GavelIcon />
            {crafting ? "Crafting" : "Craft"}
          </Button>
        ) : (
          <Button
            className={classes.notCraftableDisabledButton}
            size="small"
            fullWidth
            variant="outlined"
            disabled
          >
            (Not Craftable)
          </Button>
        )}
      </Box>
    </>
  );
}
