import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (item, quantity) => {
    const exists = cart.find((prod) => prod.id === item.id);

    if (exists) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar un producto
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de unidades
  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Total del carrito en $
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        cartQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
