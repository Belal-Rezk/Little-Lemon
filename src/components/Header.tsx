import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import logo from "/icons&images/Logo.svg";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav((prevState) => !prevState);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 ? setNav(true) : null;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-highlight_1 contain py-3 sm:py-5 lg:flex-row  lg:justify-between flex items-center justify-between md:justify-center md:flex-col md:gap-5 lg:gap-0">
      <Hamburger nav={nav} handleNav={handleNav} />
      <figure className="w-36 sm:w-40 md:w-48 lg:w-60">
        <Link to={"/"}>
          <img src={logo} alt="little lemon logo" className="w-full" />
        </Link>
      </figure>
      <Navbar nav={nav} />
      <Link
        to={"cart"}
        className="md:hidden text-4xl text-primary_1 hover:text-primary_2 duration-500"
      >
        <FaBasketShopping />
      </Link>
    </header>
  );
}
