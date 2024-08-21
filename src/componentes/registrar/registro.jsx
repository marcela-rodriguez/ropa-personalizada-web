
import React, { useState } from 'react';
import { registrarCliente } from '../../services/registroUsuarios'
import './registro.css'

const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [direccion, setDirecion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("_:__________________-");
        registrarCliente(nombre, telefono, correo, contrasena, direccion)
    };


    return (

        <form onSubmit={handleSubmit}>

            <div className="campos">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div className="campos">
                <label htmlFor="telefono">Telefono:</label>
                <input
                    type="phone"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>
            <div className="campos">
                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="campos">
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                    type="password"
                    id="contrasena"
                    value={contrasena}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="campos">
                <label htmlFor="direccion">Direccion:</label>
                <input
                    type="location"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDirecion(e.target.value)}
                    required
                />
            </div>
            <div>
                <button className="saveButton" type="submit">Registrarse</button>

            </div>
        </form>
    );
};


export default Registro