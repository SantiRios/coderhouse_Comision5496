import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
import './main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYSctMCucuVfrCvKNA1UIriBZsy_iyiN8",
  authDomain: "tienda-mdf.firebaseapp.com",
  projectId: "tienda-mdf",
  storageBucket: "tienda-mdf.appspot.com",
  messagingSenderId: "388289778132",
  appId: "1:388289778132:web:2130c850c0538249cfc641"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
