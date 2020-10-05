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

const useStyles = makeStyles((theme) => ({
  deleteIconButton: {
    position: "absolute",
    top: theme.spacing(-3),
    right: theme.spacing(-3),
  },
  goalOuterGridContainer: {
    alignItems: "center",
  },
  goalCard: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

interface GoalProps {
  goal: OperatorGoalData;
  onDelete: (goal: OperatorGoalData) => void;
}

export default function Goal(props: GoalProps): React.ReactElement {
  const { goal, onDelete } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.only("md"));
  const shouldTextBeCollapsed = isXSmallScreen || isMdScreen;
  const eliteLevel =
    goal.name.includes("Mastery") || goal.name === "Elite 2" ? 2 : undefined;
  const gradientEnd = shouldTextBeCollapsed ? "20%" : "15%";
  const bgImagePositionX = shouldTextBeCollapsed ? "-20%" : "-7%";

  return (
    <Box mb={1}>
      <Card
        className={classes.goalCard}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${
            theme.palette.background.paper
          } ${gradientEnd}), url("${getOperatorImagePath(
            goal.operatorName,
            eliteLevel
          )}")`,
          paddingLeft: shouldTextBeCollapsed ? "2.5rem" : "3rem",
          backgroundPositionX: bgImagePositionX,
        }}
      >
        <CardContent>
          <Grid container className={classes.goalOuterGridContainer}>
            <Grid item xs={12} sm={4} md={12} lg={4}>
              <Box alignSelf="center">
                <Typography
                  component="h4"
                  variant="h5"
                  style={
                    shouldTextBeCollapsed
                      ? {
                          display: "inline-block",
                          marginRight: "1rem",
                        }
                      : {}
                  }
                >
                  {goal.operatorName}
                </Typography>
                <Typography
                  component="h5"
                  variant="subtitle1"
                  style={
                    shouldTextBeCollapsed
                      ? {
                          display: "inline-block",
                        }
                      : {}
                  }
                >
                  {goal.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={8}>
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
            </Grid>
          </Grid>
          <IconButton
            aria-label="Delete this goal"
            className={classes.deleteIconButton}
            onClick={() => onDelete(goal)}
          >
            <CancelIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
}
