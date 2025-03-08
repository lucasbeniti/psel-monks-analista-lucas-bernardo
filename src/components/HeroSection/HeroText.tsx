const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="mb-2 flex flex-col gap-2 pt-15">
        <h1 className="text-2xl font-semibold tracking-[2px] text-[#eae8e4] sm:text-5xl/[60px]">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-base font-thin tracking-[2%] text-[#EAE8E4] sm:text-2xl/[100%]">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faubicius sit sceleriqsue quis commondo aenean viverra
        </p>
      </div>
      <img src="/Scroll.png" alt="Scroll" className="mx-auto mt-2" />
    </div>
  );
};

export default HeroText;
