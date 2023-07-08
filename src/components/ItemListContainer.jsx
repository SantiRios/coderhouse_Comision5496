import React, { useEffect, useState } from 'react'
import Item from './Item'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
        const db = getFirestore();
        const productsArr = collection(db, "products");
        getDocs(productsArr)
            .then((snapshot)=>{
                setProductsData(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
            })
            .catch((error)=> setError(true))
            .then(()=>setLoading(false));
    }, []);
    return loading ? (<div>Loading ...</div>) : (
        <Item productsData={productsData}/>
    )
}

export default ItemListContainer