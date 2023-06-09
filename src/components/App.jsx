import React from 'react'
import NavBar from './NavBar.jsx';
import Hero from './Hero.jsx';
import Footer from './Footer.jsx'
import ItemListContainer from './ItemListContainer.jsx';


const App = () => {
    return (
        <div>
        <NavBar />
        <ItemListContainer greeting="10% off en efectivo" />
        <Hero />
        <Footer />
        </div>
    )
}

export default App