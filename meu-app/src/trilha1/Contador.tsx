import { useState } from "react";

type Props = {
  inicial: number;
};

function Contador({ inicial }: Props) {
  const [contador, setContador] = useState<number>(inicial);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => setContador(contador - 1);

  return (
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      <h2>Contador</h2>
      <p>Valor: {contador}</p>
      <button onClick={decrementar} style={{ margin: "5px" }}>
        -
      </button>
      <button onClick={incrementar} style={{ margin: "5px" }}>
        +
      </button>
    </div>
  );
}

export default Contador;
