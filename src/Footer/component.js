import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(14),
    backgroundColor: '#FC8770',
    height: '200px',
  },
  copyright: {
    lineHeight: '200px',
  },

}));

const Footer = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.copyright}
        align="center"
      >
        Copyright © Team Arnold
      </Typography>
    </div>
  );
};

export default Footer;