import Item from "./Item";

const Items = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      <Item text="Perfumaria" />
      <Item text="Corpo e banho" />
      <Item text="Hidratante" />
      <Item text="Desodorante" />
      <Item text="Cabelos" />
      <Item text="Maquiagem" />
      <Item text="Rosto" />
      <Item text="Casa" />
      <Item text="Infantil" />
      <Item text="Shampoo" />
      <Item text="Sabonete" />
      <Item text="Body splash" />
      <Item text="Óleo corporal" />
      <Item text="Corretivo" />
      <Item text="Proteção solar" />
    </div>
  );
};

export default Items;
