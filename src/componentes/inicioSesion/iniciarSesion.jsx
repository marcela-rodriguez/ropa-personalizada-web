
import React, { useState } from 'react';
import { loginCliente } from '../../services/inicioSesion';
import { useNavigate } from 'react-router-dom';



const InicioSesion = () => {
    const [correo, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCliente(correo, contrasena)
        navigate("/nuevo")

    };
    return (
        <form onSubmit={handleSubmit}>
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

            <div className="iniciar">
                <p id="olviContrasena">Olvidaste tu contraseña <a href="#">click
                    aqui</a></p>
                <button className="saveButton" type="submit">Iniciar</button>
            </div>

        </form>

    );
};


export default InicioSesion