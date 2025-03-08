import Button from "../Button";

const Card = () => {
  return (
    <div className="rounded-2xl border-2 border-[#DFBBFE] bg-white shadow-md xl:flex-1">
      <div className="p-6">
        <h1 className="mb-2 text-xl font-semibold sm:text-2xl">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-base/[24px] sm:text-xl/[30px]">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center pb-6 sm:pb-8">
        <Button title="Lorem ipsum" />
      </div>
    </div>
  );
};

export default Card;
