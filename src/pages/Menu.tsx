import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/Hero";
import src from "/icons&images/restauranfood.jpg";

export default function Menu() {
  return (
    <main>
      <Hero path="/cart" icon={<FaBasketShopping />} src={src} />
    </main>
  );
}
