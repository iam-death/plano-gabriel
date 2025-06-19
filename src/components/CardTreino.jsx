// src/components/CardTreino.jsx
import React from "react";

export default function CardTreino({ dia, treino, toggleExercicio }) {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold capitalize mb-2">
        {dia.charAt(0).toUpperCase() + dia.slice(1)}: Treino {treino.tipo} ({treino.descricao})
      </h3>
      <ul>
        {treino.exercicios.map((ex, idx) => (
          <li key={idx} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={treino.feitos.includes(idx)}
              onChange={() => toggleExercicio(dia, idx)}
            />
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}