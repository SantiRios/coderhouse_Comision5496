import React from "react";
import logo from "../img/logo_Mdf.png";
import logoFb from "../img/facebook.png";
import logoIg from "../img/instagram.png";
import logoWpp from "../img/whatsapp.png";

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
                <img src={logo} alt="Logo Ona marroquineria"></img>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/mochilasdefabrica">
                <img src={logoFb} alt="Enlace facebook mdf"></img>
                </a>
                <a href="https://www.instagram.com/mochilasdefabrica">
                <img src={logoIg} alt="Enlace instagram mdf"></img>
                </a>
                <a href=".">
                <img src={logoWpp} alt="Enlace whatsapp mdf"></img>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
