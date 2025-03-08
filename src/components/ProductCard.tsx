const ProductCard = () => {
  return (
    <div className="rounded-lg bg-white w-fit pb-4 pt-[6px] px-[6px]">
      <img src="/image (1).png" alt="" className="w-full" />
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-2xl/[30px] font-semibold">Lorem ipsum dolor</h1>
        <p className="text-xl font-normal ">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
