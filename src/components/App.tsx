// currently, attempting to squelch jsx-props-no-spreading on the 2 relevant lines
// (in Autocomplete.renderInput prop) causes the prod build (but *not* dev!) to fail
// by failing to render the second Autocomplete, so it is suppressed for the file
/* eslint-disable react/jsx-props-no-spreading */
import {
  AppBar,
  Box,
  Button,
  Container,
  createMuiTheme,
  CssBaseline,
  Grid,
  responsiveFontSizes,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListSubheader,
} from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { useLocalStorage } from "web-api-hooks";
import GoalOverview from "./GoalOverview";
import {
  GoalCategory,
  GoalData,
  goalsForOperator,
  OperatorGoalData,
} from "../operator-goals";
import RECIPES from "../recipes";
import AppFooter from "./AppFooter";
import OperatorGoalIconography from "./OperatorGoalIconography";

let appTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[700],
      light: "rgb(104, 179, 255)",
    },
    secondary: {
      main: pink[100],
    },
  },
  overrides: {
    MuiMenuItem: {
      root: {
        "&$selected": {
          "&, &:hover": {
            backgroundColor: blue[700],
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "white",
        },
      },
    },
  },
});
appTheme = responsiveFontSizes(appTheme);
appTheme.typography.h4.fontSize = "1.55rem";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(2),
  },
}));

function App(): React.ReactElement {
  const [operatorName, setOperatorName] = useState(null as string | null);
  const [goalNames, setGoalNames] = useState([] as string[]);
  const [operatorGoals, setOperatorGoals] = useLocalStorage(
    "operatorGoals",
    // actual type should be OperatorGoalData[] but web-api-hooks
    // doesn't recognize OperatorGoalData as a valid JSON object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [] as any
  );
  const classes = useStyles();

  const goalSelectMenuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom" as const,
      horizontal: "left" as const,
    },
    transformOrigin: {
      vertical: "top" as const,
      horizontal: "left" as const,
    },
  };

  const availableGoals: Record<string, GoalData> = React.useMemo(() => {
    const goals = operatorName ? goalsForOperator(operatorName) : [];
    return Object.fromEntries(goals.map((goal) => [goal.name, goal]));
  }, [operatorName]);

  const handleAddGoals = React.useCallback(
    function handleAddGoals() {
      setOperatorGoals((prevOperatorGoals: OperatorGoalData[]) => {
        const deduplicated = Object.fromEntries([
          ...prevOperatorGoals.map((opGoal: OperatorGoalData) => [
            `${opGoal.operatorName}${opGoal.name}`,
            opGoal,
          ]),
          ...goalNames.map((goalName) => [
            `${operatorName}${goalName}`,
            { operatorName, ...availableGoals[goalName] },
          ]),
        ]);
        return Object.values(deduplicated);
      });
      setOperatorName(null);
      setGoalNames([]);
    },
    [goalNames, operatorName, setOperatorGoals, availableGoals]
  );

  const handleGoalDeleted = React.useCallback(
    function handleGoalDeleted(toDelete: OperatorGoalData) {
      setOperatorGoals((prevOperatorGoals: OperatorGoalData[]) =>
        prevOperatorGoals.filter(
          (opGoal: OperatorGoalData) =>
            !(
              opGoal.name === toDelete.name &&
              opGoal.operatorName === toDelete.operatorName
            )
        )
      );
    },
    [setOperatorGoals]
  );

  const handleGoalsChanged = React.useCallback(
    function handleGoalsChanged(
      e: React.ChangeEvent<{ name?: string; value: unknown }>
    ) {
      setGoalNames((e.target.value as string[]).filter((name) => !!name));
    },
    [setGoalNames]
  );

  const handleOperatorNameChanged = React.useCallback((_, value) => {
    setOperatorName(value);
    setGoalNames([]);
  }, []);

  const renderGoalSelectOptions = React.useCallback((): React.ReactNode => {
    if (!operatorName) {
      return <MenuItem>Please select an operator first.</MenuItem>;
    }

    let prevCategory: GoalCategory | null = null;
    return Object.values(availableGoals).flatMap((goal) => {
      let subheader: React.ReactElement | null = null;
      if (prevCategory === null || prevCategory !== goal.category) {
        subheader = (
          <ListSubheader key={goal.category}>
            {GoalCategory[goal.category]}
          </ListSubheader>
        );
      }
      prevCategory = goal.category;
      const listItem = (
        <MenuItem key={goal.name} value={goal.name}>
          {(goal.category === GoalCategory.Elite ||
            goal.category === GoalCategory.Mastery) && (
            <OperatorGoalIconography goal={{ ...goal, operatorName }} />
          )}
          {goal.name}
        </MenuItem>
      );
      if (subheader) {
        return [subheader, listItem];
      }
      return [listItem];
    });
  }, [availableGoals, operatorName]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <div className={classes.appContainer}>
        <Container maxWidth="lg">
          <AppBar>
            <Toolbar>
              <Typography component="h1" variant="h4">
                Arknights Materials Checklist
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Grid component="main" className={classes.main} container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Autocomplete
                options={Object.keys(RECIPES.operators).sort()}
                autoComplete
                autoHighlight
                value={operatorName}
                onChange={handleOperatorNameChanged}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Operator name"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} lg={9}>
              <Box display="flex">
                <Box mr={2} flexGrow={1} minWidth={0} width="100%">
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="goal-select">Goals</InputLabel>
                    <Select
                      id="goal-select"
                      autoWidth
                      multiple
                      displayEmpty
                      value={goalNames}
                      MenuProps={goalSelectMenuProps}
                      renderValue={(selected: unknown) =>
                        (selected as string[])
                          .sort((a, b) => a.localeCompare(b))
                          .join(", ")
                      }
                      onChange={handleGoalsChanged}
                    >
                      {renderGoalSelectOptions()}
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleAddGoals}
                >
                  Add
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <GoalOverview
                goals={operatorGoals}
                onGoalDeleted={handleGoalDeleted}
              />
            </Grid>
          </Grid>
        </Container>
        <Box flexGrow={1} />
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
