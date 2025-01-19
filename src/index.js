// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookFinderApp from './BookFinderApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookFinderApp />
  </React.StrictMode>
);
