import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, getDoc, doc, getFirestore } from 'firebase/firestore'
import Item from '../components/Item';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const fetchProds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "products"), id));

    const productSnap = await Promise.all(
        productRefs.map((productRef) => getDoc(productRef))
    );

    const products = productSnap.map((productSnap)=>{
        if(productSnap.exists()){
            return {id: productSnap.id, ...productSnap.data()};
        }else{
            return null;
        }
    });
    return products.filter((product) => product !== null);
};

const Cart = () => {
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [productsData, setProductsData] = useState([])

    const {count} = useContext(CartContext);
    
    useEffect(()=> {
        const ids = count.products.map((p)=> p.productId);
        fetchProds(ids)
        .then((res)=>{
            setProductsData(res)
        })
        .catch((err)=> setError(err))
        .then(()=>setLoading(false));
        }, [count]);
        console.log(productsData);
    return loading? (<div>Loading ...</div>) : (
        <div>
            <NavBar />
            <Item productsData={productsData}/>
            <Footer />
        </div>
    )
}
export default Cart