import React, { Component } from 'react';

export class MakePlan extends Component {
  static displayName = MakePlan.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Make a plan</h1>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
