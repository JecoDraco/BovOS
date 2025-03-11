import React from "react";
import "./ItemProductos.scss";

export function ItemProductos({ producto }) {
  return (
    <div className="body">
      <div className="card" style={{ width: "19rem" }}>
        <img
          src={producto.imagen}
          class="card-img-top"
          alt="{producto.nombre}"
          style={{ width: "130px" }}
          className="mx-auto d-block"
        />
        <div className="text">
          <h5 className="title">{producto.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush ">
          <li className="list-group-item">Precio: ${producto.precio}</li>
          <li className="list-group-item">
            Cantidad disponible: {producto.cantidad}
          </li>
          <li className="list-group-item">
            {producto.contenido || producto.unidad}
          </li>
        </ul>
        <div class="card-body"></div>
      </div>
    </div>
  );
}
