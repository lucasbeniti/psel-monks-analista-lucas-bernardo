import Header from "./Header";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="flex h-[360px] w-full bg-[#2d2d2d] sm:h-[480px] sm:rounded-b-4xl">
      <div className="w-[60%] pl-[20px] sm:py-6 sm:pl-[80px]">
        <Header />
        <HeroText />
      </div>
      <img
        src="/large-logo.png"
        alt="Monks"
        className="ml-auto h-full w-auto overflow-hidden"
      />
    </div>
  );
};

export default HeroSection;
