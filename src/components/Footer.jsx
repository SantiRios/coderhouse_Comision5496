import React from "react";


const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul>
                <li>
                    <a href="./index.html">Inicio</a>
                </li>
                <li>
                    <a href="./pages/accesorios.html">Accesorios</a>
                </li>
                <li>
                    <a href="./pages/equipajes.html">Equipajes</a>
                </li>
                <li>
                    <a href="./pages/nosotros.html">Nosotros</a>
                </li>
                <li>
                    <a href="./pages/contacto.html">Contacto</a>
                </li>
                </ul>
            </div>
            <div>
                <a href="./index.html">
                <p className="navbar-brand">MDF</p>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/mochilasdefabrica">
                <img src="../img/facebook.png" alt="Enlace facebook mdf"></img>
                </a>
                <a href="https://www.instagram.com/mochilasdefabrica">
                <img src="../img/instagram.png" alt="Enlace instagram mdf"></img>
                </a>
                <a href=".">
                <img src="../img/whatsapp.png" alt="Enlace whatsapp mdf"></img>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
