
export function loginCliente(correo, contrasena) {

    console.log("Aquì se deben enviar los datos al servicio");
    const peticion = {
        method: "POST",
        body: JSON.stringify({
            "correo": correo,
            "contraseña": contrasena,
        }),
        headers: {
            "content-Type": "application/json"
        }
    }
    fetch("http://127.0.0.1:5000/cliente/login", peticion)
        .then(respuesta => {
            console.log("Respusta")
            console.log(respuesta.status)
            if (respuesta.status === 200) {

                alert("Ingreso exitoso");
                return
            }
            if (respuesta.status == 404) {
                alert("Error en la autenticacion valide sus datos ingresados")
                return
            }

            throw new Error("Error consumiendo el servicio")
        }).catch(error => {
            if (correo = "", contrasena = "") {

                alert("error: verifique sus datos")
                console.log("error catch", error)
            }
        });
}