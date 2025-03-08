import ProductCard from "./Card";

const Cards = () => {
  return (
    <div className="mt-6 mb-8 flex w-full flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Cards;
