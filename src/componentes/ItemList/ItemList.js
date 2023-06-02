import React from "react";
import { arrayProductos } from "../arrayproductos/data";
import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({items}) => {
  return (
    <div className="product-list-container">
      {items.map((itm) => {
        // rendereo array de componentes item para cada uno de los elementos que llamamos itm
        return (
          <div className="card-container1" key={itm.id}>
            <Item producto={itm}  />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
