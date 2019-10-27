import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    height: props.height,
    width: props.width,
    borderRadius: props.radius,
    boxShadow: props.boxShadow,
    cursor: props.cursor,
    fontWeight: props.fontWeight
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
  height: 'inherit',
  width: 'inherit',
  radius: '0.5rem',
  boxShadow:  '1px 2px 3px black',
  cursor: 'pointer',
  fontWeight: 'normal',
  className: '',
  text: 'Button'
}

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.string,
  boxShadow: PropTypes.string,
  cursor: PropTypes.string,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button;
