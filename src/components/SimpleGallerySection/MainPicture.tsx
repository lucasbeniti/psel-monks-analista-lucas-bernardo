import TitleBox from "../TitleBox";

const MainPicture = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <TitleBox
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo"
        className="text-[#2D2D2D]"
      />
      <img src="/image (3).png" className="mt-6 h-full w-full sm:mt-8" />
    </div>
  );
};

export default MainPicture;
