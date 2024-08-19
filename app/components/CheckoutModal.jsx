"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "./hooks/useCart";

function CheckoutModal({ open, onClose }) {
  const { cart } = useCart();

  const adjustImagePath = (path) => path.replace(/^\.\//, "/");

  console.log(cart);
  useCart;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!open) return null;

  return (
    <dialog
      open
      className="shadow-md inset-0 rounded-2xl p-2 md:p-6 h-50vh w-[90%] md:w-[50vw] "
    >
      <aside className="">
        <header className="text-3xl px-2 md:px-4 font-bold mb-4 text-rose-900">
          <Image
            src="/assets/images/icon-order-confirmed.svg"
            width={50}
            height={50}
            alt=""
            className="rounded-full border-red"
          />
          <h2 className="my-2">Order Confirmed</h2>
          <p className="text-sm font-normal">We hope you enjoy your food!</p>
        </header>
        <section className="mb-4 bg-rose-50 px-2 md:px-4">
          {cart.map(
            ({ image: { thumbnail }, name, price, quantity }, index) => (
              <div
                key={index}
                className="font-bold flex gap-2 items-center border-b-2 py-2 border-gray-200"
              >
                <Image
                  src={adjustImagePath(thumbnail)}
                  width={60}
                  height={60}
                  alt=""
                  className="rounded-full border-red"
                />
                <div className="flex-1 ms-2">
                  <p className="">{name}</p>
                  <p className="font-semibold my-1 text-red">
                    <span>{quantity}x </span>
                    <span className="text-gray-600 ms-3">
                      @${price.toFixed(2)}
                    </span>
                  </p>
                </div>
                <p className="text-rose-900">
                  ${(price * quantity).toFixed(2)}
                </p>
              </div>
            )
          )}

          <p className="flex justify-between items-center py-2 mb-4">
            <span className="font-bold">Order Total</span>
            <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
          </p>
        </section>

        <button
          onClick={onClose}
          className="capitalize text-white bg-red w-full font-bold py-3 hover:text-red hover:bg-white rounded-3xl border-transparent border-2 hover:border-red transition-all duration-300"
        >
          Start new order
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <span className="sr-only">Close modal</span>
          <Image
            src="/assets/images/icon-remove-item.svg"
            width={15}
            height={15}
            alt=""
            className="rounded-full border-red"
          />
        </button>
      </aside>
    </dialog>
  );
}

export default CheckoutModal;
