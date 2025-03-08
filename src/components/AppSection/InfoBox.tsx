import Buttons from "./Buttons";
import TitleBox from "./TitleBox";

const InfoBox = () => {
  return (
    <div className="w-full h-full rounded-3xl p-10 bg-[#3C0C60] flex gap-10 justify-between items-center">
      <TitleBox />
      <Buttons />
    </div>
  );
};

export default InfoBox;
