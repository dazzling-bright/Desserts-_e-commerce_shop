"use client";

import Image from "next/image";
import { useCart } from "../hooks/useCart";

function CloseModalBtn({ onClose }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
    >
      <span className="sr-only">Close modal</span>
      <Image
        src="/assets/images/icon-remove-item.svg"
        width={25}
        height={25}
        alt="Close Modal"
        className="rounded-full border-[#CAAFA7] border p-1"
      />
    </button>
  );
}

// Start New Order Button

export function StartNewOrderBtn({ onClose }) {
  const { setCart } = useCart();

  const handleStartNewOrder = () => {
    setCart([]); // Clear the cart
    onClose(); // Close the modal
  };

  return (
    <button
      onClick={handleStartNewOrder}
      className="capitalize text-white bg-red w-full font-bold py-3 hover:text-red hover:bg-white rounded-3xl border-transparent border-2 hover:border-red transition-all duration-300"
    >
      Start new order
    </button>
  );
}

export default CloseModalBtn;
