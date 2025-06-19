import React from "react";
import CardDieta from "./CardDieta.jsx";

export default function DietaSemana({ dias, dietas }) {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-4">Dieta</h2>
      {dias.map(dia => (
        <CardDieta key={dia} dia={dia} texto={dietas[dia]} />
      ))}
      <div className="mt-4 text-gray-400 text-xs">
        (Área de dieta será expandida futuramente com edição e mais detalhes)
      </div>
    </div>
  );
}