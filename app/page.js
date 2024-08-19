import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
import { CartProvider } from "./components/hooks/useCart";

function Home() {
  return (
    <CartProvider>
      <main className="grid  md:grid-cols-3 gap-4 lg:grid-cols-4 p-2 md:p-8">
        <h1 className="col-span-full text-2xl">Desserts</h1>
        <Desserts className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3" />
        <Cart />
      </main>
    </CartProvider>
  );
}

export default Home;
