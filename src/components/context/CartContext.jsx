import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (producto, quantity) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...producto, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totals = useMemo(() => {
    const totalQuantity = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.precio,
      0
    );
    return { totalQuantity, totalPrice };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, ...totals }}
    >
      {children}
    </CartContext.Provider>
  );
}
