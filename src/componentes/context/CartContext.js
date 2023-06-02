import { createContext, useState } from "react";



export const CartContext = createContext({})

const {Provider} = CartContext
/* const ejemploCarrito = [
    { 
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    }
]
  */

// exportamos componente funcional del provider
// y en el param desestrucutramos los children

export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue)

    // creo una funcion que agregue algo al carrito

     const addToCart = (item, quantity ) => {
         console.log(isInCart(item.id));
        if(isInCart(item.id)) { // verifica si el producto ya existe en el carrito
          const newCart = [...cart]  // hago copia de carrito con spread operator para modificarlo 
          for (const element of newCart) { // itero el carrito
              if(element.item.id === item.id) {    // busco cual producto del carrito coincide con el que voy a meter 
                  element.quantity = element.quantity + quantity  // cuando encuentro, le sumo la cantidad del producto nuevo
              }                    
          }
          setCart(newCart) // si cumple condicion, se modifica el carrito, actualizo la cantidad unicamente
        } else {
            setCart([...cart, {  item: item, quantity: quantity}]) // agrega producto nuevo al carrito
        } 
        }


       const removeFromCart = (id) => {
           const newCart = [...cart].filter(element => element.item.id !== id) // crea un array que excluye al elemento con el id que le paso la funcion
           setCart(newCart)   // filter va a borrar todos los elementos que tenga el id que reciba la funcion
       }

       

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }
    // creo una variable que le voy a pasar a value como context con objetos y el estado, tambien el carrito del useState

    // funcion que me diga cuantos productos hay en el carrito
    const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }
    
    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.item.price)
        })
        return total
    }
 
     const context = {
            cart, //lista   
            addToCart, // funcion para agregar elementos a la lista
            clearCart, // limpiamos lista de favoritos
            removeFromCart,
            getQuantity,
            getTotal
        } 

  return (
     <Provider value={context}>
         {children}
     </Provider>
  )
}


