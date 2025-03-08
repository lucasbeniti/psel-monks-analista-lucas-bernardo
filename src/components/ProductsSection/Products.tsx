import ProductsCards from "./Cards";
import ProductsTitleBox from "./TitleBox";

const Products = () => {
  return (
    <div className="w-full pb-8 pt-16">
      <ProductsTitleBox />
      <ProductsCards />
    </div>
  );
};

export default Products;
