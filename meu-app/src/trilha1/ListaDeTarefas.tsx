import React, { useState } from "react";

// Definição da interface para as props
interface ListaTarefasProps {
  tarefasIniciais: string[];
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
  // Estados tipados corretamente
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNovaTarefa(e.target.value)
        }
        placeholder="Digite uma nova tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
