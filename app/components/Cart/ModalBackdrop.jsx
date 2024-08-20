"use client";

function ModalBackdrop({ onClose }) {
  return (
    <figure
      className="fixed inset-0 bg-black bg-opacity-80"
      onClick={onClose}
    ></figure>
  );
}

export default ModalBackdrop;
