import React, { Component } from 'react';
import Setup from '../setup/Setup';
import GameBoard from '../gameboard/GameBoard';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      isPlayerFirst: true,
      isPlayerX: true,
    }
  }

  setFirstPlayer = (isPlayerFirst) => {
    if (this.state.isPlayerFirst !== isPlayerFirst) {
        this.setState({isPlayerFirst});
    }
  }

  setPlayerMarker = (isPlayerX) => {
    if (this.state.isPlayerX !== isPlayerX) {
        this.setState({isPlayerX});
    }
  }

  startGame = () => {
    this.setState({ gameStarted: true });
  }

  backToMenu = () => {
    this.setState({
      gameStarted: false,
      isPlayerFirst: true,
      isPlayerX: true,
    });
  }

  render() {
    if (this.state.gameStarted) {
      return (
          <GameBoard
            isPlayerFirst={this.state.isPlayerFirst}
            isPlayerX={this.state.isPlayerX}
            backToMenu={this.backToMenu}
          />
      )
    } else {
      return (
        <Setup
          isPlayerFirst={this.state.isPlayerFirst}
          isPlayerX={this.state.isPlayerX}
          setFirstPlayer={this.setFirstPlayer}
          setPlayerMarker={this.setPlayerMarker}
          startGame={this.startGame}
        />
      )
    }
  }
}

export default Main;
