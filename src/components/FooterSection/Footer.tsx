import Infos from "./Infos";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="w-full bg-[#2D2D2D] flex justify-center items-center h-[220px] flex-col">
      <Socials />
      <Infos />
    </div>
  );
};

export default Footer;
