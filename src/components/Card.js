import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { makeStyles } from '@material-ui/core/styles';

import cardFrontImg from '../assets/card.png';
import rightCardImg from '../assets/right_card.png';
import wrongCardImg from '../assets/wrong_card.png';
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
  const [isRight, setIsRight] = useState(false);
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
        >
          <div
            onClick={() => {
              setTimeout(() => {
                setFlipped(!isFlipped);
              }, 10);
              setIsRight(false);
            }}
            style={{
              left: 0,
              right: 0,
              top: '62%',
              bottom: '20.5%',
              position: 'absolute',
            }}
          ></div>
          <div
            onClick={() => {
              setTimeout(() => {
                setFlipped(!isFlipped);
              }, 50);
              setIsRight(true);
            }}
            style={{
              left: 0,
              right: 0,
              top: '81%',
              bottom: '1.5%',
              position: 'absolute',
            }}
          />
          <img
            className={classes.cardInner}
            src={cardFrontImg}
          />
        </div>
        <div
          className={classes.cardBack}
          onClick={() => setFlipped(!isFlipped)}
        >
          <img
            className={classes.cardInner}
            src={isRight ? rightCardImg : wrongCardImg}
          >
          </img>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;