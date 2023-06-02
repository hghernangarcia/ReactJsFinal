import { data } from "autoprefixer";
import React from "react";
import "./order.css";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "@firebase/firestore";
import Swal from "sweetalert2";
import { success } from "daisyui/src/colors";

const Order = ({ order, getTotal }) => {
  const db = getFirestore();
  const collectionReference = collection(db, "orders");

  window.scrollTo(0,0)

  // fecha de pedido
  const date = new Date().toLocaleString + "";
  const orderList = {
    buyer: {
      name: "mauro velazques",
      email: "mauroq11@gmail.com",
      tel: 213123123123,
      direccion: "dasdasdas",
    },
    items: order.map((element) => ({
      id: element.item.id,
      cantidad: element.quantity,
      precio: element.item.price,
      nombre: element.item.name,
    })),
    date: date,
    total: getTotal(),
  };

  const handleCheckout = () => {
    addDoc(collectionReference, orderList).then((response) => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Tu orden fue confirmada",
        text:
          `Va a llegar a tu domicilio en 24 horas  -  El ID de tu orden es: ` +
          response.id,
      });
    });
  };

  return (
    <div className="all-container">
      <h2> ¿Confirmar Compra? </h2>

      {order.map((element) => (
        <div className="order-item-container" key={element.item.id}>
          <p> {element.item.name} </p> 
          -
          <span> ${element.item.price} </span>
          <br/> 
          <span> Cantidad: {element.quantity} </span>
          <hr></hr>
        </div>
      ))}

      <h4> Total de la compra: ${getTotal()} </h4>

      <button onClick={handleCheckout}> Confirmar </button>
    </div>
  );
};

export default Order;
