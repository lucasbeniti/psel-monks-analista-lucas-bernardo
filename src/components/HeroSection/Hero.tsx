import Header from "./Header";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="flex w-full h-[480px] bg-[#2d2d2d] rounded-b-4xl">
      <div className="pt-6 pl-[80px] w-[860px]">
        <Header />
        <HeroText />
      </div>
      <img
        src="/large-logo.png"
        alt="Monks"
        className="w-[506px] h-[480px] mx-auto"
      />
    </div>
  );
};

export default Hero;
