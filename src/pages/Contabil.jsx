import { useState, useEffect } from "react"

export default function Contabil() {
  const [arquivos, setArquivos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Busca os PDFs diretamente do GitHub
  const githubApiUrl = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs/contabil/solucoes"

  useEffect(() => {
    async function buscarPDFs() {
      try {
        const response = await fetch(githubApiUrl)
        const data = await response.json()
        
        // Filtra apenas PDFs
        const pdfs = data.filter(file => file.name.toLowerCase().endsWith('.pdf'))
        
        // Organiza os documentos
        const documentos = pdfs.map(pdf => ({
          nome: pdf.name.replace('.pdf', '').replace(/-/g, ' '),
          link: pdf.download_url,
          tamanho: (pdf.size / 1024).toFixed(0) + " KB",
          data: new Date(pdf.sha).toLocaleDateString('pt-BR')
        }))
        
        setArquivos(documentos)
        setCarregando(false)
      } catch (error) {
        console.error("Erro ao buscar PDFs:", error)
        setCarregando(false)
      }
    }
    
    buscarPDFs()
  }, [])

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="text-5xl mb-4">📚</div>
          <div className="text-orange-400 text-xl">Carregando documentos...</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-3xl">
            📘
          </div>
          <div>
            <h1 className="text-4xl font-bold">Departamento Contábil</h1>
            <p className="text-zinc-400 mt-1">
              Soluções de Consulta e normas técnicas
            </p>
          </div>
        </div>
      </div>

      {/* Card com todos os PDFs */}
      <div className="bg-zinc-950/80 border border-orange-500/10 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">📄 Soluções de Consulta</h2>
          <span className="text-orange-500 text-sm font-mono">
            {arquivos.length} documentos
          </span>
        </div>

        {arquivos.length > 0 && (
          <div className="space-y-2 max-h-[600px] overflow-y-auto">
            {arquivos.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 text-sm text-zinc-400 hover:text-orange-400 transition p-3 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/20 group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base">📄</span>
                  <span className="flex-1 font-medium">{doc.nome}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-zinc-500">{doc.tamanho}</span>
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">Abrir →</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {arquivos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-3">📭</div>
            <p className="text-zinc-500">
              Nenhum documento encontrado
            </p>
            <p className="text-zinc-600 text-sm mt-2">
              Adicione PDFs na pasta public/docs/contabil/solucoes/
            </p>
          </div>
        )}
      </div>

      {/* Próximas seções (vazias por enquanto) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">📋</div>
          <h3 className="font-bold">Instruções Normativas</h3>
          <p className="text-zinc-500 text-sm mt-2">Em breve</p>
        </div>
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">⚖️</div>
          <h3 className="font-bold">CPCs</h3>
          <p className="text-zinc-500 text-sm mt-2">Em breve</p>
        </div>
      </div>
    </div>
  )
}