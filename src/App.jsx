import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

export default App = () => {
  const SECTION_TITLE = 'Please leave us feedback:';
  const NOTIF_MSG = 'There is no feedback';
  const FEEDBACK_OPTIONS = { good: 'Good', neutral: 'Neutral', bad: 'Bad' };

  const [goodStat, setGoodStat] = useState(0);
  const [neutralStat, setNeutralStat] = useState(0);
  const [badStat, setBadStat] = useState(0);

  const countTotalFeedback = ({ goodStat, neutralStat, badStat }) => {
    return goodStat + neutralStat + badStat;
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return (good / total) * 100;
  };

  const addGood = () => {
    setGoodStat(goodStat + 1);
  };

  const addNeutral = () => {
    setNeutralStat(neutralStat + 1);
  };

  const addBad = () => {
    setBadStat(badStat + 1);
  };

  const total = countTotalFeedback({goodStat, neutralStat, badStat});
  const positivePercentage = Math.round(countPositiveFeedbackPercentage(goodStat, total));

  return (
    <Section title={SECTION_TITLE}>
        <FeedbackOptions option={FEEDBACK_OPTIONS.good} onLeaveFeedback={addGood} />
        <FeedbackOptions
          option={FEEDBACK_OPTIONS.neutral}
          onLeaveFeedback={addNeutral}
        />
        <FeedbackOptions option={FEEDBACK_OPTIONS.bad} onLeaveFeedback={addBad} />
      {total > 0
        ? (<Statistics
        good={goodStat}
        neutral={neutralStat}
        bad={badStat}
        total={total}
        positivePercentage={positivePercentage}
        />)
        : (<Notification message={NOTIF_MSG}/>)}
    </Section>
  );
}
