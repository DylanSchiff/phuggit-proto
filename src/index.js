import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PopProvider } from './pop.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopProvider>
      <App />
    </PopProvider>
  </React.StrictMode>
);
reportWebVitals();
