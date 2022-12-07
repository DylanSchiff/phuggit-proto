import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// import { PopProvider } from './components/pop/pop.context';
// import { ColorProvider } from './ap/context/color.context';
// import { CategoriesProvider } from './ap/context/categories.context';
// import { CartProvider } from './ap/context/cart.context';
// import { NotesProvider } from './ap/context/notes.context';
// import { FreshAccountProvider } from './ap/context/fresh-account.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <FreshAccountProvider>
        <PopProvider>
          <ColorProvider>
            <CategoriesProvider>
              <CartProvider>
                <NotesProvider> */}
      <App />
      {/* </NotesProvider>
              </CartProvider>
            </CategoriesProvider>
          </ColorProvider>
        </PopProvider>
      </FreshAccountProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
