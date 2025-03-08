import MainPicture from "./MainPicture";
import SecondaryPics from "./SecondaryPics";

const SimpleGallerySection = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 py-16">
      <MainPicture />
      <SecondaryPics />
    </div>
  );
};

export default SimpleGallerySection;
