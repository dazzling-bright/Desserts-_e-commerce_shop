"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../hooks/useCart";
import CheckoutModal from "./CheckoutModal";
import ConfirmOrderBtn from "./ConfirmOrderBtn";

function Cart({ className }) {
  const { cart, handleRemoveFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className={`bg-white shadow-md rounded-lg p-3 flex self-start flex-col gap-4 ${className}`}
    >
      <p className="text-red text-2xl font-bold">
        Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </p>

      {cart.map(({ name, price, quantity }, index) => {
        const itemTotalPrice = (price * quantity).toFixed(2);

        return (
          <section
            key={index}
            className="border-b border-b-gray-400 flex justify-between items-center"
          >
            <div className="py-2 font-bold grid gap-3">
              <p>{name}</p>
              <p className="flex gap-3 ">
                <span className="text-red">{quantity}x</span>
                <span className="font-normal">@${price.toFixed(2)}</span>
                <span>${itemTotalPrice}</span>
              </p>
            </div>
            <Image
              src="/assets/images/icon-remove-item.svg"
              width={25}
              height={25}
              alt="icon to remove item from the cart"
              className="border border-[#CAAFA7] rounded-full p-1 cursor-pointer hover:scale-110 hover:rotate-180 transition-all duration-300"
              onClick={() => handleRemoveFromCart(name)}
            />
          </section>
        );
      })}

      <p className="font-semibold flex justify-between items-center">
        <span>Order Total</span>
        <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
      </p>
      <section className="grid gap-2">
        <p className="flex justify-center items-center rounded-xl py-3 gap-2 px-2 bg-rose-50 mb-3">
          <Image
            src="/assets/images/icon-carbon-neutral.svg"
            width={15}
            height={15}
            alt=""
          />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </p>
        <ConfirmOrderBtn handleConfirmOrder={handleConfirmOrder} />
      </section>

      <CheckoutModal open={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

export default Cart;
