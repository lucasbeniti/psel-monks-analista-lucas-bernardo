import MainPicture from "./MainPicture";
import SecondaryPics from "./SecondaryPics";

const SimpleGallerySection = () => {
  return (
    <div className="gap-6 pb-8 sm:py-16 xl:flex">
      <div className="mb-4 xl:mb-0">
        <MainPicture />
      </div>
      <SecondaryPics />
    </div>
  );
};

export default SimpleGallerySection;
