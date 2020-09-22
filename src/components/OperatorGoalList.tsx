import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import { OperatorGoalData } from "../operator-goals";
import ItemNeeded from "./ItemNeeded";
import ItemStack from "./ItemStack";
import OperatorGoal from "./OperatorGoal";

interface GoalOverviewProps {
  goals: OperatorGoalData[];
  onGoalDeleted: (goal: OperatorGoalData) => void;
}

export default function GoalOverview(
  props: GoalOverviewProps
): React.ReactElement {
  const { goals, onGoalDeleted } = props;
  const [materialsOwned, setMaterialsOwned] = useLocalStorage(
    "materialsOwned",
    {} as Record<string, number>
  );
  const materialsNeeded: Record<string, number> = {};

  goals.forEach((goal) =>
    goal.requiredItems.forEach((item) => {
      materialsNeeded[item.name] =
        item.quantity + (materialsNeeded[item.name] || 0);
    })
  );

  function handleIncrementOwned(itemName: string): void {
    setMaterialsOwned((prevOwned) => ({
      ...prevOwned,
      [itemName]: 1 + (prevOwned[itemName] || 0),
    }));
  }

  function handleDecrementOwned(itemName: string): void {
    setMaterialsOwned((prevOwned) => ({
      ...prevOwned,
      [itemName]: Math.max(0, (prevOwned[itemName] || 0) - 1),
    }));
  }

  function handleChangeOwned(itemName: string, newCount: number): void {
    setMaterialsOwned((prevOwned) => ({ ...prevOwned, [itemName]: newCount }));
  }

  function renderItemsNeeded(
    objectEntries: [string, number][]
  ): React.ReactElement[] {
    return objectEntries.map(([name, needed]) =>
      name === "LMD" ? (
        <Grid item key={name} xs={2} md={3}>
          <ItemStack name={name} quantity={needed} />
        </Grid>
      ) : (
        <Grid item key={name} xs={2} md={3}>
          <ItemNeeded
            {...{ name, needed }}
            owned={materialsOwned[name] || 0}
            complete={materialsOwned[name] >= needed}
            onIncrement={handleIncrementOwned}
            onDecrement={handleDecrementOwned}
            onChange={handleChangeOwned}
          />
        </Grid>
      )
    );
  }

  const requiredMaterials = Object.entries(materialsNeeded).filter(
    ([name, needed]) => !materialsOwned[name] || materialsOwned[name] < needed
  );
  const completedMaterials = Object.entries(materialsNeeded).filter(
    ([name, needed]) => materialsOwned[name] >= needed
  );

  return (
    <Grid container spacing={2}>
      <Grid item lg={6}>
        {requiredMaterials.length > 0 && (
          <Card>
            <CardContent>
              <Typography component="h2" variant="h5">
                Required materials
              </Typography>
              <Grid container spacing={1}>
                {renderItemsNeeded(requiredMaterials)}
              </Grid>
            </CardContent>
          </Card>
        )}
        {completedMaterials.length > 0 && (
          <Box mt={1}>
            <Card>
              <CardContent>
                <Typography component="h3" variant="h5">
                  Completed materials
                </Typography>
                <Grid container spacing={1}>
                  {renderItemsNeeded(completedMaterials)}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} lg={6}>
        {goals.map((goal) => (
          <OperatorGoal
            key={`${goal.operatorName}${goal.name}`}
            goal={goal}
            onDelete={onGoalDeleted}
          />
        ))}
      </Grid>
    </Grid>
  );
}
