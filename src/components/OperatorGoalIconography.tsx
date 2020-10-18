import { makeStyles, Box } from "@material-ui/core";
import React from "react";
import { GoalCategory, OperatorGoalData } from "../operator-goals";
import RECIPES from "../recipes";

const useStyles = makeStyles({
  operatorIcon: {
    width: 30,
  },
});

interface OperatorGoalIconographyProps {
  goal: OperatorGoalData;
}

function OperatorGoalIconography(
  props: OperatorGoalIconographyProps
): React.ReactElement {
  const { goal } = props;
  const classes = useStyles();

  if (goal.category === GoalCategory.Elite) {
    const level = goal.name.charAt(goal.name.length - 1);
    return (
      <Box clone mr={0.25}>
        <img
          className={classes.operatorIcon}
          src={`${process.env.PUBLIC_URL}/images/icons/elite${level}.png`}
          alt={goal.name}
        />
      </Box>
    );
  }
  if (goal.category === GoalCategory.Mastery) {
    const match = goal.name.match(
      /Skill (?<skillSlot>\d) Mastery (?<masteryLevel>\d)/
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const skillSlot = parseInt(match!.groups!.skillSlot, 10);
    // eslint-disable-next-line prefer-destructuring, @typescript-eslint/no-non-null-assertion
    const masteryLevel = match!.groups!.masteryLevel;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const masteryData = RECIPES.operators[goal.operatorName].masteries![
      skillSlot
    ];
    return (
      <Box mr={0.5}>
        <img
          className={classes.operatorIcon}
          src={`${process.env.PUBLIC_URL}/images/skills/${masteryData.skillId}.png`}
          alt={masteryData.skillName}
        />
        <img
          className={classes.operatorIcon}
          src={`${process.env.PUBLIC_URL}/images/icons/mastery${masteryLevel}.png`}
          alt={`Mastery ${masteryLevel}`}
        />
      </Box>
    );
  }
  return <></>;
}
export default OperatorGoalIconography;
