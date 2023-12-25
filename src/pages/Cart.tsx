import { BiSolidHome } from "react-icons/bi";
import src from "/icons&images/restaurant chef B.jpg";
import Hero from "../components/Hero";

export default function Cart() {
  return (
    <main>
      <Hero path="/" icon={<BiSolidHome />} src={src} />
    </main>
  );
}
