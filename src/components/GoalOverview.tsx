import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Divider,
} from "@material-ui/core";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import MATERIALS from "../materials";
import { OperatorGoalData } from "../operator-goals";
import ItemNeeded from "./ItemNeeded";
import { formatQuantity } from "./ItemStack";
import OperatorGoal from "./OperatorGoal";

const useStyles = makeStyles((theme) => ({
  lmdIcon: {
    height: "18px",
    marginLeft: theme.spacing(0.5),
    position: "relative",
    top: theme.spacing(0.25),
  },
  totalCostHeader: {
    fontWeight: "initial",
  },
  operatorGoalsHeaderContent: {
    "&:last-child": {
      paddingBottom: theme.spacing(2),
    },
  },
}));

interface GoalOverviewProps {
  goals: OperatorGoalData[];
  onGoalDeleted: (goal: OperatorGoalData) => void;
  onClearAllGoals: () => void;
}

const GoalOverview = React.memo(function GoalOverview(
  props: GoalOverviewProps
): React.ReactElement {
  const { goals, onGoalDeleted, onClearAllGoals } = props;
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
  const classes = useStyles();

  const materialsNeeded: Record<string, number> = {};
  goals.forEach((goal) =>
    goal.requiredItems.forEach((item) => {
      materialsNeeded[item.name] =
        item.quantity + (materialsNeeded[item.name] || 0);
    })
  );
  Object.keys(MATERIALS)
    .sort((a, b) => MATERIALS[b].tier - MATERIALS[a].tier)
    .forEach((itemName) => {
      if (
        Object.prototype.hasOwnProperty.call(itemsToCraft, itemName) &&
        Object.prototype.hasOwnProperty.call(materialsNeeded, itemName)
      ) {
        const needed = Math.max(
          materialsNeeded[itemName] - (materialsOwned[itemName] || 0),
          0
        );
        MATERIALS[itemName]?.ingredients?.forEach((ingredient) => {
          materialsNeeded[ingredient.name] =
            (materialsNeeded[ingredient.name] || 0) +
            needed * ingredient.quantity;
        });
      }
    });
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
      materialsNeeded[craftedItemName] = Math.max(
        materialsNeeded[craftedItemName] - numCraftable,
        0
      );
    });

  const handleIncrementOwned = React.useCallback(
    function handleIncrementOwned(itemName: string): void {
      setMaterialsOwned((prevOwned) => ({
        ...prevOwned,
        [itemName]: 1 + (prevOwned[itemName] || 0),
      }));
    },
    [setMaterialsOwned]
  );

  const handleDecrementOwned = React.useCallback(
    function handleDecrementOwned(itemName: string): void {
      setMaterialsOwned((prevOwned) => ({
        ...prevOwned,
        [itemName]: Math.max(0, (prevOwned[itemName] || 0) - 1),
      }));
    },
    [setMaterialsOwned]
  );

  const handleChangeOwned = React.useCallback(
    function handleChangeOwned(itemName: string, rawInput: string): void {
      const newValue: number | null = !rawInput ? null : parseInt(rawInput, 10);
      if (newValue === null || !Number.isNaN(newValue)) {
        setMaterialsOwned((prevOwned) => ({
          ...prevOwned,
          [itemName]: newValue,
        }));
      }
    },
    [setMaterialsOwned]
  );

  const isMaterialComplete = React.useCallback(
    function isMaterialComplete(name: string): boolean {
      let multiplier = 1;
      if (name === "LMD") {
        multiplier = 1000;
      }
      return (materialsOwned[name] || 0) * multiplier >= materialsNeeded[name];
    },
    [materialsNeeded, materialsOwned]
  );

  const handleCraftingToggle = React.useCallback(
    function handleCraftingToggle(itemName: string) {
      setItemsToCraft((prevObj) => {
        if (Object.prototype.hasOwnProperty.call(prevObj, itemName)) {
          const newObj = { ...prevObj };
          delete newObj[itemName];
          return newObj;
        }
        return { ...prevObj, [itemName]: true };
      });
    },
    [setItemsToCraft]
  );

  const handleReset = React.useCallback(
    function handleReset() {
      setItemsToCraft({});
      setMaterialsOwned({});
    },
    [setItemsToCraft, setMaterialsOwned]
  );

  function renderItemsNeeded(
    objectEntries: [string, number][]
  ): React.ReactElement[] {
    return objectEntries
      .sort(
        ([nameA, neededA], [nameB, neededB]) =>
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

  const requiredMaterials = Object.entries(materialsNeeded).filter(
    ([name, _]) => name !== "LMD"
  );

  return (
    <Grid container spacing={2}>
      <Grid component="section" item md={7} data-testid="materialsLists">
        {requiredMaterials.length > 0 && (
          <Card>
            <CardContent>
              <Box clone mb={1}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography component="h2" variant="h5">
                      Required materials
                    </Typography>
                    <Box my={1} width="90%">
                      <Divider />
                    </Box>
                    <Typography
                      className={classes.totalCostHeader}
                      component="span"
                      variant="h6"
                    >
                      Total cost:&nbsp;
                      <b>{formatQuantity(materialsNeeded.LMD || 0)}</b>
                      <img
                        className={classes.lmdIcon}
                        src={`${process.env.PUBLIC_URL}/images/icons/lmd.png`}
                        alt="LMD"
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box textAlign="end">
                      <Button
                        variant="outlined"
                        onClick={handleReset}
                        startIcon={<RotateLeftIcon />}
                      >
                        Reset
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={1}>
                {renderItemsNeeded(requiredMaterials)}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Grid>
      <Grid component="section" item xs={12} md={5}>
        {goals.length > 0 && (
          <>
            <Box clone mb={1}>
              <Card>
                <CardContent className={classes.operatorGoalsHeaderContent}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography component="h2" variant="h5">
                        Operator goals
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Box textAlign="end">
                        <Button
                          variant="outlined"
                          onClick={onClearAllGoals}
                          startIcon={<ClearAllIcon />}
                        >
                          Clear All
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            {goals.map((goal) => (
              <OperatorGoal
                key={`${goal.operatorName}${goal.name}`}
                goal={goal}
                onDelete={onGoalDeleted}
              />
            ))}
          </>
        )}
      </Grid>
    </Grid>
  );
});
export default GoalOverview;
