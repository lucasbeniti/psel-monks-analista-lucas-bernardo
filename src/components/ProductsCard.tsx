import ProductCard from "./ProductCard";

const ProductsCards = () => {
  return (
    <div className="flex items-center gap-6 w-full mt-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsCards;
