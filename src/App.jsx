import React, { useEffect, useState } from "react";
import TreinoSemana from "./components/TreinoSemana.jsx";
import DietaSemana from "./components/DietaSemana.jsx";
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
    tipo: "Treino B (Costas, Bíceps e Abdômen)",
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
    tipo: "Descanso",
    exercicios: [],
    feitos: []
  },
  quinta: {
    tipo: "Treino C (Pernas, Ombro e Abdômen)",
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
    tipo: "Descanso",
    exercicios: [],
    feitos: []
  },
  domingo: {
    tipo: "Descanso",
    exercicios: [],
    feitos: []
  }
};

const dietasIniciais = diasDaSemana.reduce((acc, dia) => {
  acc[dia] = `Dieta do dia ${dia}`; // placeholder
  return acc;
}, {});

export default function App() {
  // inicializa direto do localStorage ou dos valores iniciais
  const [treinos, setTreinos] = useState(() => {
    const saved = localStorage.getItem("treinosGabriel");
    return saved ? JSON.parse(saved) : treinosIniciais;
  });
  const [dietas, setDietas] = useState(() => {
    const saved = localStorage.getItem("dietasGabriel");
    return saved ? JSON.parse(saved) : dietasIniciais;
  });

  // auto-save
  useEffect(() => {
    localStorage.setItem("treinosGabriel", JSON.stringify(treinos));
    localStorage.setItem("dietasGabriel", JSON.stringify(dietas));
  }, [treinos, dietas]);

  const toggleExercicio = (dia, index) => {
    setTreinos(prev => {
      const feitosAtuais = prev[dia].feitos || [];
      const novosFeitos = feitosAtuais.includes(index)
        ? feitosAtuais.filter(i => i !== index)
        : [...feitosAtuais, index];
      return {
        ...prev,
        [dia]: { ...prev[dia], feitos: novosFeitos }
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-6">
      <TreinoSemana
        dias={diasDaSemana}
        treinos={treinos}
        toggleExercicio={toggleExercicio}
      />
      <DietaSemana dias={diasDaSemana} dietas={dietas} />
    </div>
  );
}