import React, { useEffect, useState } from 'react'
import Item from './Item/Item'
import productsArr from '../api/productos.json'

const ItemListContainer = ({greeting}) => {
    const [productsData, setProductsData] = useState([])
    useEffect(()=>{
        setProductsData(productsArr)
    }, [])
    return (
        <Item productsData={productsData}/>
    )
}

export default ItemListContainer