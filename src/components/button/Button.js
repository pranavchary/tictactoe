import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    height: props.height ? `${props.height}px` : 'inherit',
    width: props.width ? `${props.width}px` : 'inherit',
    borderRadius: `${props.radius}px`,
    boxShadow: props.boxShadow,
    cursor: props.cursor
  }
  return (
    <div
      className={'button ' + props.className}
      onClick={props.onClick}
      style={buttonStyle}
    >
      {props.text}
    </div>
  );
}

Button.defaultProps = {
  color: '#000000',
  bgColor: '#2ecc71',
  radius: 10,
  boxShadow:  '1px 2px 3px black',
  cursor: 'pointer',
  className: '',
  text: 'Button'
}

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  boxShadow: PropTypes.string,
  cursor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button;
