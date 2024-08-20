
import React, { useState } from 'react';
import './inicio.css'
import ContenidoPagina from '../../informacion/contenidoPagina';


const Principal = () => {
    return (
        <main>
            <section class="principal">
                <h3 class="marca">SM</h3>
                <h3 class="titulo-principal"> Ropa personalizada</h3>
                <div class="contenedor">
                    <div><img class="imagen" src="imagenes/images.jpeg" /></div>
                    <div><img class="imagen" src="imagenes/images (2).jpeg" /></div>
                    <div><img class="imagen" src="imagenes/buso.jpg" /></div>
                </div>

            </section>

            <section class="descuento">
                <p>¡DESCUENTO DEL!
                    <h1> 20%</h1>En la primera compra</p>
            </section>
            <section class="mision">

                <p>Estamos orgullosas de diseñar y confeccionar todas nuestras prendas en Colombia para llevar las
                    últimas tendencias de moda para todos ofreciendo un producto 100% pensado en ti, a precios bajos y
                    con la mejor calidad.</p>

                <p>En SM tenemos las últimas tendencias de moda en busos, blusas, camisas, camisetascon los mejores
                    diseños y mucho más. Además, tenemos la ropa más linda para cada ocasión; para el fin de semana,
                    para el trabajo, para la rumba, o para estar en la casa relajados..</p>

            </section>
        </main>



    );
};


export default Principal