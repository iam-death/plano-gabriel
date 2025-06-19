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

const treinosIniciais = { /* igual ao anterior com tipos, descrições e exercícios */ };
const dietasIniciais = diasDaSemana.reduce((acc, dia) => {
  acc[dia] = `Dieta do dia ${dia}`;
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
    localStorage.setItem("treinosGabriel", JSON.stringify(treinos));
    localStorage.setItem("dietasGabriel", JSON.stringify(dietas));
  }, [treinos, dietas]);

  const toggleExercicio = (dia, index) => {
    setTreinos((prev) => {
      const feitos = prev[dia].feitos.includes(index)
        ? prev[dia].feitos.filter((i) => i !== index)
        : [...prev[dia].feitos, index];
      return { ...prev, [dia]: { ...prev[dia], feitos } };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-6">
      <TreinoSemana dias={diasDaSemana} treinos={treinos} toggleExercicio={toggleExercicio} />
      <DietaSemana dias={diasDaSemana} dietas={dietas} />
    </div>
  );
}