const Card = () => {
  return (
    <div className="w-full rounded-lg bg-white px-[6px] pt-[6px] pb-4">
      <img src="/image (1).png" alt="" className="w-full" />
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-2xl/[30px] font-semibold">Lorem ipsum dolor</h1>
        <p className="text-xl font-normal">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default Card;
