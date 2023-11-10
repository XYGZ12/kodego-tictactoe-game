// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './components/TicTacToe/TicTacToe'; // Import the new component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe /> {/* Use the new component as the root */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
