import { ReactNode } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Hero({
  path,
  icon,
  src,
}: {
  path: string;
  icon: ReactNode;
  src: string;
}) {
  const pathText =
    path === "/" ? "Home" : path[1].toUpperCase() + path.slice(2);
  return (
    <section className="bg-primary_1 relative">
      <article className="contain py-3 sm:py-5">
        <h1 className=" text-primary_2 font-black text-5xl">Little Lemon</h1>
        <h2 className=" text-secondary_2 font-extrabold text-3xl sm:text-4xl mt-0.5">
          Egypt , Beni-Suef
        </h2>
        <h3 className="md:pr-3 text-highlight_1 font-bold text-sm my-3 md:my-5 sm:text-base md:text-lg lg:text-xl xl:text-2xl md:w-[60%] lg:w-8/12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nisi esse, iure excepturi aspernatur dolores velit officiis tenetur
          dolorem, odit praesentium quod laudantium illum rem accusantium
          quisquam nihil inventore eligendi.
        </h3>
        <Button
          path={path}
          className={`bg-primary_2 text-highlight_2 flex items-center justify-center w-fit gap-5 py-0.5 px-1 rounded-full font-bold hover:bg-secondary_1 hover:text-secondary_2 duration-500 sm:px-5 md:px-10 md:py-1 sm:text-xl md:text-2xl xl:text-3xl`}
        >
          {pathText} {icon}
        </Button>
      </article>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        loading="lazy"
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            stiffness: 200,
            damping: 10,
            duration: 0.5,
            type: "spring",
          },
        }}
        src={src}
        alt={src}
        className="hidden md:block absolute top-5 w-72 h-96 rounded-lg right-10 lg:right-16 xl:right-20"
      />
    </section>
  );
}
