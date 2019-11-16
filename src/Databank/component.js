import React, { useState } from 'react';
import get from 'lodash/get';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import cyberbullyingBread from './Cyberbullying';
import cyberPredatorBread from './CyberPredators';
import phishingBread from './Phishing';


import Page from './Page';

const useStyles = makeStyles(() => ({
  button: {
    fontSize: '1rem',
  },
}));


const contentArr = [
  {
    title: 'Cyber bullying',
    bread: cyberbullyingBread,
  },
  {
    title: 'Phishing',
    bread: phishingBread,
  },
  {
    title: 'Cyber predators',
    bread: cyberPredatorBread,
  },
];


const Databank = () => {

  const [activeContent, setActiveContent] = useState(null);

  const classes = useStyles();

  return (
    <div>
      {
        contentArr.map((obj, i) => (
          <div
            key={obj.title}
          >
            <Button
              onClick={() => setActiveContent(i)}
              className={classes.button}
            >
              {obj.title}
            </Button>
          </div>
        ))
      }
      {
        (activeContent === 0 || !!activeContent) && (
          <Page
            title={get(contentArr, [activeContent, 'title'])}
            bread={get(contentArr, [activeContent, 'bread'])}
          />
        )
      }
    </div>
  );
};

export default Databank;