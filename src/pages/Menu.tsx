import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/Hero";
import src from "/icons&images/restauranfood.jpg";
import { useSearchParams } from "react-router-dom";
import { menu } from "../data/data";
import Cards from "../components/Cards";
import Filter from "../components/Filter";

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const typeFilter = params.get("type");
  const displayedItems = typeFilter
    ? menu.filter((item) => item.category.toLowerCase() === typeFilter)
    : menu;
  return (
    <main>
      <Hero path="/cart" icon={<FaBasketShopping />} src={src} />
      <section>
        <Filter setParams={setParams} />
        <article className="contain grid grid-cols-1 gap-5 my-5 lg:grid-cols-3">
          {displayedItems.map((item) =>
            item.items.map((item, i) => (
              <Cards
                index={i}
                src={item.image}
                price={item.price}
                name={item.name}
                imgClass="sm:h-80 lg:h-60"
                divClass="sm:h-80"
                head="lg:text-lg"
              />
            ))
          )}
        </article>
      </section>
    </main>
  );
}
