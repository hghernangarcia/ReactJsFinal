import { counter } from "@fortawesome/fontawesome-svg-core";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Count.css";

const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 5;
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log(" [useEffect] el componente se monto");
  }, []);

  useEffect(() => {
    console.log("[useEffect] el estado cambio");
  }, [count]);

  const addHandler = () => {
    console.log("se esta sumando");
    setCount(count + 1);
  };
  const removeHandler = () => {
    console.log("se esta restando");
    if (count > 1) setCount(count - 1);
  };

  /* const handleClick = (id, quantity) => {
    const findProduct = products.find()
  }
 */

  return (
    <>
      <div className="Itemcount">
        <div className="ItemCount-add">
          <button className="removeButton" onClick={removeHandler}>
            {" "}
            -{" "}
          </button>
          <strong className="count"> {count} </strong>
          <button
            className="addButton"
            onClick={addHandler}
            //utilizo disable propiedad del buttom para desabilitar boton cuando llega al limite de stock
            disabled={count === stock ? true : null}
          >
            {" "}
            +{" "}
          </button>
        </div>

        <button className="addCarrito" onClick={() => onAdd(count)}>
          {" "}
          Agregar al carrito{" "}
        </button>
      </div>
    </>
  );
};

export default ItemCount;
