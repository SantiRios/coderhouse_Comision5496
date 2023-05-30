import React from 'react'
import mochila1 from '../img/1.jpg'
import mochila2 from '../img/2.jpg'
import mochila3 from '../img/3.jpg'
import valija1 from '../img/4.jpg'
import valija2 from '../img/5.jpg'
import valija3 from '../img/6.jpg'

const NuestrosFavoritos = () => {
    return (
        <section className="nuestrosFavoritos">
        <h2 className='tituloProdFav'>Nuestros Favoritos</h2>
        <div className="nuestrosFavoritosContenedor">
            <div className="nuestrosFavoritosItem">
                <img src={mochila1} className="nuestrosFavoritosImg" alt="Mochila everlast camuflada"></img>
                <h3>Producto 1</h3>
                <a href=".">COMPRAR</a>
            </div>
            <div className="nuestrosFavoritosItem">
                <img src={mochila2} className="nuestrosFavoritosImg" alt="Mochila unicross"></img>
                <h3>Producto 2</h3>
                <a href=".">COMPRAR</a>
            </div>
            <div className="nuestrosFavoritosItem">
                <img src={mochila3} className="nuestrosFavoritosImg" alt="Mochila ina murakami"></img>
                <h3>Producto 3</h3>
                <a href=".">COMPRAR</a>
            </div>
        </div>
        <h2 className="tituloProd">Bolsos</h2>
        <div className="nuestrosFavoritosContenedor contenedor2Prod">
            <div className="nuestrosFavoritosItem">
                <img src={valija1} className="nuestrosFavoritosImg" alt="Valija unicross"></img>
                <h3>Producto 1</h3>
                <a href=".">COMPRAR</a>
            </div>
            <div className="nuestrosFavoritosItem">
                <img src={valija2} className="nuestrosFavoritosImg" alt="Valija head"></img>
                <h3>Producto 2</h3>
                <a href=".">COMPRAR</a>
            </div>
            <div className="nuestrosFavoritosItem">
                <img src={valija3} className="nuestrosFavoritosImg" alt="Valija Bungy"></img>
                <h3>Producto 3</h3>
                <a href=".">COMPRAR</a>
            </div>
        </div>
    </section>
    )
}

export default NuestrosFavoritos