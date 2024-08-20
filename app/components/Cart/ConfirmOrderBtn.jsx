"use client";

export default function ConfirmOrderBtn({ handleConfirmOrder }) {
  return (
    <button
      onClick={handleConfirmOrder}
      className="capitalize text-white bg-red font-bold py-3 hover:text-red hover:bg-white rounded-3xl border-transparent border-2 hover:border-red transition-all duration-300"
    >
      Confirm Order
    </button>
  );
}
