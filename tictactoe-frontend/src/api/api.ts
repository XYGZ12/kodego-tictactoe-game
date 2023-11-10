// src/api/api.ts
const backendUrl = 'http://localhost:5000'; // Update this URL to match your backend's URL.

// Function to make a move
export async function makeMove(player: 'X' | 'O', position: number) {
  const response = await fetch(`${backendUrl}/makeMove`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ player, position }),
  });
  return await response.json();
}

// Function to check the game result
export async function checkGameResult() {
  const response = await fetch(`${backendUrl}/checkGameResult`);
  return await response.json();
}

// Function to get the current game board
export async function getGameBoard() {
  const response = await fetch(`${backendUrl}/getGameBoard`);
  return await response.json();
}

// Function to reset the game board
export async function resetGameBoard() {
  const response = await fetch(`${backendUrl}/resetGameBoard`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

