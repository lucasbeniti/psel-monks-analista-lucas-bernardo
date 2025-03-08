import MainPicture from "./MainPicture";
import SecondaryPics from "./SecondaryPics";

const SimpleGallery = () => {
  return (
    <div className="w-full py-16 grid grid-cols-2 gap-6">
      <MainPicture />
      <SecondaryPics />
    </div>
  );
};

export default SimpleGallery;
