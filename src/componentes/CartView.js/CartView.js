import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Order from "./Order";
import "./cartitem.css";

const CartView = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  const [empty, setEmpty] = useState(true);
  const [showOrder, setShowOrder] = useState(true);
  window.scrollTo(0,0)

  useEffect(() => {
    if (cart.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [cart.length]);

  if (!empty) {
    return (
      <div className='cartview-container'>
        {showOrder ? (
          <div className="view-container">
            {cart.map((e) => (
              <div className="cart-item-container" key={e.item.id}>
                <img src={e.item.img} />
                <span> {e.item.name} </span>
                <span> ${e.item.price} </span>

                <span> Cantidad: {e.quantity} </span>
                <button onClick={() => removeFromCart(e.item.id)}>
                  {" "}
                  Eliminar{" "}
                </button>
              </div>
            ))}
            <div className="preciototal-container">
              <h4>TOTAL: ${getTotal()} </h4>
              <button
                onClick={() => setShowOrder(false)}
                className="boton-total"
              >
                {" "}
                Confirmar compra{" "}
              </button>
            </div>
          </div>
        ) : (
          <Order order={cart} getTotal={getTotal} />
        )}
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <h1>No hay elementos en el carrito</h1>
        <Link to="/items">
          {" "}
          <button className="button-volver"> Volver </button>{" "}
        </Link>
      </div>
    );
  }
};

export default CartView;
