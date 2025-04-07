import { useState } from "react";

type Props = {
  nomeInicial: string;
};

function Saudacao({ nomeInicial }: Props) {
  const [nome, setNome] = useState<string>(nomeInicial);

  return (
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        style={{ fontSize: "16px", padding: "5px" }}
      />
    </div>
  );
}

export default Saudacao;
