"use client";

import React, { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dessert.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (dessert, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.name === dessert.name
          ? { ...item, quantity: item.quantity + amount }
          : item
      );
    });
  };

  // function to remove item from the cart
  const handleRemoveFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleRemoveFromCart,
        handleAddToCart,
        handleUpdateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
