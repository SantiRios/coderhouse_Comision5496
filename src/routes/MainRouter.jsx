import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail';
import Categories from '../pages/Categories';
import CategoriesDetail from '../pages/CategoriesDetail';
const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/products" element={<Products />}/>
                <Route path="/products/:productId" element={<ProductDetail />}/>
                <Route exact path="/categories" element={<Categories />}/>
                <Route path="/categories/:categorie" element={<CategoriesDetail />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter