import React, { useEffect, useState } from "react";
import { arrayProductos } from "../arrayproductos/data.js";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const db = getFirestore();
  const referenciaItems = doc(db, "items", itemId);

  useEffect(() => {
    getDoc(referenciaItems)
      .then((data) => {
        setDetail({ id: data.id, ...data.data() });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="todo-container">
      {loading ? (
        <ReactLoading className="loading" color="#586f61" type="spin" />
      ) : (
        <div className="itemdetail-container">
          <ItemDetail
            /* paso los detalles como props a ItemDetail */ item={detail}
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
