import TitleBox from "../TitleBox";
import Buttons from "./Buttons";

const AppSection = () => {
  return (
    <div className="flex h-full w-full items-center justify-between gap-10 rounded-3xl bg-[#3C0C60] p-10">
      <TitleBox
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo"
        className="text-[#EAE8E4]"
      />
      <Buttons />
    </div>
  );
};

export default AppSection;
