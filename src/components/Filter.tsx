import { Link, SetURLSearchParams } from "react-router-dom";
import { menu } from "../data/data";

export default function Filter({
  setParams,
}: {
  setParams: SetURLSearchParams;
}) {
  return (
    <div className="contain my-5 md:mt-28">
      <div className="flex items-center justify-center gap-5 bg-highlight_1 py-5 px-1.5 flex-col  ">
        <Link
          to={"."}
          className="hover:scale-110 duration-500 bg-primary_1 text-primary_2 text-2xl md:text-3xl md:px-10 font-bold rounded-full py-1 px-5"
        >
          Clear Filter
        </Link>
        <div className="flex md:grid md:grid-cols-3 md:gap-5 items-center justify-between flex-wrap w-full bg-primary_1 text-primary_2 md:text-highlight_2 p-3 text-2xl rounded-md">
          {menu.map((item) => (
            <button
              key={item.category}
              onClick={() => setParams(item.path)}
              className="md:flex items-center justify-center md:gap-3 md:bg-primary_2 md:rounded-full md:py-0.5 hover:text-secondary_2 hover:bg-secondary_1 duration-500"
            >
              {item.icon}{" "}
              <span className="hidden md:block font-bold">{item.list}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
