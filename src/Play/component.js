import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Board from '../assets/board.png';

const useStyles = makeStyles((theme) => ({

  text: {
    marginTop: theme.spacing(2),
  },
  header: {
    marginTop: theme.spacing(7),
  },
  container: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  image: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
}));

const Play = () => {

  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
      <Typography className={classes.header} variant="h4">What is it?</Typography>
      <Typography className={classes.text}>Securymon is an educational and fun board game for families and children. It’s designed to teach the basics of internet security awareness. In the game each player is parenting their own Securymon creature as it is starting school and using it’s first own smart device. When the Securymon starts it’s journey its just a newbie and the goal is to improve its skills so that it can safely travel through the strange lands of the internet. Who will reach the edge of the internet first?</Typography>


      <img
        className={classes.image}
        src={Board}
      />

      <Typography className={classes.header} variant="h4">Get the game</Typography>

      <Typography className={classes.text}>
        You can download and print free version of the game <a href="https://drive.google.com/open?id=1pXMiUmd4nnxwQ-SI6Pv4zFsE-JcOGCX-" target="_blank">here</a>. You just need to have your own game pieces and dice before you can start playing.

        You can also purchase a physical better quality version of the game that includes also the game pieces and dices from well stocked board game and mobile phone stores.
      </Typography>

      <Typography className={classes.header} variant="h4">Free add-ons</Typography>
      <Typography className={classes.text}>In the future we will release additional card packs on this page that can be printed out and added to the game to improve it and keep it updated.
      </Typography>
    </div>
  );
};

export default Play;