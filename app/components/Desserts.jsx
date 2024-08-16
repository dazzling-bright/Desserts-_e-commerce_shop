import Cards from "../data/data.json";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Desserts({ className }) {
  return (
    <section className={`${className}`}>
      {Cards.map((dessert, index) => {
        // destructure each dessert object
        const {
          name,
          image: { mobile, tablet, desktop, thumbnail },
          category,
          price,
        } = dessert;
        // format the price to 2 decimal places
        const formattedPrice = parseFloat(price).toFixed(2);

        // Create a function to remove the leading '.' from image paths
        const adjustImagePath = (path) => path.replace(/^\.\//, "/");

        return (
          <article
            key={index}
            className="shadow-md font-bold text-lg p-2 rounded-xl"
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

              <button className="flex w-fit mx-auto -translate-y-[25px] h-[50px] bg-white gap-2 rounded-3xl border border-rose-100 text-red shadow-md px-6 py-3 place-items-center hover:bg-red hover:text-white hover:border-transparent transition-all duration-300">
                <MdOutlineAddShoppingCart className="text-xl" />
                <span>Add to Cart</span>
              </button>
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
