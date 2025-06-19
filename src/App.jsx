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

const treinosIniciais = {
  segunda: {
    tipo: "A",
    descricao: "Peito, tríceps e Abdômen",
    exercicios: [
      "Supino reto – 4x8-10",
      "Supino inclinado – 3x10",
      "Cross-over – 3x12",
      "Tríceps na polia – 3x12",
      "Mergulho no banco – 3x10",
      "Prancha – 3x 1 min",
      "Elevação de pernas – 3x15"
    ],
    feitos: []
  },
  terca: {
    tipo: "B",
    descricao: "Costas, Bíceps e Abdômen",
    exercicios: [
      "Barra fixa assistida – 4x6-8",
      "Remada baixa – 4x10",
      "Puxada na frente – 3x12",
      "Rosca direta – 3x10",
      "Rosca martelo – 3x12",
      "Abdominal infra – 3x15",
      "Oblíquos – 3x20 (cada lado)"
    ],
    feitos: []
  },
  quarta: {
    tipo: "descanso",
    descricao: "Descanso",
    exercicios: [],
    feitos: []
  },
  quinta: {
    tipo: "C",
    descricao: "Pernas, Ombro e Abdômen",
    exercicios: [
      "Agachamento livre – 4x8",
      "Leg press – 3x10",
      "Mesa flexora – 3x12",
      "Elevação lateral – 3x15",
      "Desenvolvimento com halteres – 3x10",
      "Avanço – 3x12 (cada perna)",
      "Prancha lateral – 3x 30s cada lado",
      "Abdominal superior – 3x15"
    ],
    feitos: []
  },
  sexta: {
    tipo: "A",
    descricao: "Peito, tríceps e Abdômen",
    exercicios: [
      "Supino reto – 4x8-10",
      "Supino inclinado – 3x10",
      "Cross-over – 3x12",
      "Tríceps na polia – 3x12",
      "Mergulho no banco – 3x10",
      "Prancha – 3x 1 min",
      "Elevação de pernas – 3x15"
    ],
    feitos: []
  },
  sabado: {
    tipo: "descanso",
    descricao: "Descanso",
    exercicios: [],
    feitos: []
  },
  domingo: {
    tipo: "descanso",
    descricao: "Descanso",
    exercicios: [],
    feitos: []
  }
};

const App = () => {
  const [treinos, setTreinos] = useState({});

  useEffect(() => {
    const t = localStorage.getItem("treinosGabriel");
    setTreinos(t ? JSON.parse(t) : treinosIniciais);
  }, []);

  useEffect(() => {
    localStorage.setItem("treinosGabriel", JSON.stringify(treinos));
  }, [treinos]);

  const toggleExercicio = (dia, index) => {
    setTreinos((prev) => {
      const feitos = prev[dia].feitos.includes(index)
        ? prev[dia].feitos.filter((i) => i !== index)
        : [...prev[dia].feitos, index];
      return {
        ...prev,
        [dia]: { ...prev[dia], feitos }
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Treinos</h2>
        {diasDaSemana.map((dia) => (
          <div key={dia} className="mb-4 bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold capitalize mb-2">
              {dia.charAt(0).toUpperCase() + dia.slice(1)}: Treino {treinos[dia]?.tipo} ({treinos[dia]?.descricao})
            </h3>
            <ul>
              {treinos[dia]?.exercicios.map((ex, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    checked={treinos[dia]?.feitos.includes(idx)}
                    onChange={() => toggleExercicio(dia, idx)}
                  />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Dieta</h2>
        {diasDaSemana.map((dia) => (
          <div key={dia} className="mb-3 bg-white p-3 rounded shadow">
            <h3 className="capitalize font-semibold mb-1">{dia}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              Dieta do dia {dia} (exemplo)
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