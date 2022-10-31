import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
