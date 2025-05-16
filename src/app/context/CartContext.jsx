"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

/**
 * CartProvider makes `useCart()` data available app‑wide
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);        // [{id,name,image,price,qty}]

  /* ---------- helpers ---------- */
  const addToCart = (product) =>
    setItems((prev) => {
      const hit = prev.find((i) => i.id === product.id);
      return hit
        ? prev.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...prev, { ...product, qty: 1 }];
    });

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
