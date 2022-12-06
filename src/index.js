import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PopProvider } from './components/pop/pop.context';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './ap/context/color.context';
import { CategoriesProvider } from './ap/context/categories.context';
import { CartProvider } from './ap/context/cart.context';
import { NotesProvider } from './ap/context/notes.context';
import { UserProvider } from './ap/context/user.context';
import { AccountProvider } from './ap/context/account.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <UserProvider> */}
      <AccountProvider>
        <PopProvider>
          <ColorProvider>
            <CategoriesProvider>
              <CartProvider>
                <NotesProvider>
                  <App />
                </NotesProvider>
              </CartProvider>
            </CategoriesProvider>
          </ColorProvider>
        </PopProvider>
      </AccountProvider>
      {/* </UserProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
