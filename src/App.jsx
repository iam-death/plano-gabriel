import React, { useEffect, useState } from "react";

const treinosPadrao = {
  segunda: {
    treino: "A",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  terca: {
    treino: "B",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  quarta: {
    treino: "descanso",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  quinta: {
    treino: "C",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  sexta: {
    treino: "A",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  sabado: {
    treino: "descanso",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  },
  domingo: {
    treino: "descanso",
    refeicoes: { cafe: "", almoco: "", janta: "" }
  }
};

const App = () => {
  const [planilha, setPlanilha] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("treinosPadrao");
    if (saved) {
      try {
        setPlanilha(JSON.parse(saved));
      } catch {
        setPlanilha(treinosPadrao);
      }
    } else {
      setPlanilha(treinosPadrao);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(planilha).length > 0) {
      localStorage.setItem("planilhaGabriel", JSON.stringify(planilha));
    }
  }, [planilha]);

  const handleChange = (dia, campo, valor) => {
    setPlanilha((prev) => ({
      ...prev,
      [dia]: {
        ...prev[dia],
        refeicoes: {
          ...prev[dia].refeicoes,
          [campo]: valor
        }
      }
    }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Plano Semanal - Gabriel</h1>
      {Object.entries(planilha).map(([dia, dados]) => (
        <div key={dia} style={{ marginBottom: 20 }}>
          <h2>{dia.charAt(0).toUpperCase() + dia.slice(1)} - Treino: {dados.treino}</h2>
          <label>
            Café:
            <input
              type="text"
              value={dados.refeicoes.cafe}
              onChange={(e) => handleChange(dia, "cafe", e.target.value)}
            />
          </label>
          <br />
          <label>
            Almoço:
            <input
              type="text"
              value={dados.refeicoes.almoco}
              onChange={(e) => handleChange(dia, "almoco", e.target.value)}
            />
          </label>
          <br />
          <label>
            Janta:
            <input
              type="text"
              value={dados.refeicoes.janta}
              onChange={(e) => handleChange(dia, "janta", e.target.value)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;