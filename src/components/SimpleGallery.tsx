import SimpleGalleryMainPicture from "./SimpleGalleryMainPicture";
import SimpleGallerySecondaryPics from "./SimpleGallerySecondaryPics";

const SimpleGallery = () => {
  return (
    <div className="w-full py-16 px-20 grid grid-cols-2 gap-6">
      <SimpleGalleryMainPicture />
      <SimpleGallerySecondaryPics />
    </div>
  );
};

export default SimpleGallery;
