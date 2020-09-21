import { Box, IconButton, InputAdornment, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import Item from "./Item";
import { formatQuantity } from "./ItemStack";

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

  return (
    <Box>
      <Item name={name} />
      <TextField
        size="small"
        value={owned}
        onChange={(event) => {
          const newValue = parseInt(event.target.value, 10) || 0;
          onChange(name, newValue);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
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
            <InputAdornment position="end">
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
        variant="outlined"
      />
    </Box>
  );
}
