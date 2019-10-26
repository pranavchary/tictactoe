import React from "react";
import Button from "../button/Button";

import "./Setup.css";

const Setup = (props) => {
    return (
      <div className="setup-container">
        <div className="setup-title"><h3>Tic-Tac-Toe</h3></div>
        <div className="setup-chooseFirst">
          <h5>Choose which player goes first</h5>
          <Button
            className={`chooseFirst${props.isPlayerFirst ? " selected" : ""}`}
            onClick={() => props.setFirstPlayer(true)}
            text="User"
          />
          <Button
            className={`chooseFirst${!props.isPlayerFirst ? " selected" : ""}`}
            onClick={() => props.setFirstPlayer(false)}
            text="CPU"
          />
        </div>
        <div className="setup-chooseMarker">
          <h5>Choose which marker you would like to use</h5>
          <Button
            className={`chooseMarker${props.isPlayerX ? " selected" : ""}`}
            onClick={() => props.setPlayerMarker(true)}
            text="X"
          />
          <Button
            className={`chooseMarker${!props.isPlayerX ? " selected" : ""}`}
            onClick={() => props.setPlayerMarker(false)}
            text="O"
          />
        </div>
        <div className="setup-gameStart">
          <Button
            className='gameStart'
            onClick={() => props.startGame()}
            text="Start Game"
            bgColor="orange"
          />
        </div>
      </div>
    )
}

export default Setup;
