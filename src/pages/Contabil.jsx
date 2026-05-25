import { useState, useEffect } from "react"
import Busca from "../components/Busca"

export default function Contabil() {
  const [solucoes, setSolucoes] = useState([])
  const [instrucoes, setInstrucoes] = useState([])
  const [cpcs, setCpcs] = useState([])
  const [procedimentos, setProcedimentos] = useState([])
  const [tutoriais, setTutoriais] = useState([])
  const [carregando, setCarregando] = useState(true)

  const baseUrl = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs/contabil"

  useEffect(() => {
    async function buscarPDFs(pasta, setter) {
      try {
        const url = `${baseUrl}/${pasta}`
        const resposta = await fetch(url)
        const dados = await resposta.json()
        
        if (Array.isArray(dados)) {
          const pdfs = dados.filter(f => f.name.endsWith(".pdf"))
          setter(pdfs.map(pdf => ({
            nome: pdf.name.replace(".pdf", "").replace(/-/g, " "),
            link: pdf.download_url,
            tamanho: (pdf.size / 1024).toFixed(0) + " KB"
          })))
        } else {
          setter([])
        }
      } catch (erro) {
        console.error(`Erro ao buscar ${pasta}:`, erro)
        setter([])
      }
    }

    Promise.all([
      buscarPDFs("solucoes", setSolucoes),
      buscarPDFs("instrucoes", setInstrucoes),
      buscarPDFs("cpcs", setCpcs),
      buscarPDFs("procedimentos", setProcedimentos),
      buscarPDFs("tutoriais", setTutoriais)
    ]).finally(() => setCarregando(false))
  }, [])

  if (carregando) {
    return <div className="text-center text-orange-400 text-xl p-20">📚 Carregando documentos...</div>
  }

  // Juntar todos os documentos para a busca global
  const todosDocumentos = [
    ...solucoes.map(doc => ({ ...doc, categoria: "Soluções de Consulta" })),
    ...instrucoes.map(doc => ({ ...doc, categoria: "Instruções Normativas" })),
    ...cpcs.map(doc => ({ ...doc, categoria: "CPCs" })),
    ...procedimentos.map(doc => ({ ...doc, categoria: "Procedimentos Internos" })),
    ...tutoriais.map(doc => ({ ...doc, categoria: "Tutoriais" }))
  ]

  const grupos = [
    { titulo: "📄 Soluções de Consulta", descricao: "SC Cosit", arquivos: solucoes, vazio: "Nenhuma solução de consulta adicionada" },
    { titulo: "📋 Instruções Normativas", descricao: "IN RFB", arquivos: instrucoes, vazio: "Nenhuma instrução normativa adicionada" },
    { titulo: "⚖️ CPCs", descricao: "Comitê de Pronunciamentos Contábeis", arquivos: cpcs, vazio: "Nenhum CPC adicionado" },
    { titulo: "📁 Procedimentos Internos", descricao: "Rotinas do escritório", arquivos: procedimentos, vazio: "Nenhum procedimento interno adicionado" },
    { titulo: "🎓 Tutoriais Domínio", descricao: "Passo a passos e treinamentos", arquivos: tutoriais, vazio: "Nenhum tutorial adicionado" }
  ]

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-3xl">
            📘
          </div>
          <div>
            <h1 className="text-4xl font-bold">Departamento Contábil</h1>
            <p className="text-zinc-400 mt-1">Normas, procedimentos e materiais técnicos</p>
          </div>
        </div>
      </div>

      {/* 🔍 BARRA DE BUSCA INTELIGENTE */}
      <Busca documentos={todosDocumentos} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grupos.map((grupo, idx) => (
          <div key={idx} className="bg-zinc-950/80 border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{grupo.titulo}</h3>
                <p className="text-zinc-500 text-sm mt-1">{grupo.descricao}</p>
              </div>
              <span className="text-orange-500 text-sm font-mono">{grupo.arquivos.length} docs</span>
            </div>

            {grupo.arquivos.length > 0 && (
              <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                {grupo.arquivos.map((doc, i) => (
                  <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-between text-sm text-zinc-400 hover:text-orange-400 transition p-2 rounded-lg hover:bg-orange-500/10">
                    <span className="truncate flex-1">📄 {doc.nome}</span>
                    <span className="text-zinc-500 text-xs ml-2">{doc.tamanho}</span>
                  </a>
                ))}
              </div>
            )}

            {grupo.arquivos.length === 0 && (
              <div className="mt-4 text-center py-6">
                <div className="text-3xl mb-2">📭</div>
                <p className="text-zinc-500 text-sm">{grupo.vazio}</p>
                <p className="text-zinc-600 text-xs mt-2">Adicione PDFs na pasta <code className="text-orange-400">public/docs/contabil/{grupo.descricao.toLowerCase()}/</code></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}