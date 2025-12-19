import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (item, quantity) => {
    const stock = Number.isFinite(item?.stock) ? Math.max(0, item.stock) : Infinity;
    const qty = Number.isFinite(quantity) ? Math.floor(quantity) : 0;
    if (qty <= 0) return;
    if (stock === 0) return;

    const exists = cart.find((prod) => prod.id === item.id);

    if (exists) {
      const newQty = Math.min(exists.quantity + qty, stock);
      setCart(cart.map((prod) => (prod.id === item.id ? { ...prod, quantity: newQty } : prod)));
    } else {
      setCart([...cart, { ...item, quantity: Math.min(qty, stock) }]);
    }
  };

  // Eliminar un producto
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    localStorage.removeItem("cart");
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
