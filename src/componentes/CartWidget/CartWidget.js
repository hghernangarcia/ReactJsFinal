import React from "react";
import carticon from "../../assets/cart-shopping-solid.svg";
import carticon1 from "../../assets/bag1.svg";
import "./cartwidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";






const CartWidget = () => {

const {getQuantity} = useContext(CartContext)

  return (
    <div>
        { getQuantity() ?  
      <Link to='/cart'>
        
        <div className='widget-container'>
         <img src={carticon1} className="icon" style={{color:'white'}} />
   
        <span className='cantidad'> {getQuantity()} </span>
        </div>
      </Link>
      :
      <>

       </>
      }
    </div>
  );
};

export default CartWidget;
