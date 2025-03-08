const Header = () => {
  return (
    <div className="flex w-full gap-6 pr-7">
      <img src="/small-logo.png" alt="Monks" className="w-[140px]" />

      <ul className="hidden cursor-pointer gap-2 text-xl text-[#eae8e4] sm:flex">
        <li className="w-[141px] text-center">Categoria 1</li>
        <li className="w-[141px] text-center">Categoria 2</li>
        <li className="w-[141px] text-center">Categoria 3</li>
        <li className="w-[141px] text-center">Categoria 4</li>
      </ul>
    </div>
  );
};

export default Header;
