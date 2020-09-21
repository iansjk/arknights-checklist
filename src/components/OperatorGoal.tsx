import { Box, Card, Typography } from "@material-ui/core";
import React from "react";
import { OperatorGoalData } from "../operator-goals";
import ItemStack from "./ItemStack";

interface GoalProps {
  goal: OperatorGoalData;
}
export default function Goal(props: GoalProps): React.ReactElement {
  const { goal } = props;
  return (
    <Card>
      <Box display="flex">
        <Typography>{goal.operatorName}</Typography>
        <Typography>{goal.name}</Typography>
        {goal.requiredItems.map((item) => (
          <ItemStack
            key={item.name}
            name={item.name}
            quantity={item.quantity}
          />
        ))}
      </Box>
    </Card>
  );
}
