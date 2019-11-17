import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '../components/Card';

const useStyles = makeStyles((theme) => {

  return ({
    card: {
      marginBottom: theme.spacing(8),
      maxWidth: '500px',
      width: '50%',
      marginTop: '60px',
      margin: '0 auto',
    },
    header: {
      fontSize: '6rem',
      marginTop: '23%',
    },
    subheader: {
      marginTop: '60px',
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
        variant="h2"
      >
        Cyber security has never been so fun
      </Typography>
      <Typography
        className={classes.subheader}
        align="center"
        variant="h5"
        dangerouslySetInnerHTML={{
          __html: 'Securymon is designed to teach the basics of internet security awareness. <br> Start playing and learning today!',
        }}
      >
      </Typography>
      <Card
        className={classes.card}
      />
    </div>
  );
};

export default Home;