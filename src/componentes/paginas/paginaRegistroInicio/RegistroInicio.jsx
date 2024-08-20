import React, { useState } from "react";
import Registro from "../../registrar/registro";
import InicioSesion from "../../inicioSesion/iniciarSesion";

const RegistrarLongin = () => {
  const [mostrarPaginaRegistro, setMostrarPaginaRegistro] = useState(true);
  const classNameInicioSessionButton = mostrarPaginaRegistro
    ? "desactivar"
    : "";
  const classNameRegistroButton = mostrarPaginaRegistro ? "" : "desactivar";

  return (
    <div className="formato">
      {mostrarPaginaRegistro ? (
        <h1>Formulario Registro</h1>
      ) : (
        <h1>Inicio Sesion</h1>
      )}
      <div class="botones">
        <button
          id="registro"
          onClick={() => {
            setMostrarPaginaRegistro(true);
          }}
          type="button"
          className={classNameRegistroButton}
        >
          Registro
        </button>
        <button
          id="iniciar_sesion"
          onClick={() => {
            setMostrarPaginaRegistro(false);
          }}
          type="button"
          className={classNameInicioSessionButton}
        >
          Iniciar Sesion
        </button>
      </div>
      {mostrarPaginaRegistro ? <Registro /> : <InicioSesion />}
    </div>
  );
};

export default RegistrarLongin;
