export default function Contabil() {
  const categorias = [
    {
      nome: "Instruções Normativas",
      cor: "orange",
      docs: 12
    },
    {
      nome: "Soluções de Consulta",
      cor: "orange",
      docs: 8
    },
    {
      nome: "CPCs",
      cor: "orange",
      docs: 24
    },
    {
      nome: "Procedimentos Internos",
      cor: "orange",
      docs: 6
    },
    {
      nome: "Tutoriais Domínio",
      cor: "orange",
      docs: 5
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-3xl">
            📘
          </div>
          <div>
            <h1 className="text-4xl font-bold">Departamento Contábil</h1>
            <p className="text-zinc-400 mt-1">
              Normas, procedimentos e materiais técnicos
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            className="bg-zinc-950/80 border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{cat.nome}</h3>
              <span className="text-orange-500 text-sm font-mono">
                {cat.docs} docs
              </span>
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              Clique para acessar os documentos
            </p>
            <button className="mt-6 w-full py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-black transition">
              Visualizar
            </button>
          </div>
        ))}
      </div>

      {/* Placeholder vazio */}
      <div className="mt-10 text-center py-12 border border-orange-500/10 rounded-2xl bg-zinc-950/50">
        <div className="text-5xl mb-3">📄</div>
        <p className="text-zinc-500">
          Adicione documentos nas pastas correspondentes
        </p>
        <p className="text-zinc-600 text-sm mt-2">
          Os arquivos aparecerão automaticamente aqui
        </p>
      </div>
    </div>
  )
}