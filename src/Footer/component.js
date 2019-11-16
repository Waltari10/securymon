import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(14),
    height: '150px',
  },
  copyright: {
    opacity: 0.26,
    lineHeight: '150px',
  },

}));

const Footer = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        variant="caption"
        className={classes.copyright}
        align="center"
      >
        <div>
          Copyright © Team Arnold Junction 2019
        </div>

      </Typography>
    </div>
  );
};

export default Footer;