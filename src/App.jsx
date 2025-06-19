import React, { useEffect, useState } from "react";
import "./index.css";

const diasDaSemana = [
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "domingo"
];

const treinosIniciais = diasDaSemana.reduce((acc, dia) => {
  acc[dia] = { feito: false, descricao: dia === "quarta" || dia === "sabado" || dia === "domingo" ? "descanso" : dia === "quinta" ? "C" : dia === "terca" ? "B" : "A" };
  return acc;
}, {});

const dietasIniciais = diasDaSemana.reduce((acc, dia) => {
  acc[dia] = `Dieta do dia ${dia}`;
  return acc;
}, {});

const App = () => {
  const [treinos, setTreinos] = useState({});
  const [dietas, setDietas] = useState({});

  useEffect(() => {
    const t = localStorage.getItem("treinosGabriel");
    const d = localStorage.getItem("dietasGabriel");
    setTreinos(t ? JSON.parse(t) : treinosIniciais);
    setDietas(d ? JSON.parse(d) : dietasIniciais);
  }, []);

  useEffect(() => {
    localStorage.setItem("treinosGabriel", JSON.stringify(treinos));
    localStorage.setItem("dietasGabriel", JSON.stringify(dietas));
  }, [treinos, dietas]);

  const toggleCheck = (dia) => {
    setTreinos((prev) => ({
      ...prev,
      [dia]: { ...prev[dia], feito: !prev[dia].feito }
    }));
  };

  const updateDescricao = (dia, valor) => {
    setTreinos((prev) => ({
      ...prev,
      [dia]: { ...prev[dia], descricao: valor }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Treinos</h2>
        {diasDaSemana.map((dia) => (
          <div key={dia} className="flex items-center gap-2 mb-3 bg-white p-3 rounded shadow">
            <input
              type="checkbox"
              checked={treinos[dia]?.feito || false}
              onChange={() => toggleCheck(dia)}
            />
            <span className="capitalize w-20 font-semibold">{dia}</span>
            <input
              type="text"
              value={treinos[dia]?.descricao || ""}
              onChange={(e) => updateDescricao(dia, e.target.value)}
              className="flex-1 border rounded p-1"
            />
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Dieta</h2>
        {diasDaSemana.map((dia) => (
          <div key={dia} className="mb-3 bg-white p-3 rounded shadow">
            <h3 className="capitalize font-semibold mb-1">{dia}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {dietas[dia]}
            </p>
          </div>
        ))}
        <div className="mt-4 text-gray-400 text-xs">
          (Área de dieta será expandida futuramente com edição e mais detalhes)
        </div>
      </div>
    </div>
  );
};

export default App;