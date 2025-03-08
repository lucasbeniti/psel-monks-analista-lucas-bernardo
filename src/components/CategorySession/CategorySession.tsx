import Items from "./Items";
import Title from "./Title";

const CategorySession = () => {
  return (
    <div className="py-8">
      <Title />
      <div className="mt-6 sm:mt-10">
        <Items />
      </div>
    </div>
  );
};

export default CategorySession;
