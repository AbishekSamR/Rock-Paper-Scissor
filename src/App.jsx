import React, { useState } from "react";
import "./App.css";
import rock from "./assets/rock-emoji.png";
import paper from "./assets/paper-emoji.png";
import scissor from "./assets/scissors-emoji.png";

const App = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

  const moves = [
    { name: "rock", image: rock },
    { name: "paper", image: paper },
    { name: "scissor", image: scissor },
  ];

  const computerMove = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    setComputerChoice(randomIndex);
    return randomIndex;
  };

  const playerMove = (e) => {
    let playerIndex;
    const className = e.currentTarget.className;
    if (className.includes("rock")) playerIndex = 0;
    else if (className.includes("paper")) playerIndex = 1;
    else playerIndex = 2;
    setPlayerChoice(playerIndex);
    const computerIndex = computerMove();
    checkResult(playerIndex, computerIndex);
  };

  const checkResult = (player, computer) => {
    if (player === computer) setTieCount((pre) => pre + 1);
    else if (
      (player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)
    )
      setWinCount((pre) => pre + 1);
    else setLossCount((pre) => pre + 1);
  };

  const resetScore = () => {
    setWinCount(0);
    setLossCount(0);
    setTieCount(0);
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  return (
    <div className="app">
      <h1 className="header">Rock Paper Scissor</h1>
      <div className="buttons">
        <button onClick={playerMove} className="move-button rock">
          <img className="move-image" src={rock} />
        </button>
        <button onClick={playerMove} className="move-button paper">
          <img className="move-image" src={paper} />
        </button>
        <button onClick={playerMove} className="move-button scissor">
          <img className="move-image" src={scissor} />
        </button>
      </div>
      <div className="selection-box">
        <p>
          Your move :{" "}
          {playerChoice !== null && (
            <img src={moves[playerChoice].image} className="selected-image" />
          )}
        </p>
        <p>
          Computer move :{" "}
          {computerChoice !== null && (
            <img src={moves[computerChoice].image} className="selected-image" />
          )}
        </p>
      </div>
      <div className="result">
        <p className="win-result">Win : {winCount}</p>
        <p className="loss-resul">Loss : {lossCount}</p>
        <p className="tie">Tie : {tieCount}</p>
      </div>
      <div className="reset-button-container">
        <button onClick={resetScore} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
