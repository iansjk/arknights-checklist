import {
  Box,
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { OperatorGoalData } from "../operator-goals";
import ItemStack from "./ItemStack";

const useStyles = makeStyles((theme) => ({
  deleteIconButton: {
    position: "absolute",
    top: theme.spacing(-3),
    right: theme.spacing(-3),
  },
}));

interface GoalProps {
  goal: OperatorGoalData;
  onDelete: (goal: OperatorGoalData) => void;
}

export default function Goal(props: GoalProps): React.ReactElement {
  const { goal, onDelete } = props;
  const classes = useStyles();
  return (
    <Box mb={1} position="relative">
      <Card>
        <CardContent>
          <Box display="flex">
            <Box my="auto">
              <Typography variant="h5">{goal.operatorName}</Typography>
              <Typography variant="subtitle1">{goal.name}</Typography>
            </Box>
            {goal.requiredItems.map((item) => (
              <ItemStack
                key={item.name}
                name={item.name}
                quantity={item.quantity}
              />
            ))}
          </Box>
          <IconButton
            className={classes.deleteIconButton}
            onClick={() => onDelete(goal)}
          >
            <CancelIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
}
