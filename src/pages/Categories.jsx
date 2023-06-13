import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NavBarCategories from '../components/NavBarCategories'
import ItemListContainer from '../components/ItemListContainer'

const Categories = () => {
    return (
        <div>
            <NavBar />
            <NavBarCategories />
            <ItemListContainer />
            <Footer />
        </div>
    )
}

export default Categories