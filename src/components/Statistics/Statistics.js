import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({ good, neutral, bad, total, persentage }) {   
  console.log({ good, neutral, bad, total, persentage });
  return (   
    <>      
    <p className={s.data}>Good:{good}</p>         
    <p className={s.data}>Neutral:{neutral}</p>
    <p className={s.data}>Bad: {bad}</p>
    <p className={s.total}>Total: {total}</p>
    <p className={s.persentage}>Positive feedback: {persentage}%</p>        
  </>
  );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    persentage: PropTypes.number.isRequired,
}

