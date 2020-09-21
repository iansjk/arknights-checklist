import { Card, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { OperatorGoalData } from "../operator-goals";
import OperatorGoal from "./OperatorGoal";
import ItemNeeded from "./ItemNeeded";
import ItemStack from "./ItemStack";

interface GoalOverviewProps {
  goals: OperatorGoalData[];
}

export default function GoalOverview(
  props: GoalOverviewProps
): React.ReactElement {
  const { goals } = props;
  const [materialsOwned, setMaterialsOwned] = useState(
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
        <Grid item xs={2}>
          <ItemStack key={name} name={name} quantity={needed} />
        </Grid>
      ) : (
        <Grid item xs={2}>
          <ItemNeeded
            key={name}
            {...{ name, needed }}
            owned={materialsOwned[name] || 0}
            onIncrement={handleIncrementOwned}
            onDecrement={handleDecrementOwned}
            onChange={handleChangeOwned}
          />
        </Grid>
      )
    );
  }

  return (
    <>
      <Card>
        <Typography>Required materials:</Typography>
        <Grid container spacing={1}>
          {renderItemsNeeded(
            Object.entries(materialsNeeded).filter(
              ([name, needed]) =>
                !materialsOwned[name] || materialsOwned[name] < needed
            )
          )}
        </Grid>
      </Card>
      <Card>
        <Typography>Completed materials:</Typography>
        <Grid container spacing={1}>
          {renderItemsNeeded(
            Object.entries(materialsNeeded).filter(
              ([name, needed]) => materialsOwned[name] >= needed
            )
          )}
        </Grid>
      </Card>
      <Card />
      {goals.map((goal) => (
        <OperatorGoal key={`${goal.operatorName}${goal.name}`} goal={goal} />
      ))}
    </>
  );
}
