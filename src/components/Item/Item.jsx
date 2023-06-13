import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Item = ({productsData}) => {
    return (
        <Row xs={1} md={2} className="g-4">
        {productsData.map((p, idx) => (
            <Col key={idx}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.imagen} />
            <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>
                {p.precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    )
}

export default Item