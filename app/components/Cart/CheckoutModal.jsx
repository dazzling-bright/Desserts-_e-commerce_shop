import React from "react";
import { useCart } from "../hooks/useCart";
import CheckoutHeader, { CartIsEmptyHeader } from "./CheckoutHeader";
import CloseModalBtn, { StartNewOrderBtn } from "./CloseModalBtn";
import ModalContent from "./ModalContent";
import ModalBackdrop from "./ModalBackdrop";

function CheckoutModal({ open, onClose }) {
  const { cart } = useCart();

  // If modal is not open, return nothing (modal hidden)
  if (!open) return null;

  return (
    <article className="fixed inset-0 z-50 lg:px-24 flex items-center justify-center">
      {/* Backdrop so that the modal makes the page uninteractive*/}
      <ModalBackdrop onClose={onClose} />

      {/* Modal Body*/}
      <dialog
        open
        className="relative shadow-md bg-white rounded-2xl p-6 w-[90%] md:w-[50vw] z-10"
      >
        <aside>
          {cart.length > 0 ? <CheckoutHeader /> : <CartIsEmptyHeader />}

          {cart.length > 0 && <ModalContent />}

          <StartNewOrderBtn onClose={onClose} />
          {/* Close Button */}
          <CloseModalBtn onClose={onClose} />
        </aside>
      </dialog>
    </article>
  );
}

export default CheckoutModal;
