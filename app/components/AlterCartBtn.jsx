import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AlterCartSize({ handleUpdateQuantity, cartItem }) {
  return (
    <div className="flex items-center justify-center mx-auto rounded-3xl -translate-y-[25px] h-[50px] w-fit gap-4 p-2  bg-red">
      <button
        onClick={() => handleUpdateQuantity(dessert, -1)}
        className="flex items-center justify-center w-6 h-6  text-white rounded-full border over:scale-105   shadow-md   hover:border-transparent transition-all duration-300"
      >
        <AiOutlineMinus />
      </button>
      <input
        type="number"
        value={cartItem.quantity}
        readOnly
        className="w-12 text-center bg-white rounded border border-rose-100 shadow-md"
      />
      <button
        onClick={() => handleUpdateQuantity(dessert, 1)}
        className="flex items-center justify-center w-6 h-6 text-white rounded-full border border-white  hover:scale-105 transition-all duration-300"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default AlterCartSize;
