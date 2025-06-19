// src/App.jsx
import React, { useEffect, useState } from "react";
import TreinoSemana from "./components/TreinoSemana";
import DietaSemana from "./components/DietaSemana";
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
    tipo: "Treino A (Peito, Tríceps E Abdômen)",
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
    tipo: "Treino B (Costas E Bíceps)",
    exercicios: [
      "Puxada alta – 4x10",
      "Remada curvada – 4x10",
      "Remada unilateral – 3x12",
      "Rosca direta – 3x10",
      "Rosca alternada – 3x12",
      "Rosca martelo – 3x12"
    ],
    feitos: []
  },
  quarta: {
    tipo: "Descanso",
    exercicios: [],
    feitos: []
  },
  quinta: {
    tipo: "Treino C (Pernas E Ombro)",
    exercicios: [
      "Agachamento – 4x10",
      "Leg Press – 3x12",
      "Mesa flexora – 3x12",
      "Elevação lateral – 3x12",
      "Desenvolvimento com halteres – 3x10"
    ],
    feitos: []
  },
  sexta: {
    tipo: "Treino A (Peito, Tríceps E Abdômen)",
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
    tipo: "Treino B (Costas E Bíceps)",
    exercicios: [
      "Puxada alta – 4x10",
      "Remada curvada – 4x10",
      "Remada unilateral – 3x12",
      "Rosca direta – 3x10",
      "Rosca alternada – 3x12",
      "Rosca martelo – 3x12"
    ],
    feitos: []
  },
  domingo: {
    tipo: "Descanso",
    exercicios: [],
    feitos: []
  }
};

const dietasIniciais = diasDaSemana.reduce((acc, dia) => {
  acc[dia] = `Dieta do dia ${dia}`; // Placeholder para dietas personalizadas no futuro
  return acc;
}, {});

export default function App() {
  const [treinos, setTreinos] = useState({});
  const [dietas, setDietas] = useState({});

  useEffect(() => {
    const t = localStorage.getItem("treinosGabriel");
    const d = localStorage.getItem("dietasGabriel");
    setTreinos(t ? JSON.parse(t) : treinosIniciais);
    setDietas(d ? JSON.parse(d) : dietasIniciais);
  }, []);

  useEffect(() => {
    if (Object.keys(treinos).length) {
      localStorage.setItem("treinosGabriel", JSON.stringify(treinos));
    }
    if (Object.keys(dietas).length) {
      localStorage.setItem("dietasGabriel", JSON.stringify(dietas));
    }
  }, [treinos, dietas]);

  const toggleExercicio = (dia, index) => {
    setTreinos((prev) => {
      const feitosAtuais = prev[dia]?.feitos || [];
      const novosFeitos = feitosAtuais.includes(index)
        ? feitosAtuais.filter((i) => i !== index)
        : [...feitosAtuais, index];
      return {
        ...prev,
        [dia]: { ...prev[dia], feitos: novosFeitos }
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-6">
      <TreinoSemana dias={diasDaSemana} treinos={treinos} toggleExercicio={toggleExercicio} />
      <DietaSemana dias={diasDaSemana} dietas={dietas} />
    </div>
  );
}
