import React from 'react'
import productosArr from '../api/productos.json'
import { useParams } from 'react-router-dom';
import Item from '../components/Item/Item';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBarCategories from '../components/NavBarCategories';

const CategoriesDetail = () => {
    const {categorie} = useParams();
    console.log(categorie);

    const productDataFlt = productosArr.filter(e=>e.categoria.toLowerCase().includes(categorie.toLowerCase()))
    console.log(productDataFlt);
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