import {
  Box,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import Item from "./Item";
import { formatQuantity } from "./ItemStack";

const useOutlinedInputStyles = makeStyles((theme) => ({
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

interface ItemNeededProps {
  name: string;
  owned: number;
  needed: number;
  onIncrement: (itemName: string) => void;
  onDecrement: (itemName: string) => void;
  onChange: (itemName: string, newCount: number) => void;
}

export default function ItemNeeded(props: ItemNeededProps): React.ReactElement {
  const { name, owned, needed, onIncrement, onDecrement, onChange } = props;
  const outlinedInputClasses = useOutlinedInputStyles();
  const inputAdornmentClasses = useInputAdornmentStyles();

  return (
    <>
      <Item name={name} />
      <Box position="relative">
        <TextField
          size="small"
          variant="outlined"
          value={owned}
          onChange={(event) => {
            const newValue = parseInt(event.target.value, 10) || 0;
            onChange(name, newValue);
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
                / {formatQuantity(needed)}
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
