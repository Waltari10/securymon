import React, { useState } from 'react';
import get from 'lodash/get';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import cyberbullyingBread from './Cyberbullying';
import cyberPredatorBread from './CyberPredators';
import phishingBread from './Phishing';


import Page from './Page';

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '1rem',
  },
  container: {
    marginTop: theme.spacing(7),
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
  {
    title: 'Sharing private information',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Troubling content',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Addiction',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Viruses and malware',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Security tools and settings',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Ramsomware',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Authentication',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Fake information',
    bread: 'Coming soon!',
    disabled: true,
  },
  {
    title: 'Conversations',
    bread: 'Coming soon!',
    disabled: true,
  },
];


const Databank = () => {

  const [activeContent, setActiveContent] = useState(null);


  const setActiveContentAndScroll = (val) => {
    setActiveContent(val);

    const contentObj = contentArr[val];

    setTimeout(() => {
      const element = document.getElementById(contentObj.title);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 0);


  };

  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
      {
        contentArr.map((obj, i) => (
          <div
            key={obj.title}
          >
            <Button
              onClick={() => setActiveContentAndScroll(i)}
              className={classes.button}
              disabled={obj.disabled}
            >
              {obj.title}
            </Button>
          </div>
        ))
      }
      {
        (activeContent === 0 || !!activeContent) && (
          <Page
            id={get(contentArr, [activeContent, 'title'])}
            title={get(contentArr, [activeContent, 'title'])}
            bread={get(contentArr, [activeContent, 'bread'])}
          />
        )
      }
    </div>
  );
};

export default Databank;