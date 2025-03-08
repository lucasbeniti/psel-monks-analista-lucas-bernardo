import Button from "../Button";

const Card = () => {
  return (
    <div className="h-[276px] w-full rounded-2xl bg-white">
      <div className="p-6">
        <h1 className="mb-2 text-2xl/[36px] font-semibold">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-xl/[30px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Button title="Lorem ipsum" className="font-semibold" />
      </div>
    </div>
  );
};

export default Card;
