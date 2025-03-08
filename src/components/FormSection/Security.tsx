import Input from "./Input";

const Security = () => {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-8">
      <h1 className="text-xl font-semibold sm:text-2xl">
        Verificação de segurança
      </h1>

      <div className="flex gap-4">
        <div className="flex items-center justify-center gap-2 rounded-lg bg-[#DFDCD5] px-4 sm:gap-6 sm:px-6">
          <span className="text-base font-semibold text-[#7D26C9] sm:text-xl">
            427
          </span>
          <img src="/plus-icon.png" alt="" />
          <span className="text-base font-semibold text-[#7D26C9] sm:text-xl">
            628
          </span>
        </div>
        <img
          src="/Vector (2).png"
          alt=""
          className="h-2 w-[14px] self-center"
        />
        <Input placeholder="Resultado*" />
      </div>
    </div>
  );
};

export default Security;
