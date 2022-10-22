import React from "react";

const NavBar = ()=>{
    return(
        <div className="container">
            <nav className="nav">
                <div className="brand">
                    <a href="#top">Perifericos Cba</a>
                </div>
                <ul className="navList">
                    <li> <a className="navLink" href="#top">Home</a> </li>
                    <li> <a className="navLink" href="#top">Teclados</a> </li>
                    <li> <a className="navLink" href="#top">Auriculares</a> </li>
                    <li> <a className="navLink" href="#top">Monitores</a> </li>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Categorias
                        </button>
                        <div className="dropdown-content">
                            <a href="#top">Monitores</a>
                            <a href="#top">Teclados</a>
                            <a href="#top">Auriculares</a>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;