import React, { Component } from "react";

class Counter extends Component {



  state = {
    value: this.props.value,
  };

  handleIncrement = (props) => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    let value = this.state.value || 'ZEZO'
    let colorvalue = value === 'ZEZO' ? 'red' : 'green'
    return (

      <div>

        <h1>Hello: {this.props.children}</h1>
        <span>value:</span> <span className="value zezo"> {value}</span>
        <button className="increment" onClick={() => this.handleIncrement(this.props)}>Increment</button>
        <button className="del" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default Counter;

