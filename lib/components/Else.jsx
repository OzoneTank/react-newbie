import React from 'react';

const Else = ({ children }) => {
  if (children) {
    if (children.type) {
      return children;
    }
    return (<div>{children}</div>);
  }
  return null;
};

export default Else;
