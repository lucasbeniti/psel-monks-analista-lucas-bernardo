import Button from "../Button";
import InputFields from "./InputFields";
import Security from "./Security";
import TextBox from "./TextBox";

const Card = () => {
  return (
    <div className="h-[456px] w-full rounded-3xl bg-[#EAE8E4] p-6">
      <TextBox />
      <InputFields />
      <Security />
      <div className="mt-8 flex items-center justify-center">
        <Button title="Lorem ipsum" />
      </div>
    </div>
  );
};

export default Card;
