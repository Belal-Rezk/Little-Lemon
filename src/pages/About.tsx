import { FaTableCellsLarge } from "react-icons/fa6";
import Hero from "../components/Hero";
import src from "/icons&images/Mario and Adrian A.jpg";

export default function About() {
  return (
    <main>
      <Hero path={"/reservation"} icon={<FaTableCellsLarge />} src={src} />
    </main>
  );
}
