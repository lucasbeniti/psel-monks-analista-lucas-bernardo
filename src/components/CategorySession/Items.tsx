import Item from "./Item";

const Items = () => {
  return (
    <div className="w-full h-full flex gap-6 flex-wrap justify-center items-center">
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
