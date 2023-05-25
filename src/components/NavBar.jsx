import React, { useState } from "react";

const NavBar = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () =>{
        setIsHover(true);
        console.log("Enter");
    };
    const handleMouseOver = () =>{
        setIsHover(false);
    };
    const [isShow, setIsShow] = useState(false);
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="../index.html">
                    <h2 style={{
                        fontSize: "50px",
                        color: "black",
                        textAlign: "center",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "-10px"
                    }}>MDF</h2>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" 
                        style = {{transition: "2s"}}>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={()=>setIsShow(!isShow)}
                                >
                                    CATEGORIAS
                                </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"
                            style={{display : isShow? 'block' : 'none'}}>
                                <a className="dropdown-item" href="../index.html">
                                    MOCHILAS
                                </a>
                                <a className="dropdown-item" href="../index.html">
                                    BOLSOS
                                </a>
                                <a className="dropdown-item" href="../index.html">
                                    MORRALES
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="../index.html"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseOver}
                        style={{
                            backgroundColor : isHover ? 'rgb(149, 162, 167)': 'white',
                        }}>
                        NOSOTROS
                        </a>
                    </li>
                        <li className="nav-item"
                        >
                            <a className="nav-link active" aria-current="page" href="../index.html"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseOver}
                            style={{
                                backgroundColor : isHover ? 'rgb(149, 162, 167)': 'white',
                            }}>
                            CONTACTO
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
