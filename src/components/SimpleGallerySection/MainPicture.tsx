import TitleBox from "../TitleBox";

const MainPicture = () => {
  return (
    <div className="h-[717px]">
      <TitleBox
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo"
        className="text-[#2D2D2D]"
      />
      <img
        src="/image (1).png"
        alt=""
        className="mt-[34px] h-[525px] w-[591px]"
      />
    </div>
  );
};

export default MainPicture;
