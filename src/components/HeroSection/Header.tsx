const Header = () => {
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
      />

      <ol className="hidden cursor-pointer gap-2 text-xl text-[#eae8e4] xl:flex">
        <li className="w-[141px] text-center hover:text-white">Categoria 1</li>
        <li className="w-[141px] text-center hover:text-white">Categoria 2</li>
        <li className="w-[141px] text-center hover:text-white">Categoria 3</li>
        <li className="w-[141px] text-center hover:text-white">Categoria 4</li>
      </ol>
    </div>
  );
};

export default Header;
