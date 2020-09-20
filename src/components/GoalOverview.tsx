import React from "react";
import { Goal } from "../operator-goals";

interface GoalOverviewProps {
  goals: ({ operatorName: string } & Goal)[];
}

export default function GoalOverview(
  props: GoalOverviewProps
): React.ReactElement {
  const { goals } = props;
  return <ul>{goals.map((goal) => JSON.stringify(goal))}</ul>;
}
