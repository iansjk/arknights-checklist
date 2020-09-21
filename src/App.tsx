import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import RECIPES from "./recipes";
import {
  GoalCategory,
  GoalData,
  goalsForOperator,
  OperatorGoalData,
} from "./operator-goals";
import OperatorGoalList from "./components/OperatorGoalList";

const appTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App(): React.ReactElement {
  const [operatorName, setOperatorName] = useState("");
  const [goals, setGoals] = useState([] as GoalData[]);
  const [goalsOptionsOpen, setGoalsOptionsOpen] = useState(false);
  const [operatorGoals, setOperatorGoals] = useState([] as OperatorGoalData[]);

  function handleAddGoals() {
    setOperatorGoals((prevOperatorGoals) => {
      const deduplicated = Object.fromEntries([
        ...prevOperatorGoals.map((opGoal) => [
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
    setOperatorName("");
    setGoals([]);
  }

  function handleGoalDeleted(toDelete: OperatorGoalData) {
    setOperatorGoals((prevOperatorGoals) =>
      prevOperatorGoals.filter(
        (opGoal) =>
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
          <Grid item sm={12} md={5}>
            <Autocomplete
              options={(operatorName === ""
                ? ["", ...Object.keys(RECIPES.operators)]
                : [...Object.keys(RECIPES.operators)]
              ).sort()}
              filterOptions={(options) =>
                options.filter((option) => option !== "")
              }
              autoComplete
              autoHighlight
              value={operatorName}
              onChange={(_, value) => {
                setOperatorName(value || "");
                setGoals([]);
              }}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  label="Operator name"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <Box display="flex">
              <Box flexGrow={1} mr={2}>
                <Autocomplete
                  options={goalsForOperator(operatorName).sort(
                    (a, b) => a.category - b.category
                  )}
                  getOptionLabel={(goal) => goal.name}
                  getOptionSelected={(goal, value) => goal.name === value.name}
                  groupBy={(goal) => GoalCategory[goal.category]}
                  autoComplete
                  autoHighlight
                  multiple
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
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
