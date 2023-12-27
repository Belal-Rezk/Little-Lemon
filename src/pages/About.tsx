import { FaTableCellsLarge } from "react-icons/fa6";
import Hero from "../components/Hero";
import src from "/icons&images/Mario and Adrian A.jpg";
import { about } from "../data/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <Hero path={"/reservation"} icon={<FaTableCellsLarge />} src={src} />
      <article className="grid grid-cols-1 gap-5 xl:gap-10 my-5 md:mt-28 contain lg:grid-cols-3">
        {about.map((item, i) => (
          <div
            key={item.name}
            className=" flex items-center justify-center flex-col sm:flex-row lg:flex-col"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              loading="lazy"
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: i * 0.1 + 1,
                  stiffness: 200,
                  damping: 10,
                  duration: 0.5,
                  type: "spring",
                },
              }}
              viewport={{ once: true }}
              src={item.image}
              alt={item.name}
              className="rounded-tr-lg lg:w-full rounded-tl-lg lg:rounded-bl-none lg:rounded-tr-lg lg:h-48 sm:rounded-tr-none sm:rounded-bl-lg w-full sm:w-1/2 sm:h-full"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: i * 0.1 + 1,
                  stiffness: 200,
                  damping: 10,
                  duration: 0.5,
                  type: "spring",
                },
              }}
              viewport={{ once: true }}
              className="bg-primary_1 sm:w-1/2 sm:h-full lg:w-full lg:rounded-bl-lg lg:rounded-tr-none sm:rounded-bl-none sm:rounded-tr-lg rounded-br-lg rounded-bl-lg flex items-center justify-center flex-col gap-5 py-5 px-1.5 md:p-3"
            >
              <h5 className="text-center text-3xl font-bold text-secondary_1">
                {item.name}
              </h5>
              <p className="text-center text-secondary_2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                corrupti dolore ducimus illum, incidunt magnam doloribus nisi
                aperiam numquam, sit vero rem distinctio asperiores fuga,
                veritatis nihil voluptatibus. Explicabo, ullam!
              </p>
            </motion.div>
          </div>
        ))}
      </article>
    </main>
  );
}
