import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ProductDetail = () => {
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState({});
    const [error, setError] = useState(false);

    const {productId} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const productosArr = doc(db, "products", productId);
        getDoc(productosArr)
        .then((snapshot)=>{
            setProductData([{id: snapshot.id, ...snapshot.data()}]);
        })
        .catch((error)=> setError(true))
        .then(()=>setLoading(false));
    }, [productId]);
    return loading ? (<div>Loading ...</div>) : (
        <div>
            <NavBar />
            <Item productsData={productData} />
            <Footer />
        </div>
    );
}

export default ProductDetail