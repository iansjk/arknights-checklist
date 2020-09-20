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
import { GoalCategory, Goal, operatorGoals } from "./operator-goals";
import GoalOverview from "./components/GoalOverview";

const appTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App(): React.ReactElement {
  const [operatorName, setOperatorName] = useState("");
  const [goals, setGoals] = useState([] as Goal[]);
  const [goalsOptionsOpen, setGoalsOptionsOpen] = useState(false);
  const [activeGoals, setActiveGoals] = useState(
    [] as ({ operatorName: string } & Goal)[]
  );

  function handleAddGoals() {
    setActiveGoals(
      goals.map((goal) => ({
        operatorName,
        ...goal,
      }))
    );
    setOperatorName("");
    setGoals([]);
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
              options={[operatorName, ...Object.keys(RECIPES.operators).sort()]}
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
                  options={operatorGoals(operatorName).sort(
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
            <GoalOverview goals={activeGoals} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
