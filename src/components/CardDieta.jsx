import React from "react";

export default function CardDieta({ dia, texto }) {
  return (
    <div className="mb-3 bg-white p-3 rounded shadow">
      <h3 className="capitalize font-semibold mb-1">
        {dia.charAt(0).toUpperCase() + dia.slice(1)}
      </h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">{texto}</p>
    </div>
  );
}