import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import { OperatorGoalData } from "../operator-goals";
import ItemNeeded from "./ItemNeeded";
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
    {} as Record<string, number | null>
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

  function handleChangeOwned(itemName: string, rawInput: string): void {
    const newValue: number | null = !rawInput ? null : parseInt(rawInput, 10);
    if (newValue === null || !Number.isNaN(newValue)) {
      setMaterialsOwned((prevOwned) => ({
        ...prevOwned,
        [itemName]: newValue,
      }));
    }
  }

  function isMaterialComplete(name: string): boolean {
    let multiplier = 1;
    if (name === "LMD") {
      multiplier = 1000;
    }
    return (materialsOwned[name] || 0) * multiplier >= materialsNeeded[name];
  }

  function renderItemsNeeded(
    objectEntries: [string, number][]
  ): React.ReactElement[] {
    return objectEntries.map(([name, needed]) => (
      <Box width="20%">
        <ItemNeeded
          {...{ name, needed }}
          owned={materialsOwned[name] === undefined ? 0 : materialsOwned[name]}
          complete={isMaterialComplete(name)}
          onIncrement={handleIncrementOwned}
          onDecrement={handleDecrementOwned}
          onChange={handleChangeOwned}
        />
      </Box>
    ));
  }

  const requiredMaterials = Object.entries(materialsNeeded).filter(
    ([name, _]) => !isMaterialComplete(name)
  );
  const completedMaterials = Object.entries(
    materialsNeeded
  ).filter(([name, _]) => isMaterialComplete(name));

  return (
    <Grid container spacing={2}>
      <Grid item lg={7}>
        {requiredMaterials.length > 0 && (
          <Card>
            <CardContent>
              <Typography component="h2" variant="h5" gutterBottom>
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
                <Typography component="h3" variant="h5" gutterBottom>
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
      <Grid item xs={12} lg={5}>
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
