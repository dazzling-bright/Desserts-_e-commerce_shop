"use client";

import Cards from "../data/data.json";
import Image from "next/image";
import { useCart } from "./hooks/useCart";
import AlterCartSize from "./AlterCartBtn";
import AddToCart from "./AddToCart";

export default function Desserts({ className }) {
  const { cart, handleAddToCart, handleUpdateQuantity } = useCart(); // Destructure context values

  return (
    <section className={`${className}`}>
      {Cards.map((dessert, index) => {
        const {
          name,
          image: { mobile, tablet, desktop, thumbnail },
          category,
          price,
        } = dessert;

        const formattedPrice = parseFloat(price).toFixed(2);
        const adjustImagePath = (path) => path.replace(/^\.\//, "/");

        // Find the corresponding item in the cart
        const cartItem = cart.find((item) => item.name === name);

        return (
          <article
            key={index}
            className="shadow-md cursor-pointer transition-all duration-300 font-bold text-lg p-2 rounded-xl"
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

              {cartItem && cartItem.quantity > 0 ? (
                <AlterCartSize
                  cartItem={cartItem}
                  handleUpdateQuantity={handleUpdateQuantity}
                  dessert={dessert}
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
