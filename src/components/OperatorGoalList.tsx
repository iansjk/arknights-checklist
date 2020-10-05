import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import MATERIALS, { Ingredient } from "../materials";
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
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const materialsNeeded: Record<string, number> = {};
  goals.forEach((goal) =>
    goal.requiredItems.forEach((item) => {
      materialsNeeded[item.name] =
        item.quantity + (materialsNeeded[item.name] || 0);
      if (Object.prototype.hasOwnProperty.call(itemsToCraft, item.name)) {
        let curr = [item];
        let next: Ingredient[];
        do {
          next = [];
          for (const craftedItem of curr) {
            const ingredients = MATERIALS[craftedItem.name].ingredients || [];
            for (const ingredient of ingredients) {
              materialsNeeded[ingredient.name] =
                ingredient.quantity *
                Math.max(
                  materialsNeeded[craftedItem.name] -
                    (materialsOwned[craftedItem.name] || 0),
                  0
                );
              if (
                Object.prototype.hasOwnProperty.call(
                  itemsToCraft,
                  ingredient.name
                )
              ) {
                next.push(ingredient);
              }
            }
          }
          curr = next;
        } while (next.length > 0);
      }
    })
  );
  const craftingMaterialsOwned = { ...materialsOwned };
  Object.keys(itemsToCraft)
    .filter(
      (itemName) => materialsNeeded[itemName] && materialsNeeded[itemName] > 0
    )
    // TODO sort order really ought to be by tier first, then by goal priority
    .sort((a, b) => MATERIALS[a].tier - MATERIALS[b].tier)
    .forEach((craftedItemName) => {
      const { ingredients } = MATERIALS[craftedItemName];
      const numCraftable = Math.min(
        ...ingredients?.map((ingredient) => {
          return Math.floor(
            (craftingMaterialsOwned[ingredient.name] || 0) / ingredient.quantity
          );
        })
      );
      ingredients?.forEach((ingredient) => {
        craftingMaterialsOwned[ingredient.name] = Math.max(
          (craftingMaterialsOwned[ingredient.name] || 0) -
            ingredient.quantity * numCraftable,
          0
        );
      });
      materialsNeeded[craftedItemName] -= numCraftable;
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
      .map(([name, needed]) => {
        const inner = (
          <ItemNeeded
            size={isXSmallScreen ? 75 : undefined}
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
        );
        const outer = isLargeScreen ? (
          <Box key={name} data-testid={name} width="20%" px={0.5} mt={1}>
            {inner}
          </Box>
        ) : (
          <Grid key={name} data-testid={name} item xs={4} sm={3} md={3}>
            {inner}
          </Grid>
        );
        return outer;
      });
  }

  const requiredMaterials = Object.entries(materialsNeeded);

  return (
    <Grid container spacing={2}>
      <Grid item md={7} data-testid="materialsLists">
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
      <Grid item xs={12} md={5}>
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
