import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AlterCartSize({ handleUpdateQuantity, cartItem, dessert }) {
  return (
    <div className="flex items-center justify-center mx-auto rounded-3xl -translate-y-[25px] h-[50px] w-3/4 gap-4 p-2 bg-red">
      <button
        onClick={() => handleUpdateQuantity(dessert, -1)}
        className="flex items-center justify-center w-6 h-6 text-white hover:text-rose-900 hover:border-rose-900 rounded-full border shadow-md transition-all duration-300"
      >
        <AiOutlineMinus />
      </button>
      <input
        type="number"
        value={cartItem.quantity}
        onChange={(e) => handleUpdateQuantity(dessert, e)}
        className="bg-white w-1/2 rounded text-center no-arrows p-1 shadow-md"
      />
      <button
        onClick={() => handleUpdateQuantity(dessert, 1)}
        className="flex items-center justify-center w-6 h-6 text-white rounded-full border border-white hover:text-rose-900 hover:border-rose-900 transition-all duration-300"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default AlterCartSize;
