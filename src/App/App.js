import React from "react";

import { withStyles } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";

import { GameController } from "../controller/GameController";

const useStyles = (theme) => ({
  App: {
    alignContent: "center",
    textAlign: "center",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  title: {
    color: "#00CCFF",
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    const getGames = async () => {
      console.log(await GameController.getGames()["data"]);
      return await GameController.getGames()["data"];
    };

    // const games = getGames();

    // const { data } = useSWR("/games", GameController.getGames());

    return (
      <div className={classes.App}>
        <h1 className={classes.title}>VideoGames</h1>
        {console.log(getGames())}
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
