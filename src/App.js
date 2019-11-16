import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  HashRouter as Router,
} from 'react-router-dom';

import theme from './theme';
import Footer from './Footer';


const useStyles = makeStyles((theme) => {
  return ({
    app: {
      textAlign: 'center',
      maxWidth: theme.breakpoints.values.md,
      margin: '0 auto',
    },
  });
});

function App() {

  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Footer></Footer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
