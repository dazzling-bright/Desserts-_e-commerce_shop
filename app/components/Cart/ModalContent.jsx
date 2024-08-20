import Image from "next/image";
import { useCart } from "../hooks/useCart";

function ModalContent() {
  const { cart } = useCart();

  const adjustImagePath = (path) => path.replace(/^\.\//, "/");

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <section className="mb-4 bg-rose-50 px-2 md:px-4">
      {cart.map(({ image: { thumbnail }, name, price, quantity }, index) => (
        <div
          key={index}
          className="font-bold flex gap-2 items-center border-b-2 py-2 border-gray-200"
        >
          <Image
            src={adjustImagePath(thumbnail)}
            width={60}
            height={60}
            alt={name}
            className="rounded-full border-red"
          />
          <div className="flex-1 ms-2">
            <p className="">{name}</p>
            <p className="font-semibold my-1 text-red">
              <span>{quantity}x </span>
              <span className="text-gray-600 ms-3">@${price.toFixed(2)}</span>
            </p>
          </div>
          <p className="text-rose-900">${(price * quantity).toFixed(2)}</p>
        </div>
      ))}

      <p className="flex justify-between items-center py-2 mb-4">
        <span className="font-bold">Order Total</span>
        <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
      </p>
    </section>
  );
}

export default ModalContent;
