interface ItemProps {
  text: string;
}

const Item = ({ text }: ItemProps) => {
  return (
    <div className="h-fit w-fit">
      <p className="rounded-[32px] border border-[#7D26C9] bg-[#DFDCD5] px-6 py-2 text-center text-base font-semibold text-[#7D26C9] sm:px-10 sm:text-xl">
        {text}
      </p>
    </div>
  );
};

export default Item;
