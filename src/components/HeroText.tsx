const HeroText = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="w-[700px]">
        <h1 className="text-5xl font-bold text-[#eae8e4]">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="mt-2 text-2xl font-normal text-[#eae8e4]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Semper orci
          adipiscing faubicius sit sceleriqsue quis commondo aenean viverra
        </p>
      </div>
      <img src="/Scroll.png" alt="Scroll" className="w-18 h-25 mx-auto mt-2" />
    </div>
  );
};

export default HeroText;
