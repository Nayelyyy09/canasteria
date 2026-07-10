import React, { createContext, useContext, useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";

const CartContext = createContext();

let nextCartId = 1;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  const addItem = useCallback((product, qty = 1, note = "") => {
    setCart((prev) => [
      ...prev,
      { ...product, qty, note, cartId: nextCartId++ },
    ]);
    toast({ title: "Añadido al carrito", description: product.name });
  }, [toast]);

  const updateQty = useCallback((cartId, newQty) => {
    if (newQty < 1) {
      setCart((prev) => prev.filter((i) => i.cartId !== cartId));
    } else {
      setCart((prev) =>
        prev.map((i) => (i.cartId === cartId ? { ...i, qty: newQty } : i))
      );
    }
  }, []);

  const removeItem = useCallback((cartId) => {
    setCart((prev) => prev.filter((i) => i.cartId !== cartId));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, updateQty, removeItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
