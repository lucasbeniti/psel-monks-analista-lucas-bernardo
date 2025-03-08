const Header = () => {
  return (
    <div className="flex gap-6 h-6 w-full pr-7">
      <img src="/small-logo.png" alt="Monks" className="w-[140px] h-6" />

      <ul className="flex gap-2 text-[#eae8e4] text-xl font-thin cursor-pointer ml-6">
        <li className="min-w-[141px]">Categoria 1</li>
        <li className="min-w-[141px]">Categoria 2</li>
        <li className="min-w-[141px]">Categoria 3</li>
        <li className="min-w-[141px]">Categoria 4</li>
      </ul>
    </div>
  );
};

export default Header;
