interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder = "Categoria*" }: InputProps) => {
  return (
    <input
      type="text"
      className="bg-white py-[6px] px-[10px] rounded-lg text-xl"
      placeholder={placeholder}
    />
  );
};

export default Input;
