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
  getGamesList = async () => {
    let listgames;
    await GameController.getGames().then((response) => {
      listgames = response.data;
    });
    return await listgames;

    // let listgames;
    // await GameController.getGames().then(function (response) {
    //   listgames = response.data;
    // });
    // return listgames;

    // const listgames = (await GameController.getGames())["data"];
    // let gamesfck;
    // const fck = listgames.then((result) => console.log(result.data));
    // return fck;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <h1 className={classes.title}>VideoGames</h1>
        {/* {console.log(this.getGames())} */}
        {this.getGamesList().map()}
        {/* <h1 className={classes.title}>{Array.from(this.getGames())}</h1> */}
        {/* <h1 className={classes.title}>{console.log(this.getGamesList())}</h1> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
