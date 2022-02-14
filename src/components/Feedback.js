import { Component } from 'react';

import StatisticList from './StatisticList';
import Section from './Section';
//import FeedbackOptions from './FeedbackOptions';

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(e) {
        const name = e.target.name;
        if (name === "good"){ this.setState({ good: this.state.good + 1 }); }
        else if (name === "neutral") { this.setState({ neutral: this.state.neutral + 1 }); }
        else if (name === "bad") { this.setState({ bad: this.state.bad + 1 }); }
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);


    };

    countPositiveFeedbackPercentage = () => { 
        const { good, neutral, bad } = this.state;
        return (Math.round(good/(good + neutral + bad)*100));
    };


    render () {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const statistic = [this.state.good, this.state.neutral, this.state.bad, total, positivePercentage];
        
        return (
            <div>
                <Section title="Please leave feedback">
                    <button name="good" type="button" onClick={this.handleIncrement}> Good </button>
                    <button name="neutral" type="button" onClick={this.handleIncrement}> Neutral </button>
                    <button name="bad" type="button" onClick={this.handleIncrement}> Bad </button>
                </Section>

                <Section title="Statistics">
                    {(total > 0)  ? (<StatisticList statistic={statistic}/> ) : (<h2>There is no feedback</h2>)}
                </Section>
            </div>
        );
    }
} 
