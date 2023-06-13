import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBarCategories from '../components/NavBarCategories';

const Products = () => {
    return (
        <div>
            <NavBar />
            <NavBarCategories />
            <ItemListContainer />
            <Footer />
        </div>
        
    )
}

export default Products