import { BsFillPersonFill } from "react-icons/bs";
import Hero from "../components/Hero";
import src from "/icons&images/restaurant.jpg";

export default function Reservation() {
  return (
    <main>
      <Hero path={"/about"} icon={<BsFillPersonFill />} src={src} />
    </main>
  );
}
