"use client";

import { useState } from "react";
import Cards from "../data/data.json";
import Image from "next/image";

import AlterCartSize from "./AlterCartBtn";
import AddToCart from "./AddToCart";

export default function Desserts({ className }) {
  const [cart, setCart] = useState([]); // State to hold cart items

  const handleAddToCart = (dessert) => {
    setCart((prevCart) => {
      // Check if the dessert is already in the cart
      const existingItem = prevCart.find((item) => item.name === dessert.name);
      if (existingItem) {
        // If already in cart, update its quantity
        return prevCart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not in cart, add it with quantity 1
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

  return (
    <section className={`${className}`}>
      {Cards.map((dessert, index) => {
        // Destructure each dessert object
        const {
          name,
          image: { mobile, tablet, desktop, thumbnail },
          category,
          price,
        } = dessert;

        // Format the price to 2 decimal places
        const formattedPrice = parseFloat(price).toFixed(2);

        // Create a function to remove the leading '.' from image paths
        const adjustImagePath = (path) => path.replace(/^\.\//, "/");

        // Check if the dessert is already in the cart
        const cartItem = cart.find((item) => item.name === name);

        return (
          <article
            key={index}
            className="shadow-md cursor-pointer hover:scale-105 transition-all duration-300 font-bold text-lg p-2 rounded-xl"
            tabIndex={0}
          >
            <figure className="rounded-xl">
              <Image
                src={adjustImagePath(mobile)}
                layout="responsive"
                width={300}
                height={200}
                alt={name}
                quality={100}
              />

              {cartItem ? (
                <AlterCartSize
                  cartItem={cartItem}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
              ) : (
                <AddToCart
                  handleAddToCart={handleAddToCart}
                  dessert={dessert}
                />
              )}
            </figure>
            <div className="grid gap-1">
              <p className="text-rose-400">{category}</p>
              <p className="text-rose-900">{name}</p>
              <p className="text-red">${formattedPrice}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
