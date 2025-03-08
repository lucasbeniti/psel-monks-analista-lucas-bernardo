import Header from "./Header";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="flex h-[480px] w-full rounded-b-4xl bg-[#2d2d2d]">
      <div className="w-[860px] pt-6 pl-[80px]">
        <Header />
        <HeroText />
      </div>
      <img
        src="/large-logo.png"
        alt="Monks"
        className="mx-auto h-[480px] w-[506px]"
      />
    </div>
  );
};

export default HeroSection;
