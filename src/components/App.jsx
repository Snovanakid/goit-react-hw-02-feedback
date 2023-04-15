import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

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
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Feedback onAddFeedback={this.onAddFeedback} />
        </Section>
        
      <Section title={'Statistics'}>
          <Statistics
            stat={this.state}
            total={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
