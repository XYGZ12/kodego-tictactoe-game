// src/components/TicTacToe.tsx
import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import Message from '../Message/Message';
import { makeMove, checkGameResult, getGameBoard, resetGameBoard } from '../../api/api';

const checkWin = (player: 'X' | 'O', squares: Array<'X' | 'O' | null>): boolean => {
  // Implement your win conditions here. This is a simplified example.
  // Check rows, columns, and diagonals.
  // Return true if the player wins, otherwise false.

  for (let i = 0; i < 3; i++) {
    if (
      squares[i] === player &&
      squares[i + 1] === player &&
      squares[i + 2] === player
    ) {
      return true;
    }
  }

  return false;
};

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | 'draw' | null>(null);

  const handleSquareClick = async (i: number) => {
    if (squares[i] || winner) {
      return; // If the square is already filled or the game is over, do nothing.
    }

    // Make a move using the API
    const moveResponse = await makeMove(currentPlayer, i);

    if (moveResponse.success) {
      const newSquares = await getGameBoard();

      // Check for a win or a draw using the API
      const result = await checkGameResult();

      if (result.result !== 'in_progress') {
        setWinner(result.result);
      } else {
        const updatedSquares = [...newSquares];
        updatedSquares[i] = currentPlayer;
        setSquares(updatedSquares);

        if (checkWin(currentPlayer, updatedSquares)) {
          setWinner(currentPlayer);
        } else if (updatedSquares.every((square) => square !== null)) {
          setWinner('draw');
        } else {
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
      }
    }
  };

  useEffect(() => {
    // Inside useEffect, you can make API requests and handle side effects.
    const fetchData = async () => {
      const newSquares = await getGameBoard();
      setSquares(newSquares);

      const result = await checkGameResult();

      if (result.result !== 'in_progress') {
        setWinner(result.result);
      }
    };

    fetchData();
  }, [currentPlayer]);

  const message = winner ? `Player ${winner} wins!` : `Current player: ${currentPlayer}`;

  const handleResetGame = async () => {
    try {
      const response = await resetGameBoard();
      if (response.success) {
        // Handle the success, e.g., update the game board state or UI.
        // You may need to reset the state of your game board or any other necessary data.
        setSquares(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
      } else {
        // Handle the error, e.g., show an error message.
      }
    } catch (error) {
      // Handle any network or other errors here.
    }
  };

  return (
    <div className="game">
      <Message message={message} />
      <Board squares={squares} onClick={handleSquareClick} />
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
