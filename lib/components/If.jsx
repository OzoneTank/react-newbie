import React from 'react';

class If extends React.Component {
  render() {
    const { children, when } = this.props;
    let element;

    React.Children.map(children, child => {
      if (child.type &&
        ((child.type.name === 'Then' && !!when) ||
          (child.type.name === 'Else' && !when))
      ) {
        element = child;
      }
    });

    if (element) {
      return element;
    }

    if (!!when) {
      return children;
    }

    return null;
  }
}

export default If;
