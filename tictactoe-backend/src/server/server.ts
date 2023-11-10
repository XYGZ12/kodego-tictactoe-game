// Import the game logic and interfaces
import express from 'express';
import cors from 'cors';
import { makeMove, checkGameResult, getGameBoard, resetGameBoard } from '../game/ticTacToe';
import { MoveRequest, GameResult } from '../game/interfaces';

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Define endpoints
app.post('/makeMove', (req, res) => {
  const { player, position } = req.body as MoveRequest;
  const moveResponse = makeMove({ player, position });
  res.json(moveResponse);
});

app.get('/checkGameResult', (req, res) => {
  const result = checkGameResult();
  res.json(result);
});

app.get('/getGameBoard', (req, res) => {
  const board = getGameBoard();
  res.json(board);
});

// Add a new route to reset the game board
app.post('/resetGameBoard', (req, res) => {
  resetGameBoard(); // Call the resetGameBoard function
  res.json({ success: true }); // Return a success response
});

// Define the route to reset the game
app.post('/reset', (req, res) => {
  resetGameBoard();
  res.json({ success: true });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
