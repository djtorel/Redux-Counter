import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
    const { count, increment } = this.props;
    count % 2 > 0 && increment();
  };

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
    setTimeout(() => this.props.increment(), 1000);
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    const { increment, decrement } = this.props;
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = ({ count }) => {
  return {
    count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
