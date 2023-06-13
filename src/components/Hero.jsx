import React from 'react'

const hero = () => {
    return (
        <section className="hero" style={{
            display: "flex",
            position: "relative",
            width: "100vw",
            height: "500px"
        }}>
            <img src="../img/bannerHero.jpg" alt="Compra ahora mochilas, valijas y accesorios" style={{
                width: "100vw",
                objectFit: "cover"
            }}></img>
            <div style={{
                display: "flex",
                position: "absolute",
                width: "100%",
                alignItems: "center",
                top: "50%",
                left: "70vw"
            }}>
                <a href="." target="_blank" style={{
                    fontSize: "40px",
                    textDecoration: "none",
                    color: "black",
                    backgroundColor: "burlywood",
                    padding: "8px 12px",
                    border: "4px solid",
                    fontWeight: "bold",
                    marginTop: "10px"
                }}>Compra ahora</a>
            </div>
        </section>
    )
}

export default hero