import React from "react";
import './menu.css'
import { Link } from 'react-router-dom';

const Menu = ({ children }) => {
    return (
        <div>
            <header>
                <div className="menu">
                    <div className="caja">
                        <img className="logo" src="/imagenes/logoSM.jpg" />
                        <ul>

                            <li><Link to="/inicio">Inicio</Link></li>
                            <li><Link to="/nuevo">Nuevo</Link> </li>
                            <li><Link to="/mujer">Mujer</Link></li>
                            <li><Link to="/hombre">Hombre</Link></li>

                        </ul>
                    </div>
                    <div className="caja2">
                        <ul>
                            <li><Link to="/registroInicio">Registrar/Login</Link></li>

                            <li>
                                <div>
                                    <a> <Link to="/carrito">Mi carrito</Link> </a>
                                    <img className="carrito" src="imagenes/carro.jpg" />

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
            <body className="div-center">
                {children}
            </body>
        </div>
    )
}


export default Menu
