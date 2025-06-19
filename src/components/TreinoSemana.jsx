// src/components/TreinoSemana.jsx
import React from "react";
import CardTreino from "./CardTreino";

export default function TreinoSemana({ dias, treinos, toggleExercicio }) {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-4">Treinos</h2>
      {dias.map((dia) => (
        <CardTreino
          key={dia}
          dia={dia}
          treino={treinos[dia]}
          toggleExercicio={toggleExercicio}
        />
      ))}
    </div>
  );
}