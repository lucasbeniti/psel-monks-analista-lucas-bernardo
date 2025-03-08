import Input from "./Input";

const InputFields = () => {
  return (
    <div className="grid grid-cols-2 gap-[18px] mt-8">
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
      <Input placeholder="Categoria*" />
    </div>
  );
};

export default InputFields;
