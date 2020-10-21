import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { OperatorGoalData } from "../operator-goals";
import ItemStack from "./ItemStack";
import { getOperatorImagePath } from "../util";
import OperatorGoalIconography from "./OperatorGoalIconography";

const useStyles = makeStyles((theme) => ({
  deleteIconButton: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    padding: 0,
  },
  goalOuterGridContainer: {
    alignItems: "center",
  },
  goalCard: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  goalShortName: {
    lineHeight: theme.typography.h6.lineHeight,
  },
}));

interface GoalProps {
  goal: OperatorGoalData;
  onDelete: (goal: OperatorGoalData) => void;
}

const OperatorGoal = React.memo(function OperatorGoal(
  props: GoalProps
): React.ReactElement {
  const { goal, onDelete } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.only("md"));
  const shouldTextBeCollapsed = isXSmallScreen || isMdScreen;
  const gradientEnd = shouldTextBeCollapsed ? "130px" : "100px";
  const bgImagePositionX = shouldTextBeCollapsed ? "-40px" : "-30px";
  const operatorNameStyle = {
    flexGrow: shouldTextBeCollapsed ? 0 : 1,
    paddingLeft: shouldTextBeCollapsed ? "1rem" : 0,
  };
  // eslint-disable-next-line no-undef-init
  let eliteLevel: number | undefined = undefined;
  if (goal.name === "Elite 1") {
    eliteLevel = 1;
  } else if (goal.name === "Elite 2" || goal.name.includes("Mastery")) {
    eliteLevel = 2;
  }
  const goalCardStyle = {
    backgroundImage: `linear-gradient(to right, transparent, ${
      theme.palette.background.paper
    } ${gradientEnd}), url("${getOperatorImagePath(
      goal.operatorName,
      eliteLevel
    )}")`,
    paddingLeft: shouldTextBeCollapsed ? "2rem" : "3rem",
    backgroundPosition: `${bgImagePositionX} center`,
  };

  const handleClick = React.useCallback(() => onDelete(goal), [goal, onDelete]);

  return (
    <Box mb={1} position="relative">
      <Card className={classes.goalCard} style={goalCardStyle}>
        <CardContent>
          <Grid container className={classes.goalOuterGridContainer}>
            <Grid item xs={12} sm={4} md={12} lg={4}>
              <Grid container>
                <Grid style={operatorNameStyle} item xs sm={12} md lg={12}>
                  <Box mr={2}>
                    <Typography component="h3" variant="h6">
                      {goal.operatorName}
                    </Typography>
                  </Box>
                </Grid>
                <Box
                  clone
                  display="flex"
                  whiteSpace="nowrap"
                  alignItems="center"
                >
                  <Grid item xs sm={12} md lg={12}>
                    <OperatorGoalIconography goal={goal} />
                    <Typography
                      className={classes.goalShortName}
                      component="h4"
                      variant="subtitle1"
                    >
                      {goal.shortName}
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={8}>
              <Box clone justifyContent="space-evenly">
                <Grid container>
                  {goal.requiredItems.map((item) => (
                    <Grid item xs={3} key={item.name}>
                      <ItemStack
                        name={item.name}
                        quantity={item.quantity}
                        size={70}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <IconButton
            aria-label="Delete this goal"
            className={classes.deleteIconButton}
            onClick={handleClick}
          >
            <CancelIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
});
export default OperatorGoal;
