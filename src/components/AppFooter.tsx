import React from "react";
import { makeStyles, Container, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.paper,
    maxWidth: "100%",
    marginTop: theme.spacing(4),
    flexShrink: 0,
  },
  footerList: {
    textAlign: "center",
    paddingLeft: 0,
    "& li": {
      display: "inline-block",
      position: "relative",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    "& li::after, & li::before": {
      content: '"\u00b7"',
      position: "absolute",
    },
    "& li::before": {
      left: "-2px",
    },
    "& li::after": {
      right: "-2px",
    },
  },
}));

export default function AppFooter(): React.ReactElement {
  const classes = useStyles();

  return (
    <Container component="footer" className={classes.footer}>
      <ul className={classes.footerList}>
        <li>
          site made by <code>samidare ☂#5449</code>
        </li>
        <li>
          operator data:&nbsp;
          <Link
            href="https://gamepress.gg/arknights/tier-list/arknights-operator-tier-list"
            target="_blank"
            rel="noopener"
          >
            Gamepress Arknights Wiki
          </Link>
        </li>
        <li>
          images/localization:&nbsp;
          <Link
            href="https://github.com/Aceship/AN-EN-Tags"
            target="_blank"
            rel="noopener"
          >
            Aceship
          </Link>
        </li>
        <li>
          stage data:&nbsp;
          <Link href="https://penguin-stats.io/" target="_blank" rel="noopener">
            Penguin Statistics
          </Link>
        </li>
        <li>
          stage efficiency calcs:&nbsp;
          <code>
            <span role="img" aria-label="peach">
              🍑
            </span>
            Moe
            <span role="img" aria-label="peach">
              🍑
            </span>
            #2568
          </code>
          , <code>Luzark#8152</code>
        </li>
        <li>
          favicon:&nbsp;
          <Link
            href="https://discord.com/invite/arknights"
            target="_blank"
            rel="noopener"
          >
            Official Arknights Discord
          </Link>
        </li>
        <li>Arknights is &copy; Hypergryph/Yostar</li>
        <li>
          this project is unaffiliated with Arknights&apos;
          creators/distributors
        </li>
      </ul>
    </Container>
  );
}
