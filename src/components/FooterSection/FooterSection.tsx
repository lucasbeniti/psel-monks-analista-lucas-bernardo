import Infos from "./Infos";
import Socials from "./Socials";

const FooterSection = () => {
  return (
    <div className="mt-6 flex h-[220px] w-full flex-col items-center justify-center sm:mt-10">
      <Socials />
      <Infos />
    </div>
  );
};

export default FooterSection;
