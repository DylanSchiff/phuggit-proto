import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AccountProvider } from './AAA/context/AAA-context/account.context';
import { RouteProvider } from './AAA/context/AAA-context/routing.context';
import { AccountPanelProvider } from './AAA/context/AAA-context/account-panel.context';
import { ColorProvider } from './AAA/context/AAA-context/color.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountProvider>
        <RouteProvider>
          <AccountPanelProvider>
            <ColorProvider>
              <App />
            </ColorProvider>
          </AccountPanelProvider>
        </RouteProvider>
      </AccountProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
