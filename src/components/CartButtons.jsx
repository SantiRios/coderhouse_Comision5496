import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const CartButtons = ({productId}) => {
    const [state, setState] = useState(1);    
    const {count, setCount} = useContext(CartContext);

const handleAddClick = () => {
    setState(state + 1);
};
const handleLessClick = () => { 
    setState(state - 1);
};

    const addToCart = () =>{
        const existe = count.products.find(
            (p) => p.productId === productId
        );
        if(existe!=null) {
            existe.cantidad += state
        } else {
            const newProduct = {
                productId,
                cantidad: state,
            };
            setCount((prevState) => ({
                cant: prevState.cant + state,
                products:[...prevState.products ,newProduct ],
            }));
        }
    };
    return (
        <div className="d-flex align-items-center contenedorAdd">
            <div className="d-flex w-25">
                <Button variant="outline-secondary" className="rounded-0 lessBtn" onClick={handleLessClick}>
                    -
                </Button>
                <span className="spanCart">{state}</span>
                <Button variant="outline-secondary" className="rounded-0 addBtn" onClick={handleAddClick}>
                    +
                </Button>
            </div>
            <Button className="ml-2 addBtn" variant="primary" onClick={addToCart}>
                Agregar al Carrito
            </Button>
        </div>
    );
};



export default CartButtons;