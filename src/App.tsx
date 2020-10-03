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
} from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { useLocalStorage } from "web-api-hooks";
import OperatorGoalList from "./components/OperatorGoalList";
import {
  GoalCategory,
  GoalData,
  goalsForOperator,
  OperatorGoalData,
} from "./operator-goals";
import RECIPES from "./recipes";

let appTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[700],
    },
    secondary: {
      main: pink.A700,
    },
  },
  overrides: {
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

function App(): React.ReactElement {
  const [operatorName, setOperatorName] = useState(null as string | null);
  const [goals, setGoals] = useState([] as GoalData[]);
  const [goalsOptionsOpen, setGoalsOptionsOpen] = useState(false);
  const [operatorGoals, setOperatorGoals] = useLocalStorage(
    "operatorGoals",
    // actual type should be OperatorGoalData[] but web-api-hooks
    // doesn't recognize OperatorGoalData as a valid JSON object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [] as any
  );

  function handleAddGoals() {
    setOperatorGoals((prevOperatorGoals: OperatorGoalData[]) => {
      const deduplicated = Object.fromEntries([
        ...prevOperatorGoals.map((opGoal: OperatorGoalData) => [
          `${opGoal.operatorName}${opGoal.name}`,
          opGoal,
        ]),
        ...goals.map((goal) => [
          `${operatorName}${goal.name}`,
          { operatorName, ...goal },
        ]),
      ]);
      return Object.values(deduplicated);
    });
    setOperatorName(null);
    setGoals([]);
  }

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
  }

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar>
          <Toolbar>
            <Typography component="h1" variant="h4">
              Arknights Materials Checklist
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box mt={2} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <Autocomplete
              options={Object.keys(RECIPES.operators).sort()}
              autoComplete
              autoHighlight
              value={operatorName}
              onChange={(_, value) => {
                setOperatorName(value);
                setGoals([]);
              }}
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
              <Box flexGrow={1} mr={2}>
                <Autocomplete
                  options={
                    operatorName
                      ? goalsForOperator(operatorName).sort(
                          (a, b) => a.category - b.category
                        )
                      : []
                  }
                  getOptionLabel={(goal) => goal.name}
                  getOptionSelected={(goal, value) => goal.name === value.name}
                  groupBy={(goal) => GoalCategory[goal.category]}
                  autoComplete
                  autoHighlight
                  multiple
                  limitTags={4}
                  noOptionsText="Please select an operator first."
                  value={goals}
                  open={goalsOptionsOpen}
                  onChange={(_, value) =>
                    setGoals(
                      value.sort(
                        (a, b) =>
                          a.category - b.category + a.name.localeCompare(b.name)
                      )
                    )
                  }
                  onOpen={() => setGoalsOptionsOpen(true)}
                  onClose={(_, reason) => {
                    const actualReason = reason as string;
                    if (
                      actualReason !== "select-option" &&
                      actualReason !== "remove-option"
                    ) {
                      setGoalsOptionsOpen(false);
                    }
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Goals" variant="outlined" />
                  )}
                />
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
            <OperatorGoalList
              goals={operatorGoals}
              onGoalDeleted={handleGoalDeleted}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
