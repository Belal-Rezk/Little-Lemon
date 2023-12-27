import { FaBasketShopping } from "react-icons/fa6";
import Button from "./Button";
import { specials } from "../data/data";
import Cards from "./Cards";

export default function Specials() {
  return (
    <section>
      <article className="contain">
        <div className="flex items-center justify-between my-5 md:mt-24 lg:mt-28">
          <h4 className=" text-highlight_2 font-bold sm:text-3xl xl:text-4xl">
            This {"Week's"} Specials
          </h4>
          <Button
            path={"/cart"}
            className={`bg-primary_2 text-highlight_2 flex items-center justify-center w-fit gap-5 py-0.5 px-1 rounded-full font-bold hover:bg-secondary_1 hover:text-secondary_2 duration-500 sm:px-5 md:px-10 md:py-1 sm:text-xl md:text-2xl xl:text-3xl`}
          >
            Order Online <FaBasketShopping />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 my-5  md:mt-10">
          {specials.map((item, i) => (
            <Cards
              src={item.img}
              name={item.name}
              price={item.price}
              index={i}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
