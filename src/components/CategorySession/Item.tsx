interface ItemProps {
  text: string;
}

const Item = ({ text }: ItemProps) => {
  return (
    <div className="w-[223px] h-[46px]">
      <p className="rounded-[32px] border border-[#7D26C9] py-2 px-10 bg-[#DFDCD5] text-center text-[#7D26C9] text-xl/[30px] font-semibold">
        {text}
      </p>
    </div>
  );
};

export default Item;
