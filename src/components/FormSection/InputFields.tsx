import Input from "./Input";

const InputFields = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
    </div>
  );
};

export default InputFields;
