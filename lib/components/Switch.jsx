import React from 'react';

const Switch = ({ children, expression }) => {
  let elements = [];
  let addElements = false;

  React.Children.map(children, child => {
    if (child.type) {
      switch (child.type.name) {
        case 'Case':
          if (child.props.value === expression) {
            addElements = true;
            elements = [];
          }
          break;
        case 'Default':
          if (elements.length === 0) {
            addElements = true;
          }
          break;
        case 'Break':
          addElements = false;
          break;
        default:
          if (addElements) {
            elements.push(child);
          }
          break;
      }
    }
  });
  if (elements) {
    return (<div>{elements}</div>);
  }

  return null;

}
export default Switch;
