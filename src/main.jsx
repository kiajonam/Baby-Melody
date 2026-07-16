/**
 * Application entry point.
 * Renders the React application into the DOM.
 */

import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./clarity"
 import App from './App';
 import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
     <App />
    </BrowserRouter>
   
  </StrictMode>,
)
