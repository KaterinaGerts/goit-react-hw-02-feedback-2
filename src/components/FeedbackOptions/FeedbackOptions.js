import React from 'react';
// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div>
    {options.map((option) => {
      return <button key={option} type="button" className={s.button} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button> 
    })}    
  </div>   
);

export default FeedbackOptions;
