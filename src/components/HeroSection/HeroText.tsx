const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-2 pb-6">
      <div className="space-y-2 pt-4 pb-6 text-[#EAE8E4]">
        <h1 className="w-[180px] text-2xl/[100%] font-bold tracking-[2%] sm:w-full md:text-4xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="w-[180px] text-base/[100%] font-thin sm:w-full md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faubicius sit sceleriqsue quis commondo aenean viverra
        </p>
      </div>
      <img
        src="/Scroll.png"
        alt="Scroll"
        className="mx-auto mt-2 h-[52px] w-10 sm:h-25 sm:w-18"
      />
    </div>
  );
};

export default HeroText;
