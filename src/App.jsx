import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Registro from "./componentes/registrar/registro";
import InicioSesion from "./componentes/inicioSesion/iniciarSesion";
import Principal from "./componentes/paginas/paginaInicio/inicio";
import Menu from "./componentes/menu/menu";
import NoEncontrado from "./componentes/paginas/noEncontrado/noEncontrado";
import RegistrarLongin from "./componentes/paginas/paginaRegistroInicio/RegistroInicio";
import ContenidoPagina from "./componentes/informacion/contenidoPagina";
import NuevosProductos from "./componentes/paginas/paginaNuevo/nuevo";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Menu>
        <main>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/inicio" element={<Principal />} />
            <Route path="/registroInicio" element={<RegistrarLongin />} />
            <Route path="/nuevo" element={<NuevosProductos />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </main>
      </Menu>
      <ContenidoPagina />
    </div>
  );
}

export default App;
