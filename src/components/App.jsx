import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onAddFeedback = (e) => {
    const {id} = e.target;
    this.setState(prev => ({
        [id]: prev[id] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = Math.round((good * 100) / this.countTotalFeedback());
    if (!result) return 0;
    return result;
  };

  render() {
    
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const isFeedbackGiven = totalFeedback > 0;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Feedback onAddFeedback={this.onAddFeedback} state={this.state}/>
        </Section>

        <Section title={'Statistics'}>
          {isFeedbackGiven ? (
            <Statistics
              stat={this.state}
              total={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}