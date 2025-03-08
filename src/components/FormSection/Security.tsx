import Input from "./Input";

const Security = () => {
  return (
    <div className="flex items-center gap-8 mt-[35px]">
      <h1 className="text-2xl font-semibold">Verificação de segurança</h1>

      <div className="bg-[#DFDCD5] flex items-center w-[178px] h-[42px] px-6 justify-center rounded-lg gap-6">
        <span className="text-xl text-[#7D26C9] font-semibold">427</span>
        <img src="/plus-icon.png" alt="" />
        <span className="text-xl text-[#7D26C9] font-semibold">628</span>
      </div>
      <img src="/Vector (2).png" alt="" />
      <Input placeholder="Resultado*" />
    </div>
  );
};

export default Security;
