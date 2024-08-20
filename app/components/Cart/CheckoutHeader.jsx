import Image from "next/image";

function CheckoutHeader() {
  return (
    <header className="text-3xl px-2 md:px-4 font-bold mb-4 text-rose-900">
      <Image
        src="/assets/images/icon-order-confirmed.svg"
        width={50}
        height={50}
        alt=""
        className="rounded-full border-red"
      />

      <h2 className="my-2">Order Confirmed</h2>
      <p className="text-base font-normal">We hope you enjoy your food!</p>
    </header>
  );
}

export function CartIsEmptyHeader() {
  return (
    <p className="text-base my-4 font-bold text-red">
      No order can be placed as your cart is currently empty. Close the modal
      and select some desserts.
    </p>
  );
}

export default CheckoutHeader;
