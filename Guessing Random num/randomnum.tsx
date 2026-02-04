'use client';
import React, { useState } from 'react';
import './randomnum.css';

const Game: React.FC = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 5) + 1
  );

  const checkGuess = () => {
    if (Number(guess) === randomNumber) {
      setMessage('🎉 Correct! You won!');
    } else {
      setMessage('❌ Wrong! Try again');
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 5) + 1);
    setGuess('');
    setMessage('');
  };

  return (
    <div className="gameContainer">
      <h2>🎮 Number Guessing Game</h2>
      <p>Guess a number between 1 and 5</p>

      <input
        className="inputNumber"
        type="number"
        min={1}
        max={5}
        value={guess}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuess(e.target.value)}
        placeholder="Enter number"
      />
      <br />

      <button onClick={checkGuess}>Check</button>
      <button onClick={resetGame} className="buttonSpacing">
        Reset
      </button>

      <h3 className="message">{message}</h3>
    </div>
  );
};

export default Game;