import {
  Box,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import ItemStack from "./ItemStack";

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

const useInputStyles = makeStyles({
  input: {
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
});

interface ItemNeededProps {
  name: string;
  owned: number | null;
  needed: number;
  complete?: boolean;
  onIncrement: (itemName: string) => void;
  onDecrement: (itemName: string) => void;
  onChange: (itemName: string, rawInput: string) => void;
}

export default function ItemNeeded({
  name,
  owned,
  needed,
  complete = false,
  onIncrement,
  onDecrement,
  onChange,
}: ItemNeededProps): React.ReactElement {
  const outlinedInputClasses = useOutlinedInputStyles();
  const inputAdornmentClasses = useInputAdornmentStyles();
  const inputClasses = useInputStyles();

  return (
    <>
      <ItemStack name={name} quantity={needed} complete={complete} />
      <Box position="relative">
        <TextField
          size="small"
          variant="outlined"
          value={owned}
          onChange={(event) => onChange(name, event.target.value)}
          inputProps={{
            type: "number",
            className: inputClasses.input,
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
      </Box>
    </>
  );
}
