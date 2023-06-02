import { useContext, useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { arrayProductos } from "../arrayproductos/data.js";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = (props) => {
  const { name, id, description, talle, price, img } = props.item;

  

  window.scrollTo(0,0)

  // useContext es un hook react para traer contexto
  const { addToCart } = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false); // estado que indica si el usuario hizo la compra o no

  const onAdd = (count) => {
    // recibe la cantidad que esta en itemcount y se la pasa a la funcion de addTocart
    setPurchaseCompleted(true);
    addToCart(props.item, count);
    
   /* X<   */

  };

  return (
    <div className="detail-container">
      <div className="grid-container">
        <div className="image-container">
          {" "}
          <img src={img} />{" "}
        </div>
        <div className="data-container">
          <h1> {name} </h1>

          <div className="descripcion-container">
              <p className='description'> {description} </p>
          {/*   <p>  Mongomeri tejido hecho con lana orgánica, <br/>
                Con bolsillos y capucha <br/>
                 Color: Gris oscuro  <br/>
              </p> */}
            
          
            <p className='talle'> - {talle} </p>
            <p className="p">  -  $ {price}</p> 
          
          </div>
          <div className="Itemcount-container">
            {/* {count ? <strong>verdadero</strong> : <strong>falso</strong>}
    { count && <strong> Se renderea </strong>} */}

            {purchaseCompleted ? (
              <Link to="/cart" className="addCarrito">
                Ir a mi carrito
              </Link>
            ) : (
              <ItemCount className="itemcount" onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ItemDetail;
