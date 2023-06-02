import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  // prop que se llama producto que va a tener todos los datos de la pelicula

  return (
    <div className="card-container">
      <div className="item-container">
        <h2> {producto.name} </h2>
        <img src={producto.img} />
       
          {" "}
          <Link className='link' to={`/item/${producto.id}`}>
            {" "}
            Comprar{" "}
          </Link>{" "}
       
        {/* <h3> {producto.stock}</h3> */}
        <div></div>
      </div>
    </div>
  );
};

export default Item;
