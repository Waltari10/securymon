import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Link } from 'react-router-dom';

import Home from '../Home';
import Play from '../Play';
import Databank from '../Databank';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    flexGrow: 1,
  },
  tab: {
    textDecoration: 'none',
    fontSize: '1rem',
    opacity: 1,
    color: 'rgba(0,0,0,0.7)',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  activeTab: {
    fontSize: '1rem',
    opacity: 1,
    color: 'rgba(0,0,0,1)',
    textDecoration: 'underline',
  },
  contentContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
}));

const getActiveIndex = () => {


  if (window.location.hash.indexOf('play') !== -1) {
    return 1;
  } else if (window.location.hash.indexOf('databank') !== -1) {
    return 2;
  }

  return 0;

};

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(getActiveIndex());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
        position="static"
      >
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          style={{
            backgroundColor: 'transparent',
          }}
          value={value}

          onChange={handleChange}

        >
          <Link
            className={classes.tab}
            onClick={() => handleChange(null, 0)}
            to="/"
          >
            <Tab
              className={getActiveIndex() === 0 ? classes.activeTab : classes.tab}
              label="Home"
            >
            </Tab>
          </Link>
          <Link
            className={classes.tab}
            onClick={() => handleChange(null, 1)}
            to="/play"
          >
            <Tab
              className={getActiveIndex() === 1 ? classes.activeTab : classes.tab}
              label="Play"
            >
            </Tab>
          </Link>
          <Link
            className={getActiveIndex() === 2 ? classes.activeTab : classes.tab}
            onClick={() => handleChange(null, 2)}
            to="/databank"
          >
            <Tab
              className={classes.tab}
              label="Databank"
            >
            </Tab>
          </Link>
        </Tabs>
      </AppBar>

      <div className={classes.contentContainer}>
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        <Route
          path="/play"
        >
          <Play/>
        </Route>
        <Route
          path="/databank"
        >
          <Databank />
        </Route>
      </div>
    </div>
  );
}