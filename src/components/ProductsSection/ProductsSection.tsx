import TitleBox from "../TitleBox";
import ProductsCards from "./Cards";

const ProductsSection = () => {
  return (
    <div className="w-full pt-16 pb-8">
      <TitleBox
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo"
        className="text-[#2D2D2D]"
      />
      <ProductsCards />
    </div>
  );
};

export default ProductsSection;
