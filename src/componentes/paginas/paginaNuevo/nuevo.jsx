import { useEffect, useState } from "react";
import "./nuevo.css";
import TarjetaProducto from "../../TarjetaProducto/TarjetaProducto";

function NuevosProductos() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos() {
    const respuesta = await fetch("http://127.0.0.1:5001/producto");
    if (respuesta.status != 200) {
      setError(`Error consumiendo el servicio, status ${respuesta.status}`);
    }
    const bodyResponse = await respuesta.json();
    setProductos(bodyResponse.Productos);
  }
  return (
    <div class="productos">
      {error === undefined ? (
        ""
      ) : (
        <p>Ocurrio un error consultando los productos</p>
      )}
      {productos.map((producto, indice) => {
        return (
          <div key={producto.id} class="producto">
            <TarjetaProducto producto={producto} />
          </div>
        );
      })}
    </div>
  );
}

export default NuevosProductos;
