import React from "react";
import { Link } from "react-router-dom";

const quartos = [
  { id: 1, nome: "Suíte Luxo" },
  { id: 2, nome: "Quarto Executivo" },
  { id: 3, nome: "Standard Simples" },
];

const Rooms: React.FC = () => {
  return (
    <div>
      <h1>🛏️ Lista de Quartos Disponíveis</h1>
      <ul>
        {quartos.map((quarto) => (
          <li key={quarto.id}>
            <Link to={`/rooms/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
