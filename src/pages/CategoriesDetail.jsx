import React from 'react'
import productosArr from '../api/productos.json'
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBarCategories from '../components/NavBarCategories';

const CategoriesDetail = () => {
    const {categorie} = useParams();

    const productDataFlt = productosArr.filter(e=>e.categoria.toLowerCase().includes(categorie.toLowerCase()))
    return (
        <div>
            <NavBar />
            <NavBarCategories />
            <Item productsData={productDataFlt}/>
            <Footer />
        </div>
    );
}

export default CategoriesDetail