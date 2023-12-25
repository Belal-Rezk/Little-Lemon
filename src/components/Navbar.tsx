import { Link, useLocation } from "react-router-dom";
import { navbar } from "../data/data";
import { motion, Variants } from "framer-motion";
import Active from "./Active";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const parentVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};
export default function Navbar({ nav }: { nav: boolean }) {
  const pathname = useLocation();
  return (
    <motion.nav
      className="absolute top-20 sm:top-24 md:relative md:top-auto z-50"
      initial={false}
      animate={nav ? "open" : "closed"}
    >
      <motion.ul
        variants={parentVariants}
        style={{ pointerEvents: nav ? "auto" : "none" }}
        className="md:font-semibold text-primary_1 bg-highlight_1 rounded-full text-3xl md:text-lg md:flex-row md:h-auto md:p-1.5 lg:w-[50vw] md:w-[75vw] md:bg-primary_1 md:text-primary_2 h-72 flex items-center justify-around flex-col px-1"
      >
        {navbar.map((item) => (
          <motion.li
            key={item.name}
            variants={itemVariants}
            className={`relative p-0.5 md:py-0 md:px-3 ${
              item.path === pathname.pathname ? "text-highlight_1" : null
            }`}
          >
            <Link to={item.path}>
              <span className="md:hidden">{item.icon}</span>
              <span className="hidden md:block md:uppercase">{item.name}</span>
            </Link>
            {pathname.pathname === item.path ? <Active /> : null}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
