import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  header: {
    marginTop: theme.spacing(4),
  },
  bread: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));


const Page = ({ title, bread, id }) => {

  const classes = useStyles();

  return (
    <div
      id={id}
      className={classes.container}
    >
      <Typography className={classes.header} variant="h4">
        {title}
      </Typography>
      <Typography
        className={classes.bread}
        variant="body1"
        dangerouslySetInnerHTML={{ __html: bread }}
      >
        {/* {bread} */}
      </Typography>
    </div>
  );
};

export default Page;