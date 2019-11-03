import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: ''
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.marker !== this.props.marker)
      this.setMarker(this.props.marker);
  }

  setMarker = (val) => {
    switch(val) {
      case 1:
        this.setState({marker: 'X'});
        break;
      case -1:
        this.setState({marker: 'O'});
        break;
      default:
      this.setState({marker: ''});
        break;
    }
  }

  squareStyle =() => {
    switch(this.props.specialSquare) {
      case 'top-left':
        return { borderTop: 'none', borderLeft: 'none' }
      case 'top':
        return { borderTop: 'none' }
      case 'top-right':
        return { borderTop: 'none', borderRight: 'none' }
      case 'left':
        return { borderLeft: 'none' }
      case 'right':
        return { borderRight: 'none' }
      case 'bottom-left':
        return { borderBottom: 'none', borderLeft: 'none' }
      case 'bottom':
        return { borderBottom: 'none' }
      case 'bottom-right':
        return { borderBottom: 'none', borderRight: 'none' }
      default:
        return {}
    }
  }

  render() {
    return (
      <div
        id={`square${this.props.index}`}
        className="square"
        onClick={this.props.onClick}
        style={this.squareStyle()}
      >
        <div className="square-marker">
          {this.state.marker}
        </div>
      </div>
    )
  }
}

Square.defaultProps = {
  marker: 0,
  specialSquare: ''
}

Square.propTypes = {
  marker: PropTypes.number,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  specialSquare: PropTypes.string
}

export default Square;
