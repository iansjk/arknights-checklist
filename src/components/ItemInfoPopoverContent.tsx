/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  makeStyles,
  Divider,
} from "@material-ui/core";
import MATERIALS, { RecommendedStages, Ingredient, Stage } from "../materials";
import ItemStack from "./ItemStack";
import Item from "./Item";

const useCommonStyles = makeStyles((theme) => ({
  itemInfoSection: {
    position: "relative",
    marginBottom: theme.spacing(1),
  },
  itemInfoSectionHeader: {
    display: "inline-block",
    position: "relative",
    backgroundColor: "#888",
    color: "#fff",
    borderRadius: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  itemInfoSectionDivider: {
    position: "absolute",
    left: 0,
    width: "100%",
    margin: 0,
    top: theme.spacing(1.5),
    backgroundColor: "#888",
  },
}));

const useCraftingInfoStyles = makeStyles((theme) => ({
  resetText: {
    color: theme.palette.text.primary,
  },
}));

interface CraftingInfoProps {
  ingredients: Ingredient[];
}

function CraftingInfo(props: CraftingInfoProps): React.ReactElement {
  const { ingredients } = props;
  const classes = useCraftingInfoStyles();
  const commonClasses = useCommonStyles();

  return (
    <>
      <div className={commonClasses.itemInfoSection}>
        <Divider className={commonClasses.itemInfoSectionDivider} />
        <Typography className={commonClasses.itemInfoSectionHeader}>
          Crafting recipe
        </Typography>
      </div>
      <Grid container spacing={1}>
        {ingredients.map((ingredient) => (
          <Grid item key={ingredient.name} xs>
            <Box textAlign="center">
              <div className={classes.resetText}>
                <ItemStack
                  name={ingredient.name}
                  quantity={ingredient.quantity}
                  size={75}
                />
              </div>
              <Typography variant="body2">{ingredient.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const useStageInfoStyles = makeStyles({
  sanityIcon: {
    display: "inline-block",
    width: "18px",
    verticalAlign: "text-top",
  },
  stageType: {
    fontSize: "initial",
  },
  stageData: {
    fontSize: "initial",
    margin: 0,
  },
});

interface StageInfoProps {
  stages: RecommendedStages;
}

function StageInfo(props: StageInfoProps): React.ReactElement {
  const { stages } = props;
  const classes = useStageInfoStyles();
  const commonClasses = useCommonStyles();
  const hasTwoRecommended = !!stages.leastSanity;

  function renderStage(stage: Stage) {
    return (
      <>
        <Typography variant="h4" component="span">
          {stage.name}
        </Typography>
        <Typography>{stage.dropRate}% chance</Typography>
        <Typography>
          {stage.sanityCost}
          <img
            className={classes.sanityIcon}
            src={`${process.env.PUBLIC_URL}/images/icons/sanity.png`}
            alt="Sanity"
          />
        </Typography>
        {stage.extraMaterial && (
          <Box display="flex" alignItems="center" mx={-0.5} mt={-0.5} mb={-1}>
            <Typography>Extra drop:</Typography>
            <Box ml={0.5}>
              <Item name={stage.extraMaterial} size={36} />
            </Box>
          </Box>
        )}
      </>
    );
  }

  return (
    <Box mt={1}>
      <div className={commonClasses.itemInfoSection}>
        <Divider className={commonClasses.itemInfoSectionDivider} />
        <Typography className={commonClasses.itemInfoSectionHeader}>
          Recommended {hasTwoRecommended ? "stages" : "stage"}
        </Typography>
      </div>
      <Box whiteSpace="nowrap" textAlign="center">
        {hasTwoRecommended ? (
          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item className={classes.stageType} xs>
                <Typography>Most efficient</Typography>
                {renderStage(stages.mostEfficient)}
              </Grid>
              <Grid item className={classes.stageType} xs>
                <Typography>Least sanity</Typography>
                {renderStage(stages.leastSanity!)}
              </Grid>
            </Grid>
          </Box>
        ) : (
          <div>{renderStage(stages.mostEfficient)}</div>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  itemInfoCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#000",
  },
  itemName: {
    marginBottom: "1rem",
    backgroundColor: theme.palette.background.default,
    color: "#fff",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1),
    display: "inline-block",
  },
}));

interface ItemInfoPopoverContentProps {
  name: string;
}

const ItemInfoPopoverContent = React.memo(function ItemInfoPopoverContent(
  props: ItemInfoPopoverContentProps
): React.ReactElement {
  const { name } = props;
  const classes = useStyles();

  return (
    <Card className={classes.itemInfoCard}>
      <CardContent>
        <Typography className={classes.itemName} variant="h5">
          {name}
        </Typography>
        {MATERIALS[name]!.ingredients && (
          <CraftingInfo ingredients={MATERIALS[name]!.ingredients!} />
        )}
        {MATERIALS[name]!.recommendedStages &&
          !MATERIALS[name]!.craftingRecommended && (
            <StageInfo stages={MATERIALS[name]!.recommendedStages!} />
          )}
      </CardContent>
    </Card>
  );
});
export default ItemInfoPopoverContent;
