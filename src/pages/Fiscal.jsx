import { useState, useEffect } from "react"
import Busca from "../components/Busca"

export default function Fiscal() {
  const [documentos, setDocumentos] = useState([])
  const [carregando, setCarregando] = useState(true)

  const baseUrl = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs/fiscal"

  // Lista de pastas do Fiscal
  const pastas = ["solucoes", "instrucoes", "ICMS", "Obrigações Acessórias", "PISCOFINS", "recuperacao", "tutoriais"]

  useEffect(() => {
    async function buscarTodasPastas() {
      const todosDocumentos = []

      for (const pasta of pastas) {
        try {
          const url = `${baseUrl}/${pasta}`
          const resposta = await fetch(url)
          const dados = await resposta.json()
          
          if (Array.isArray(dados)) {
            // Remove apenas o .gitkeep
            const arquivos = dados.filter(f => f.name !== ".gitkeep")
            const documentosComPasta = arquivos.map(arquivo => {
              const extensao = arquivo.name.split('.').pop().toUpperCase()
              let icone = "📄"
              
              if (extensao === "PDF") icone = "📑"
              else if (extensao === "DOCX" || extensao === "DOC") icone = "📝"
              else if (extensao === "XLSX" || extensao === "XLS") icone = "📊"
              else if (extensao === "TXT") icone = "📃"
              else if (extensao === "PPTX" || extensao === "PPT") icone = "📽️"
              
              return {
                nome: arquivo.name.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
                link: arquivo.download_url,
                tamanho: (arquivo.size / 1024).toFixed(0) + " KB",
                categoria: pasta,
                extensao: extensao,
                icone: icone
              }
            })
            todosDocumentos.push(...documentosComPasta)
          }
        } catch (erro) {
          console.log(`Pasta ${pasta} não encontrada ou vazia`)
        }
      }
      
      setDocumentos(todosDocumentos)
      setCarregando(false)
    }

    buscarTodasPastas()
  }, [])

  // Mapeamento das pastas para exibição
  const pastasConfig = [
    { titulo: "📄 Soluções de Consulta", descricao: "SC Cosit Fiscal", chave: "solucoes", vazio: "Nenhuma solução de consulta adicionada" },
    { titulo: "📋 Instruções Normativas", descricao: "IN RFB", chave: "instrucoes", vazio: "Nenhuma instrução normativa adicionada" },
    { titulo: "💰 ICMS", descricao: "Imposto sobre Circulação de Mercadorias", chave: "icms", vazio: "Nenhum documento de ICMS adicionado" },
    { titulo: "📑 Obrigações Acessórias", descricao: "EFD, SPED, etc", chave: "obrigacoes", vazio: "Nenhuma obrigação acessória adicionada" },
    { titulo: "🏦 PIS/COFINS", descricao: "Contribuições sociais", chave: "piscofins", vazio: "Nenhum documento de PIS/COFINS adicionado" },
    { titulo: "🔄 Recuperação Tributária", descricao: "Créditos e restituições", chave: "recuperacao", vazio: "Nenhum documento de recuperação tributária adicionado" },
    { titulo: "🎓 Tutoriais Domínio", descricao: "Passo a passos fiscais", chave: "tutoriais", vazio: "Nenhum tutorial adicionado" }
  ]

  // Agrupar documentos por categoria
  const documentosPorCategoria = {}
  pastas.forEach(pasta => {
    documentosPorCategoria[pasta] = documentos.filter(d => d.categoria === pasta)
  })

  if (carregando) {
    return <div className="text-center text-orange-400 text-xl p-20">📚 Carregando documentos fiscais...</div>
  }

  const totalDocumentos = documentos.length

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-3xl">
            📗
          </div>
          <div>
            <h1 className="text-4xl font-bold">Departamento Fiscal</h1>
            <p className="text-zinc-400 mt-1">Legislação tributária e obrigações fiscais</p>
            <p className="text-orange-400 text-sm mt-1">{totalDocumentos} documentos no total</p>
          </div>
        </div>
      </div>

      {/* Busca */}
      <Busca documentos={documentos} />

      {/* Cards por categoria */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastasConfig.map((grupo, idx) => {
          const arquivos = documentosPorCategoria[grupo.chave] || []
          
          return (
            <div key={idx} className="bg-zinc-950/80 border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{grupo.titulo}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{grupo.descricao}</p>
                </div>
                <span className="text-orange-500 text-sm font-mono">{arquivos.length} docs</span>
              </div>

              {arquivos.length > 0 && (
                <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                  {arquivos.map((doc, i) => (
                    <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between text-sm text-zinc-400 hover:text-orange-400 transition p-2 rounded-lg hover:bg-orange-500/10">
                      <span className="truncate flex-1">{doc.icone} {doc.nome}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-600 text-xs">{doc.extensao}</span>
                        <span className="text-zinc-500 text-xs ml-2">{doc.tamanho}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {arquivos.length === 0 && (
                <div className="mt-4 text-center py-6">
                  <div className="text-3xl mb-2">📭</div>
                  <p className="text-zinc-500 text-sm">{grupo.vazio}</p>
                  <p className="text-zinc-600 text-xs mt-2">Adicione arquivos na pasta <code className="text-orange-400">public/docs/fiscal/{grupo.chave}/</code></p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}