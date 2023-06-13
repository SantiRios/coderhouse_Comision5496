import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({productsData}) => {
    
    return (
        <Row xs={1} md={3} className="g-4">
        {productsData.map((p, idx) => (
            <Col key={idx}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.imagen} />
            <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>
                {p.precio}
                </Card.Text>
                <Button variant="primary"><Link to ={`/products/${p.id-1}`}>Comprar</Link></Button>
            </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    )
}

export default Item