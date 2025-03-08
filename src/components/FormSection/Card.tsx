import Button from "./Button";
import InputFields from "./InputFields";
import Security from "./Security";
import TextBox from "./TextBox";

const Card = () => {
  return (
    <div className="w-full h-[456px] rounded-3xl p-6 bg-[#EAE8E4]">
      <TextBox />
      <InputFields />
      <Security />
      <div className="flex items-center justify-center mt-8">
        <Button />
      </div>
    </div>
  );
};

export default Card;
