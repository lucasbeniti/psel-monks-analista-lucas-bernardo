interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className="w-full rounded-lg bg-white px-[10px] py-[6px] text-base sm:text-xl"
      placeholder={placeholder}
    />
  );
};

export default Input;
