import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex gap-6 pt-4">
      <img
        src="/small-logo.png"
        alt="Monks"
        className="w-[93px] sm:w-[140px]"
      />
      <img
        src="Vector (3).png"
        alt=""
        className="flex h-4 w-5 self-center xl:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <ul className="hidden cursor-pointer gap-2 text-xl text-[#eae8e4] xl:flex">
        <li className="relative w-[141px] text-center before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:text-3xl before:text-transparent before:content-['•'] hover:text-white hover:before:text-white">
          Categoria 1
        </li>
        <li className="relative w-[141px] text-center before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:text-3xl before:text-transparent before:content-['•'] hover:text-white hover:before:text-white">
          Categoria 2
        </li>
        <li className="relative w-[141px] text-center before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:text-3xl before:text-transparent before:content-['•'] hover:text-white hover:before:text-white">
          Categoria 3
        </li>
        <li className="relative w-[141px] text-center before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:text-3xl before:text-transparent before:content-['•'] hover:text-white hover:before:text-white">
          Categoria 4
        </li>
      </ul>

      {menuOpen && (
        <div
          className={`absolute top-10 left-0 flex h-[400px] w-full origin-top scale-y-100 flex-col bg-[#DFBBFE] p-4 px-12 pt-6 pb-20 font-semibold text-[#2D2D2D] transition-all duration-300 ease-in-out xl:hidden`}
        >
          <ul className="flex list-disc flex-col gap-4">
            <li className="text-xl">Categoria 1</li>
            <li className="mt-6 text-xl">Categoria 2</li>
            <li className="mt-6 text-xl">Categoria 3</li>
            <li className="mt-6 text-xl">Categoria 4</li>
          </ul>

          <img src="Group (2).png" alt="" className="mx-auto mt-8" />
        </div>
      )}
    </div>
  );
};

export default Header;
