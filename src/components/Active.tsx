import { motion } from "framer-motion";
export default function Active() {
  return (
    <motion.span
      className=" absolute bg-secondary_1 rounded-full inset-0 -z-10"
      layoutId="activeName"
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.5,
      }}
    />
  );
}
