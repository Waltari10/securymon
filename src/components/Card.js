import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { makeStyles } from '@material-ui/core/styles';

import cardFrontImg from '../assets/Card1.png';
import cardBackImg from '../assets/Answer1.png';


const cardWidth = '100%';

const useStyles = makeStyles(() => ({
  cardFront: {
    width: cardWidth,
    borderRadius: '5px',
    zIndex: 1,
  },
  cardBack: {
    width: cardWidth,
    borderRadius: '5px',
    zIndex: 1,
  },
  cardInner: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    boxShadow: '0px 71px 36px -50px rgba(0,0,0,0.19)',
    zIndex: 1,
  },
  container: {
    borderRadius: '5px',
    zIndex: 1,
  },
}));

const Card = ({ className }) => {

  const [isFlipped, setFlipped] = useState(false);
  const classes = useStyles();

  return (
    <div className={`${className } ${ classes.container}`}>

      <ReactCardFlip
        containerStyle={{
          borderRadius: '5px',
          width: cardWidth,
        }}
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <div
          className={classes.cardFront}
          onClick={() => setFlipped(!isFlipped)}
        >
          <img
            className={classes.cardInner}
            src={cardFrontImg}

          >
          </img>
        </div>
        <div
          className={classes.cardBack}
          onClick={() => setFlipped(!isFlipped)}
        >
          <img
            className={classes.cardInner}
            src={cardBackImg}

          >
          </img>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;