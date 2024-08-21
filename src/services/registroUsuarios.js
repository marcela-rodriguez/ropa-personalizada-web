


export function registrarCliente(nombre, telefono, correo, contrasena, direccion) {
    console.log("registrarCliente")
    const peticion = {
        method: "POST",
        body: JSON.stringify({
            "nombre": nombre,
            "telefono": telefono,
            "correo": correo,
            "contraseña": contrasena,
            "direccion": direccion,
        }),
        headers: {
            "content-Type": "application/json"
        }
    }
    fetch("http://127.0.0.1:5000/cliente", peticion)
        .then(respuesta => {

            if (respuesta.status === 201) {
                alert("usuario creado");
                return
            }
            if (respuesta.status == 400) {
                alert("El usuario ya existe")
                return
            }
            throw new Error("Error consumiendo el servicio")
        }).catch(error => {
            alert("error creando el cliente, verifique sus datos")
            console.log("error catch", error)
        });
}