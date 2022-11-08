import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DisplayProvider } from './icon.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>
);
reportWebVitals();
