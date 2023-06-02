import React, { useEffect, useState } from "react";

import ItemCount from "../ItemCount/ItemCount.js";
import "../ItemListContainer/ItemListContainer.css";
import { arrayProductos } from "../arrayproductos/data.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { faTheRedYeti } from "@fortawesome/free-brands-svg-icons";

// contenedor de catalogo, recibe datos que van a renderizar los componentes hijos y se los pasa como props
const ItemListContainer = () => {

  
  // se crea instancia de base de datos de firebase
  const db = getFirestore();
  // accedo a la coleccion de productos de firebase
  const itemsCollection = collection(db, "items");

  const { id } = useParams();

  // useState para introducir en el estado productos, lo que consuma del arrayProductos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  // creo el variable con clase promise con un setTimeout de 2 segundos que devuelve array de productos en el parametro resolve

  useEffect(() => {
    if (id) {
      const queryFiltrado = query(itemsCollection, where("category", "==", id));
      getDocs(queryFiltrado).then((data) => {
        setProductos(
          data.docs.map((document) => ({ id: document.id, ...document.data() }))
        );
      });
      setLoading(false);
    } else {
      getDocs(itemsCollection) // invoca el llamado
        .then((data) => {
          setProductos(
            data.docs.map((document) => ({
              id: document.id,
              ...document.data(),
            }))
          );
          setLoading(false)
        });
    }
  }, [id]);

  

  const getsProductsPromise = new Promise((res, rej) => {});

  return (
    <>
     
        <div className="container">
          {loading ? (
            <ReactLoading className="loading" color="#586f61" type="spin" />
          ) : (
            <div className="container1">
              <h1 style={{ textAlign: "center" }}> PRODUCTOS DESTACADOS </h1>
              <ItemList // pasamos los productos como props a ItemList
                items={productos}
              />
            </div>
          )}
        </div>
      
    </>
  );
};

export default ItemListContainer;

/* getsProductsPromise // en setProductos pasamos la data del array al state despues que se resuelve la promesa
      .then((arrayp) => setProductos(arrayp)) // en arrayp obtenemos la respuesta de lo que ingresamos en el res, y lo que ingresamos en res es el arrayProductos
      .catch((err) => console.log(err));

    // utilizo useEffect para ejecutar gets products a fin de simular que consumimos datos de base de datos
    // con array vacio para que se ejecute en onMount */

/* 
    setTimeout(() => {
      if (id) {
        const productosFiltrados = arrayProductos.filter(
          (e) => e.category === id
        );
        res(productosFiltrados);
      }
      res(arrayProductos);
    }, 2000); */
