import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';

// TODO add back strict mode, just gone so useEffect doesn't run twice

createRoot(document.getElementById('root')!).render(<App />);
