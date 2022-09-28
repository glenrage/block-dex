import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes.js';
import { PokedexContextProvider } from './context/context';
import ErrorHandler from './Components/ErrorHandler';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout/Layout.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorHandler>
      <PokedexContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(({ path, Component }, key) => (
                <Route exact path={path} key={key} element={Component} />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </PokedexContextProvider>
    </ErrorHandler>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
