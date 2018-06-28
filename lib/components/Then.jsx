import React from 'react';

const Then = ({ children }) => {
  if (children) {
    if (children.type) {
      return children;
    }
    return (<div>{children}</div>);
  }
  return null;
};

export default Then;
