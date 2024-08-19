import { MdOutlineAddShoppingCart } from "react-icons/md";

function AddToCart({ handleAddToCart, dessert }) {
  return (
    <button
      onClick={() => handleAddToCart(dessert)}
      className="flex w-fit mx-auto -translate-y-[25px] h-[50px] bg-white gap-2 rounded-3xl border border-rose-100 text-red shadow-md px-6 py-3 place-items-center hover:bg-red hover:text-white hover:border-transparent transition-all duration-300"
    >
      <MdOutlineAddShoppingCart className="text-xl" />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCart;
