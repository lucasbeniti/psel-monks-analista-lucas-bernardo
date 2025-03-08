import Card from "./Card";

const CardsSection = () => {
  return (
    <div className="flex flex-wrap gap-4 py-8 sm:gap-10 sm:pt-8 sm:pb-16">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsSection;
