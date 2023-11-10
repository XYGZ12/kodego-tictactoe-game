// src/game/ticTacToe.ts
import { MoveRequest, MoveResponse, GameResult } from './interfaces';

// Define the game board and other necessary variables.
let board: Array<'X' | 'O' | null> = Array(9).fill(null);
let currentPlayer: 'X' | 'O' = 'X';
let winner: 'X' | 'O' | 'draw' | null = null;

// Helper function to check for a win.
function checkWin(player: 'X' | 'O', squares: Array<'X' | 'O' | null>): boolean {
  // Implement your win conditions here. This is a simplified example.
  // Check rows, columns, and diagonals.
  // Return true if the player wins, otherwise false.

  // For instance, you could check rows:
  for (let i = 0; i < 3; i++) {
    if (
      squares[i] === player &&
      squares[i + 1] === player &&
      squares[i + 2] === player
    ) {
      return true;
    }
  }

  // Implement similar checks for columns and diagonals.

  return false;
}

// Function to make a move.
export function makeMove({ player, position }: MoveRequest): MoveResponse {
  if (winner || board[position] !== null) {
    return { success: false, message: 'Invalid move.' };
  }

  board[position] = player;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (checkWin(player, board)) {
    winner = player;
    return { success: true, message: `Player ${player} wins!` };
  }

  // Check for a draw
  if (board.every((square) => square !== null)) {
    winner = 'draw';
    return { success: true, message: 'It\'s a draw!' };
  }

  return { success: true };
}

// Function to check the game result.
export function checkGameResult(): GameResult {
  if (winner) {
    return { result: winner };
  } else {
    return { result: 'in_progress' };
  }
}

// Function to get the current game board.
export function getGameBoard(): Array<'X' | 'O' | null> {
  return board;
}

// Function to reset the game board.
export function resetGameBoard(): void {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  winner = null;
}
