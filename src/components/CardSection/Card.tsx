import Button from "./Button";

const Card = () => {
  return (
    <div className="w-full h-[276px] rounded-2xl bg-white">
      <div className="p-6">
        <h1 className="text-2xl/[36px] font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-xl/[30px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra.
        </p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button />
      </div>
    </div>
  );
};

export default Card;
