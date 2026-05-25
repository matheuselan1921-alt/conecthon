import { useState, useEffect } from "react"
import Fuse from "fuse.js"

export default function BuscaGlobal({ documentos }) {
  const [termo, setTermo] = useState("")
  const [resultados, setResultados] = useState([])

  const options = {
    keys: ["nome", "departamento"],
    threshold: 0.3,
    includeScore: true
  }

  useEffect(() => {
    if (termo.length < 2) {
      setResultados([])
      return
    }

    const fuse = new Fuse(documentos, options)
    const resultado = fuse.search(termo)
    setResultados(resultado)
  }, [termo, documentos])

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Pesquisar em todos os departamentos... (ex: PAT, IRPJ, eSocial)"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          className="w-full p-4 rounded-2xl bg-zinc-900 border border-orange-500/20 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-lg"
        />
        {termo.length >= 2 && (
          <button
            onClick={() => setTermo("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition"
          >
            ✕
          </button>
        )}
      </div>

      {resultados.length > 0 && (
        <div className="mt-4 bg-zinc-950/90 border border-orange-500/20 rounded-2xl overflow-hidden">
          <div className="p-3 border-b border-orange-500/10 text-orange-400 text-sm">
            🔍 {resultados.length} documento(s) encontrado(s) para "{termo}"
          </div>
          <div className="max-h-96 overflow-y-auto">
            {resultados.map((resultado, idx) => (
              <a
                key={idx}
                href={resultado.item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 hover:bg-orange-500/10 transition border-b border-orange-500/5"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span>📄</span>
                  <div>
                    <div className="text-zinc-300">{resultado.item.nome}</div>
                    <div className="text-xs text-orange-400">{resultado.item.departamento}</div>
                  </div>
                </div>
                <span className="text-zinc-500 text-sm">{resultado.item.tamanho}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {termo.length >= 2 && resultados.length === 0 && (
        <div className="mt-4 p-4 text-center text-zinc-500 bg-zinc-950/50 rounded-2xl border border-orange-500/10">
          📭 Nenhum documento encontrado para "{termo}"
        </div>
      )}
    </div>
  )
}