import React from "react";
import { useParams } from "react-router-dom";

const Animal: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>
        O animal é:{" "}
        {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Desconhecido"}
      </h1>
    </div>
  );
};

export default Animal;
