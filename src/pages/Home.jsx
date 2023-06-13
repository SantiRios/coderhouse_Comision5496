import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx'
import ItemListContainer from '../components/ItemListContainer.jsx';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer />
            <Hero />
            <Footer />
            </div>
    )
}

export default Home