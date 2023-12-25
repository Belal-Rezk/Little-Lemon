type props = {
  nav: boolean;
  handleNav: () => void;
};
export default function Hamburger({ nav, handleNav }: props) {
  return (
    <button
      className="flex flex-col items-center justify-center gap-1.5 md:hidden group"
      onClick={handleNav}
    >
      <span
        className={` bg-primary_1 rounded-full h-1 w-10 duration-500 group-hover:bg-primary_2 ${
          nav ? "rotate-45 translate-y-2.5" : null
        } `}
      />
      <span
        className={` bg-primary_1 rounded-full h-1 w-10 duration-500 group-hover:bg-primary_2 ${
          nav ? "opacity-0" : null
        } `}
      />
      <span
        className={` bg-primary_1 rounded-full h-1 w-10 duration-500 group-hover:bg-primary_2 ${
          nav ? "-rotate-45 -translate-y-2.5" : null
        } `}
      />
    </button>
  );
}
