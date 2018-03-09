import React from 'react';

const If = ({ when, children }) => {
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
    return (element);
  }

  if (!!when) {
    return children;
  }
}

export default If;
