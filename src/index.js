// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
