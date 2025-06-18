import React, { useState, useEffect } from 'react';

const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const App = () => {
  const [dados, setDados] = useState(() => {
    const salvo = localStorage.getItem('planoGabriel');
    return salvo ? JSON.parse(salvo) : Array(7).fill({ treino: '', refeicoes: '' });
  });

  useEffect(() => {
    localStorage.setItem('planoGabriel', JSON.stringify(dados));
  }, [dados]);

  const atualizar = (index, campo, valor) => {
    const novo = [...dados];
    novo[index] = { ...novo[index], [campo]: valor };
    setDados(novo);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Plano Semanal - Gabriel</h1>
      {dias.map((dia, i) => (
        <div key={dia} className="mb-6 border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">{dia}</h2>
          <textarea
            className="w-full border rounded p-2 mb-2"
            placeholder="Treino do dia"
            value={dados[i].treino}
            onChange={(e) => atualizar(i, 'treino', e.target.value)}
          />
          <textarea
            className="w-full border rounded p-2"
            placeholder="Refeições do dia"
            value={dados[i].refeicoes}
            onChange={(e) => atualizar(i, 'refeicoes', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;