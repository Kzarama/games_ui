import React from 'react';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  App: {
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  title: {
    color: '#00CCFF'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <h1 className={classes.title}>VideoGames</h1>
    </div>
  );
}

export default App;
