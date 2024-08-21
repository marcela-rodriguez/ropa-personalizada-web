import "./TarjetaProducto.css";

const urlImagenNoEncontrada =
  "https://res.cloudinary.com/teepublic/image/private/s--lJJYqwRw--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1260,w_1260,x_-76,y_-135/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-76,y_-135/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1606803363/production/designs/16724317_0.jpg";

function TarjetaProducto({ producto }) {
  return (
    <div>
      <img
        className="imagen-producto"
        src={producto.imagen ? producto.imagen : urlImagenNoEncontrada}
      />
      <div>
        <p>Nombre Producto: {producto.nombre}</p>
        <p>Color: {producto.color}</p>
        <p>Talla: {producto.talla}</p>
        <p className="precio">Precio: {producto.precio}</p>
        <button className="saveButton" type="submit">Anadir Producto</button>
      </div>
    </div>
  );
}

export default TarjetaProducto;
