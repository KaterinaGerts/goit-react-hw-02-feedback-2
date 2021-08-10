import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {  
    this.setState(state => {
      return { [option]: state[option] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;   
    const total = this.countTotalFeedback();
    const percentage = Math.round((good / total) * 100);

    if (isNaN(percentage)) return 0;
    else {
      return Math.round((good / total) * 100);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = this.countTotalFeedback();
    const persentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>        
          <Section title="Statistics">
          {totalSum === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}              
              neutral={neutral}
              bad={bad}
              total={totalSum}
              persentage={persentage}
            />            
          )}
        </Section>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,  
}



export default Feedback;
