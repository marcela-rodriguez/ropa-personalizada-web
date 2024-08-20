
import React from 'react';
import './contenidoPagina.css'



const ContenidoPagina = () => {
    return (
        <><div className="contenido-pagina">
            <img className="imagen" src="imagenes/logoSM.jpg" />

            <div className="informacion">
                <div>
                    <h3 class="titulo">Tienda</h3>
                    <ul>
                        <li class="items">Nuevo</li>
                        <li class="items">Mujer</li>
                        <li class="items">Hombre</li>
                    </ul>
                </div>

                <div>
                    <h3 class="titulo">Nosotros</h3>
                    <ul>
                        <li class="items">Acerca de </li>
                        <li class="items">Suscribete</li>
                        <li class="items">Contactos</li>
                    </ul>
                </div>

                <div>
                    <h3 class="titulo">Terminos y condiciones</h3>
                    <ul class="lista-termino&condiciones">
                        <li class="items">Politicas de la tienda</li>
                        <li class="items">Envio y devoluciones</li>
                        <li class="items">Metodos de pago</li>
                    </ul>
                </div>
            </div>
        </div>
            <footer class="text-footer">
                <p>Tienda SM - 2024</p>
            </footer></>
    );



};


export default ContenidoPagina




