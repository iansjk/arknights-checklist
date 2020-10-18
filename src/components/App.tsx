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

let appTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[700],
      light: "rgb(104, 179, 255)",
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
  const [goals, setGoals] = useState([] as GoalData[]);
  const [goalsOptionsOpen, setGoalsOptionsOpen] = useState(false);
  const [operatorGoals, setOperatorGoals] = useLocalStorage(
    "operatorGoals",
    // actual type should be OperatorGoalData[] but web-api-hooks
    // doesn't recognize OperatorGoalData as a valid JSON object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [] as any
  );
  const classes = useStyles();

  const handleAddGoals = React.useCallback(
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
    },
    [goals, operatorName, setOperatorGoals]
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
                    getOptionSelected={(goal, value) =>
                      goal.name === value.name
                    }
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
                            a.category -
                            b.category +
                            a.name.localeCompare(b.name)
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
