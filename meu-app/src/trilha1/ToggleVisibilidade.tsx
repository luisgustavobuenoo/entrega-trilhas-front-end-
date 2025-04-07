import React, { useState } from "react";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <button onClick={() => setVisivel((prev) => !prev)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      <p style={{ display: visivel ? "block" : "none" }}>{texto}</p>
    </div>
  );
};

export default ToggleVisibilidade;
