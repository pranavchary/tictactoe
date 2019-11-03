import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from '../square/Square';
import Button from '../button/Button';
import {cpuMoves, winningIndicies} from '../../cpuMoves';

import './GameBoard.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: props.isPlayerFirst,
      playerMarker: props.isPlayerX ? 1 : -1,
      playerMoves: 0,
      computerMoves: 0,
      gameArray: Array(9).fill(0),
      isGameOver: false
    }
  }

  componentDidMount() {
    if (!this.state.playersTurn) {
      this.selectSquare(cpuMoves(this.state.gameArray, this.state.playerMarker * -1));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    var allowCPUMove = true;
    for (let i in winningIndicies) {
      let combo = winningIndicies[i];
      if (this.gameOverVerification(this.state, combo) && !prevState.isGameOver) {
        allowCPUMove = false;
        this.setState({isGameOver: !prevState.isGameOver});
        break;
      }
    }
    if (allowCPUMove && prevState.playersTurn !== this.state.playersTurn && !this.state.playersTurn) {
      // computer must make Moves
      this.selectSquare(cpuMoves(this.state.gameArray, this.state.playerMarker * -1));
    }
  }

  gameOverVerification = (state, combo) => {
    return (state.gameArray[combo[0]] === state.gameArray[combo[1]]
      && state.gameArray[combo[1]] === state.gameArray[combo[2]]
      && state.gameArray[combo[0]] !== 0
      && state.gameArray[combo[1]] !== 0
      && state.gameArray[combo[2]] !== 0) || !state.gameArray.includes(0);
  }

  selectSquare = (index) => {
    const selected = this.state.gameArray[index] !== 0;
    if (!selected && !this.state.isGameOver) {
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

  gameResult = () => {
    if (!this.state.gameArray.includes(0))
      return "It's a draw! (Cat's game)";
    else if (this.state.playerMoves > this.state.computerMoves)
      return "You win!";
    else
      return "Computer wins";
  }

  rematch = () => {
    this.setState({
      playersTurn: this.props.isPlayerFirst,
      playerMarker: this.props.isPlayerX ? 1 : -1,
      playerMoves: 0,
      computerMoves: 0,
      gameArray: Array(9).fill(0),
      isGameOver: false
    })
  }

  render() {
    return (
      <div className={`gameboard-container${this.state.isGameOver ? ' faded' : ''}`}>
        <div className={`gameboard-endgameNotify${this.state.isGameOver ? '' : ' hidden' }`}>
          <span className="gameover-header">GAME OVER</span>
          <span className="gameover-subtitle">
            {this.gameResult()}
          </span>
          <div className="gameover-buttons">
          <Button
            bgColor="orange"
            fontWeight="bold"
            className="gameover-rematch"
            onClick={() => this.rematch()}
            text="Rematch"
          />
          <Button
            bgColor="#d2d2d2"
            fontWeight="bold"
            className="gameover-rematch"
            onClick={() => this.props.backToMenu()}
            text="Menu"
          />
          </div>
        </div>
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
            <Square
              index={0}
              marker={this.state.gameArray[0]}
              onClick={() => this.selectSquare(0)}
              specialSquare='top-left'
            />
            <Square
              index={1}
              marker={this.state.gameArray[1]}
              onClick={() => this.selectSquare(1)}
              specialSquare='top'
            />
            <Square
              index={2}
              marker={this.state.gameArray[2]}
              onClick={() => this.selectSquare(2)}
              specialSquare='top-right'
            />
          </div>
          <div className="gameboard-row">
            <Square
              index={3}
              marker={this.state.gameArray[3]}
              onClick={() => this.selectSquare(3)}
              specialSquare='left'
            />
            <Square index={4} marker={this.state.gameArray[4]} onClick={() => this.selectSquare(4)} />
            <Square
              index={5}
              marker={this.state.gameArray[5]}
              onClick={() => this.selectSquare(5)}
              specialSquare='right'
            />
          </div>
          <div className="gameboard-row">
            <Square
              index={6}
              marker={this.state.gameArray[6]}
              onClick={() => this.selectSquare(6)}
              specialSquare='bottom-left'
            />
            <Square
              index={7}
              marker={this.state.gameArray[7]}
              onClick={() => this.selectSquare(7)}
              specialSquare='bottom'
            />
            <Square
              index={8}
              marker={this.state.gameArray[8]}
              onClick={() => this.selectSquare(8)}
              specialSquare='bottom-right'
            />
          </div>
        </div>
      </div>
    )
  }
}

GameBoard.defaultProps = {
  isPlayerFirst: true,
  isPlayerX: true
}

GameBoard.propTypes = {
  isPlayerFirst: PropTypes.bool.isRequired,
  isPlayerX: PropTypes.bool.isRequired
}

export default GameBoard;
