import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import NuestrosFavoritos from './components/NuestrosFavoritos.jsx';
import Footer from './components/Footer.jsx'
import reportWebVitals from './reportWebVitals';
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <NuestrosFavoritos />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
