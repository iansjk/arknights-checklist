import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
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
import { Ingredient } from "./materials";
import RecipeList from "./RecipeList";

const appTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const allGoals = [
  "Elite 1",
  "Elite 2",
  ...Array(6)
    .fill(0)
    .map((_, i) => `Skill Level ${i + 1} -> ${i + 2}`),
  ...Array(9)
    .fill(0)
    .map((_, i) => `Skill ${Math.floor(i / 3) + 1} Mastery ${(i % 3) + 1}`),
];

interface Recipe {
  name: string;
  ingredients: Ingredient[];
}

function App(): React.ReactElement {
  const [recipes, setRecipes] = useState([] as Recipe[]);
  const [operatorName, setOperatorName] = useState("");
  const [goals, setGoals] = useState([] as string[]);

  useEffect(() => {
    const recipeBook = RECIPES.operators[operatorName];
    const newRecipes = goals.map((goal) => {
      let match = goal.match(/Elite (?<rank>\d)/);
      if (match) {
        return {
          name: goal,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ingredients: recipeBook.elite![
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            parseInt(match.groups!.rank, 10) as 1 | 2
          ]!,
        };
      }
      match = goal.match(/Skill (?<skillSlot>\d) Mastery (?<masteryLevel>\d)/);
      if (match) {
        return {
          name: goal,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ingredients: recipeBook.masteries![
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            parseInt(match.groups!.skillSlot, 10) as 1 | 2 | 3
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ]![parseInt(match.groups!.masteryLevel, 10) as 1 | 2 | 3]!,
        };
      }
      match = goal.match(/Skill Level \d -> (?<skillLevel>\d)/);
      return {
        name: goal,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ingredients: recipeBook.skillLevels[
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          parseInt(match!.groups!.skillLevel, 10) as 2 | 3 | 4 | 5 | 6 | 7
        ]!,
      };
    });
    setRecipes(newRecipes);
  }, [operatorName, goals]);

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
              options={Object.keys(RECIPES.operators)}
              autoComplete
              autoHighlight
              autoSelect
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  label="Operator name"
                  variant="outlined"
                />
              )}
              onChange={(_, value) => setOperatorName(value || "")}
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <Box display="flex">
              <Box flexGrow={1} mr={2}>
                <Autocomplete
                  options={allGoals}
                  autoComplete
                  autoHighlight
                  multiple
                  renderInput={(params) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <TextField {...params} label="Goals" variant="outlined" />
                  )}
                  onChange={(_, value) => setGoals(value)}
                />
              </Box>
              <Button
                color="primary"
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RecipeList recipes={recipes} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
