// src/game/interfaces.ts
export interface MoveRequest {
    player: 'X' | 'O';
    position: number; // The position on the board (0-8)
  }
  
  export interface MoveResponse {
    success: boolean;
    message?: string;
  }
  
  export interface GameResult {
    result: 'X' | 'O' | 'draw' | 'in_progress';
  }
  