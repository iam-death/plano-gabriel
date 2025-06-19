import React from "react";

export default function CardTreino({ dia, treino, toggleExercicio }) {
  if (!treino) return null;

  const { tipo, descricao, exercicios, feitos } = treino;

  return (
    <div className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold capitalize mb-2">
        {dia.charAt(0).toUpperCase() + dia.slice(1)}: Treino {tipo}
      </h3>
      <p className="text-sm text-gray-600 mb-2">{descricao}</p>
      <ul>
        {exercicios.map((ex, idx) => (
          <li key={idx} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={feitos.includes(idx)}
              onChange={() => toggleExercicio(dia, idx)}
            />
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}