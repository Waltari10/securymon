import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '../components/Card';

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return ({
    card: {
      marginBottom: theme.spacing(8),
      maxWidth: '500px',
      width: '50%',
      marginTop: theme.spacing(4),
      margin: '0 auto',
    },
    header: {
      marginTop: theme.spacing(8),
    },
    subheader: {
      marginTop: theme.spacing(2),
    },
  });
});


const Home = () => {

  const classes = useStyles();


  return (
    <div>
      <Typography
        className={classes.header}
        align="center"
        variant="h4"
      >
        Securymon is an educational and fun board game for families and children
      </Typography>

      <Typography
        className={classes.subheader}
        align="center"
        variant="h6"
      >
        It’s designed to teach the basics of internet security awareness. Start playing and learning today!
      </Typography>
      <Card
        className={classes.card}
      />
    </div>
  );
};

export default Home;