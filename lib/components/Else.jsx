import React from 'react';

class Else extends React.Component {
  render() {
    const { children } = this.props;
    if (children) {
      if (children.type) {
        return children;
      }
      return (<div>{children}</div>);
    }
    return null;
  }
};

export default Else;
