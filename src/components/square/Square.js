import React, { Component } from 'react';

import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: ''
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.marker !== this.props.marker) {
      this.marker(this.props.marker);
    }
  }

  marker = (val) => {
    switch(val) {
      case 1:
        this.setState({marker: 'X'});
        break;
      case -1:
        this.setState({marker: 'O'});
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div
        id={this.props.index}
        className="square"
        onClick={this.props.onClick}
      >
        <div className="square-marker">
          {this.state.marker}
        </div>
      </div>
    )
  }
}

export default Square;
