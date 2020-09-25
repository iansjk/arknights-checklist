import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import MATERIALS from "../materials";
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
  const [itemsToCraft, setItemsToCraft] = useLocalStorage(
    "itemsToCraft",
    {} as Record<string, boolean>
  );

  const materialsNeeded: Record<string, number> = {};
  goals.forEach((goal) =>
    goal.requiredItems.forEach((item) => {
      materialsNeeded[item.name] =
        item.quantity + (materialsNeeded[item.name] || 0);
    })
  );
  Object.keys(itemsToCraft).forEach((craftedItem) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { ingredients } = MATERIALS[craftedItem]!;
    const craftedItemQuantity = Math.max(
      materialsNeeded[craftedItem] - (materialsOwned[craftedItem] || 0),
      0
    );
    ingredients?.forEach(({ name, quantity }) => {
      materialsNeeded[name] =
        craftedItemQuantity * quantity + (materialsNeeded[name] || 0);
    });
    const amountCraftable = Math.min(
      ...ingredients?.map(({ name, quantity }) =>
        Math.floor((materialsOwned[name] || 0) / quantity)
      )
    );
    materialsNeeded[craftedItem] = Math.max(
      materialsNeeded[craftedItem] - amountCraftable,
      0
    );
  });

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

  function handleCraftingToggle(itemName: string) {
    setItemsToCraft((prevObj) => {
      if (Object.prototype.hasOwnProperty.call(prevObj, itemName)) {
        const newObj = { ...prevObj };
        delete newObj[itemName];
        return newObj;
      }
      return { ...prevObj, [itemName]: true };
    });
  }

  function renderItemsNeeded(
    objectEntries: [string, number][]
  ): React.ReactElement[] {
    return objectEntries
      .sort(
        ([nameA, neededA], [nameB, neededB]) =>
          (nameB === "LMD" ? 1 : 0) - (nameA === "LMD" ? 1 : 0) ||
          ((materialsOwned[nameA] || 0) >= neededA ? 1 : 0) -
            ((materialsOwned[nameB] || 0) >= neededB ? 1 : 0) ||
          MATERIALS[nameB].tier - MATERIALS[nameA].tier ||
          (MATERIALS[nameB].category || 0) - (MATERIALS[nameA].category || 0) ||
          nameA.localeCompare(nameB)
      )
      .map(([name, needed]) => (
        <Box key={name} width="20%" px={0.5} mt={1}>
          <ItemNeeded
            {...{ name, needed }}
            owned={
              materialsOwned[name] === undefined ? 0 : materialsOwned[name]
            }
            complete={isMaterialComplete(name)}
            crafting={Object.prototype.hasOwnProperty.call(itemsToCraft, name)}
            onIncrement={handleIncrementOwned}
            onDecrement={handleDecrementOwned}
            onChange={handleChangeOwned}
            onCraftingToggle={handleCraftingToggle}
          />
        </Box>
      ));
  }

  const requiredMaterials = Object.entries(materialsNeeded);

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
