import React from "react";
import PropTypes from 'prop-types';
import Button from "../button/Button";

import Logo from '../../logo.png';
import "./Setup.css";

const Setup = (props) => {
    return (
      <div className="setup-container">
        <div className="setup-title">
          <img className="setup-logo" src={Logo} alt="logo" />
          <span className="title-text">Tic-Tac-Toe</span>
          <img className="setup-logo" src={Logo} alt="logo" />
          <h5>by Pranav Chary</h5>
        </div>
        <div className="setup-chooseFirst">
          <h5>Choose which player goes first:</h5>
          <Button
            className={`chooseFirst${props.isPlayerFirst ? " selected" : ""}`}
            onClick={() => props.setFirstPlayer(true)}
            bgColor="#2980b9"
            color="#ffffff"
            text="User"
          />
          <Button
            className={`chooseFirst${!props.isPlayerFirst ? " selected" : ""}`}
            onClick={() => props.setFirstPlayer(false)}
            bgColor="#2980b9"
            color="#ffffff"

            text="CPU"
          />
        </div>
        <div className="setup-chooseMarker">
          <h5>Choose which marker you would like to use:</h5>
          <Button
            className={`chooseMarker${props.isPlayerX ? " selected" : ""}`}
            onClick={() => props.setPlayerMarker(true)}
            bgColor="#FF622C"
            text="X"
          />
          <Button
            className={`chooseMarker${!props.isPlayerX ? " selected" : ""}`}
            onClick={() => props.setPlayerMarker(false)}
            bgColor="#FF622C"
            text="O"
          />
        </div>
        <div className="setup-gameStart">
          <Button
            fontWeight="bolder"
            className='gameStart'
            onClick={() => props.startGame()}
            text="Start Game"
          />
        </div>
      </div>
    )
}

Setup.defaultProps = {
  isPlayerFirst: true,
  isPlayerX: true
}

Setup.propTypes = {
  isPlayerFirst: PropTypes.bool.isRequired,
  isPlayerX: PropTypes.bool.isRequired
}
export default Setup;
