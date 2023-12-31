import { FaBasketShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import CartButton from "./CartButton";

export default function Cards({
  name,
  src,
  price,
  index,
  imgClass,
  divClass,
  head,
}: {
  name: string;
  src: string;
  price: number;
  index: number;
  className?: string;
  imgClass?: string;
  divClass?: string;
  head?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      className="flex items-start justify-center flex-col sm:flex-row lg:flex-col"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: index * 0.1 + 1,
          stiffness: 200,
          damping: 10,
          duration: 0.5,
          type: "spring",
        },
      }}
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        className={cn(
          "w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-none sm:rounded-bl-lg sm:w-1/2 sm:h-full xl:h-64 lg:w-full lg:h-full lg:rounded-tr-lg lg:rounded-bl-none",
          imgClass
        )}
      />
      <div
        className={cn(
          "sm:flex items-center justify-center gap-3 flex-col bg-primary_1 rounded-br-lg rounded-bl-lg sm:rounded-tr-lg sm:rounded-bl-none p-3 sm:p-5 sm:w-1/2 sm:h-full lg:w-auto lg:rounded-tr-none lg:rounded-bl-lg",
          divClass
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between sm:w-full text-xl md:text-2xl font-semibold",
            head
          )}
        >
          <h5 className=" text-secondary_1">{name}</h5>
          <span className=" text-highlight_1">{`$${price}`}</span>
        </div>
        <p className="my-3 text-sm font-semibold text-secondary_2 sm:text-center sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus
          iste voluptatem nostrum aut illo quibusdam temporibus recusandae,
          inventore ratione ad odit non! Architecto provident vel possimus, quo
          perspiciatis quae?
        </p>
        <CartButton
          className={`bg-primary_2 text-highlight_2 flex items-center justify-center w-fit gap-5 py-0.5 px-1 rounded-full font-bold hover:bg-secondary_1 hover:text-secondary_2 duration-500 sm:px-5 md:px-10 md:py-1 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl`}
        >
          Add to Cart <FaBasketShopping />
        </CartButton>
      </div>
    </motion.div>
  );
}
