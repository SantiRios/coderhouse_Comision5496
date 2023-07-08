import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {count} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{count.cant}</span>
            </Link>
        </div>
    )
}

export default CartWidget