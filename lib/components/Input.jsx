import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newState = {};
    const target = e.target;
    newState[this.props.valueName] = target.type === 'checkbox' ? target.checked : target.value;
    this.props.parent.setState(newState);
  }

  render() {
    const value = this.props.parent.state[this.props.valueName];
    return (
      <input
        {...this.props}
        checked={value}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default Input;
