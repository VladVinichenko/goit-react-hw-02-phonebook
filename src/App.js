import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  incrementFeedback = evt => {
    this.setState((prevState) => {
      const typeFeedback = evt.target.name
      const newState = {}
      newState[typeFeedback] = prevState[typeFeedback] + 1
      return {
        ...newState
      }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value)
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round([this.state.good / this.countTotalFeedback() * 100])
  }

  render() {
    return (
      <Fragment>
        <Section title='Statistics'>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.incrementFeedback} />
        </Section>
        <Section title='Please leave feedback'>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      </Fragment>
    )
  }
}
export default App