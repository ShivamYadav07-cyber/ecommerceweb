import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import ShopContextProvider from './Context/ShopContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 9a0e5693bfc9fe7fc2fd8a942b4b17dd0d6173dc
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
