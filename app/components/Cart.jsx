import Image from "next/image";
import React from "react";

function Cart({ cartSize, className }) {
  const cartObject = [
    {
      name: "Classic Tiramisu",
      price: "5.50",
      totalPrice: "5.50",
      icon: "assets/images/icon-remove-item.svg",
      size: 1,
    },
    {
      name: "Classic Tiramisu",
      price: "5.50",
      totalPrice: "5.50",
      icon: "assets/images/icon-remove-item.svg",
      size: 4,
    },
    {
      name: "Classic Tiramisu",
      price: "5.50",
      totalPrice: "5.50",
      icon: "assets/images/icon-remove-item.svg",
      size: 2,
    },
  ];

  return (
    <section
      className={`bg-white shadow-md rounded-lg p-3 flex self-start flex-col gap-4 ${className}`}
    >
      <p className="text-red text-2xl font-bold">
        Your Cart {cartSize || "(7)"}
      </p>

      <React.Fragment>
        {cartObject.map(({ name, price, totalPrice, size, icon }, index) => {
          return (
            <div
              key={index}
              className="border-b border-b-gray-400 flex justify-between items-center"
            >
              <div className="py-2 font-bold grid gap-3">
                <p>{name}</p>
                <p className="flex gap-3 ">
                  <span className="text-red ">{size}x</span>
                  <span className="font-normal">@${price}</span>
                  <span>${totalPrice}</span>
                </p>
              </div>
              {/** remove item from cart icon */}
              <Image
                src={icon}
                width={25}
                height={25}
                alt="icon to remove item in the cart"
                className="border border-[#CAAFA7] rounded-full p-1 cursor-pointer hover:scale-110 hover:rotate-180 transition-all duration-300"
              />
            </div>
          );
        })}
      </React.Fragment>

      <p className="font-semibold flex justify-between items-center">
        <span>Order Total</span>{" "}
        <span className="font-bold text-2xl">$46.50</span>
      </p>
      <div className="grid gap-2">
        <button className="flex justify-center items-center rounded-xl py-3 gap-2 px-2 bg-rose-50 mb-3">
          <Image
            src={"/assets/images/icon-carbon-neutral.svg"}
            width={15}
            height={15}
            alt=""
          />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </button>

        {/** Add To Cart button */}
        <button className="capitalize text-white bg-red font-bold py-3 hover:text-red hover:bg-white rounded-3xl border-transparent border-2 hover:border-red transition-all duration-300">
          Confirm order
        </button>
      </div>
    </section>
  );
}

export default Cart;
