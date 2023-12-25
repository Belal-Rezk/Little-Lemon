import Hero from "../components/Hero";
import { MdRestaurantMenu } from "react-icons/md";
import src from "/icons&images/Mario and Adrian b.jpg";

export default function Home() {
  return (
    <main>
      <Hero path={"/menu"} icon={<MdRestaurantMenu />} src={src} />
    </main>
  );
}
