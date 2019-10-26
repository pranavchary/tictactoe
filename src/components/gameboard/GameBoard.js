import React, { Component } from 'react';
import Square from '../square/Square';
import {cpuMoves as CPU} from '../../cpuMoves'

import './GameBoard.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: props.isPlayerFirst,
      playerMarker: props.isPlayerX ? 1 : -1,
      playerMoves: 0,
      computerMoves: 0,
      gameArray: Array(9).fill(0)
    }

    this.squareArray = [];
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.playersTurn !== this.state.playersTurn && this.state.playersTurn === false) {
      // computer must make Moves
      this.selectSquare(CPU(this.state.gameArray, this.state.playerMarker * -1));
    }
  }

  selectSquare = (index) => {
    const selected = this.state.gameArray[index] !== 0;
    if (!selected) {
      if (this.state.playersTurn === true) {
        let newGameArray = this.state.gameArray.slice(0, index).concat(this.state.playerMarker, this.state.gameArray.slice(index + 1, this.state.gameArray.length));
        this.setState(prevState => ({
          gameArray: newGameArray,
          playersTurn: !prevState.playersTurn,
          playerMoves: prevState.playerMoves + 1
        }));
      } else {
        let newGameArray = this.state.gameArray.slice(0, index).concat(this.state.playerMarker * -1, this.state.gameArray.slice(index + 1, this.state.gameArray.length));
        this.setState(prevState => ({
          gameArray: newGameArray,
          playersTurn: !prevState.playersTurn,
          computerMoves: prevState.computerMoves + 1
        }));
      }
    }
  }

  render() {
    return (
      <div className="gameboard-container">
        <div className="gameboard-header">
          <div className="user-status">
            <div className="player-name">You</div>
            <div className="player-moves">Moves: {this.state.playerMoves}</div>
          </div>
          <div className="cpu-status">
            <div className="player-name">Computer</div>
            <div className="player-moves">Moves: {this.state.computerMoves}</div>
          </div>
        </div>
        <div className="gameboard-game">
          <div className="gameboard-row">
            <Square index={0} marker={this.state.gameArray[0]} onClick={() => this.selectSquare(0)} />
            <Square index={1} marker={this.state.gameArray[1]} onClick={() => this.selectSquare(1)} />
            <Square index={2} marker={this.state.gameArray[2]} onClick={() => this.selectSquare(2)} />
          </div>
          <div className="gameboard-row">
            <Square index={3} marker={this.state.gameArray[3]} onClick={() => this.selectSquare(3)} />
            <Square index={4} marker={this.state.gameArray[4]} onClick={() => this.selectSquare(4)} />
            <Square index={5} marker={this.state.gameArray[5]} onClick={() => this.selectSquare(5)} />
          </div>
          <div className="gameboard-row">
            <Square index={6} marker={this.state.gameArray[6]} onClick={() => this.selectSquare(6)} />
            <Square index={7} marker={this.state.gameArray[7]} onClick={() => this.selectSquare(7)} />
            <Square index={8} marker={this.state.gameArray[8]} onClick={() => this.selectSquare(8)} />
          </div>
        </div>
      </div>
    )
  }
}

export default GameBoard;
