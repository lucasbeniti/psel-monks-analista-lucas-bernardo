import Infos from "./Infos";
import Socials from "./Socials";

const FooterSection = () => {
  return (
    <div className="flex h-[220px] w-full flex-col items-center justify-center">
      <Socials />
      <Infos />
    </div>
  );
};

export default FooterSection;
