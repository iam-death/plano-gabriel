import { useEffect, useState } from "react";

export default function Treinos() {
  const [treinos, setTreinos] = useState([]);

  // Carregar do localStorage quando a página abrir
  useEffect(() => {
    const dados = localStorage.getItem("treinos");
    if (dados) {
      try {
        const parsed = JSON.parse(dados);
        setTreinos(parsed);
      } catch (e) {
        console.error("Erro ao converter os treinos:", e);
      }
    }
  }, []);

  // Exemplo de treino que pode ser salvo
  const treinoExemplo = [
    {
      nome: "Peito",
      exercicios: ["Supino reto", "Crucifixo", "Flexão"]
    },
    {
      nome: "Costas",
      exercicios: ["Puxada frontal", "Remada curvada", "Levantamento terra"]
    }
  ];

  // Função para salvar os treinos de exemplo
  const salvarTreinos = () => {
    localStorage.setItem("treinos", JSON.stringify(treinoExemplo));
    setTreinos(treinoExemplo); // Atualiza a tela
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Seus Treinos</h1>

      <button
        onClick={salvarTreinos}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600"
      >
        Salvar Treinos de Exemplo
      </button>

      {treinos.length === 0 ? (
        <p className="text-gray-500">Nenhum treino salvo ainda.</p>
      ) : (
        treinos.map((treino, idx) => (
          <div key={idx} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{treino.nome}</h2>
            <ul className="list-disc list-inside">
              {treino.exercicios?.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}