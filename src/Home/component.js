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
      marginTop: theme.spacing(12),
      margin: '0 auto',
    },
    header: {
      marginTop: '25%',
    },
    subheader: {
      marginTop: theme.spacing(3),
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
        dangerouslySetInnerHTML={{ __html: 'Securymon is designed to teach the basics of internet security awareness. <br> Start playing and learning today!'}}
      >
      </Typography>
      <Card
        className={classes.card}
      />
    </div>
  );
};

export default Home;