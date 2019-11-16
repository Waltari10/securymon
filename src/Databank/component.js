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
  {
    title: 'Sharing private information',
    bread: 'Coming soon!',
  },
  {
    title: 'Troubling content',
    bread: 'Coming soon!',
  },
  {
    title: 'Addiction',
    bread: 'Coming soon!',
  },
  {
    title: 'Viruses and malware',
    bread: 'Coming soon!',
  },
  {
    title: 'Security tools and settings',
    bread: 'Coming soon!',
  },
  {
    title: 'Ramsomware',
    bread: 'Coming soon!',
  },
  {
    title: 'Authentication',
    bread: 'Coming soon!',
  },
  {
    title: 'Fake information',
    bread: 'Coming soon!',
  },
  {
    title: 'Conversations',
    bread: 'Coming soon!',
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
    <div>
      {
        contentArr.map((obj, i) => (
          <div
            key={obj.title}
          >
            <Button
              onClick={() => setActiveContentAndScroll(i)}
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