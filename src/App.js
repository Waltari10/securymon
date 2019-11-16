import React from 'react';
import Navigation from './Navigation';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  HashRouter as Router,
} from 'react-router-dom';

import theme from './theme';
import Footer from './Footer';

function App() {

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
