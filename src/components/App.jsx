import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './NotificationOption/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = option => {
    setFeedbackState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countPoints = () => {
    return Object.values(feedbackState).reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countPoints();
    const percentage = Math.round((feedbackState.good / total) * 100) || 0;
    return percentage;
  };

  const total = countPoints();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackState)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={feedbackState.good}
            neutral={feedbackState.neutral}
            bad={feedbackState.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
