import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import productosArr from '../api/productos.json'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProductDetail = () => {
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState({});
    
    const {productId} = useParams();

    useEffect(() => {
        setProductData(productosArr);
        setLoading(false);
    }, []);
    return loading ? (<div>Loading ...</div>) : (
        <div>
            <NavBar />
            <Col key={productData[productId]}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productData[productId].imagen} />
            <Card.Body>
                <Card.Title>{productData[productId].nombre}</Card.Title>
                <Card.Text>
                {productData[productId].precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
            </Col>
            <Footer />
        </div>
    );
}

export default ProductDetail