import { useState, useEffect } from "react"
import BuscaGlobal from "../components/BuscaGlobal"

export default function Dashboard() {
  const [documentosContabil, setDocumentosContabil] = useState([])
  const [documentosFiscal, setDocumentosFiscal] = useState([])
  const [documentosPessoal, setDocumentosPessoal] = useState([])
  const [carregandoBusca, setCarregandoBusca] = useState(true)

  const baseUrl = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs"

  // Função para buscar arquivos recursivamente dentro de uma pasta
  async function buscarArquivosNaPasta(pasta) {
    try {
      const url = `${baseUrl}/${pasta}`
      const resposta = await fetch(url)
      
      if (!resposta.ok) return []
      
      const dados = await resposta.json()
      if (!Array.isArray(dados)) return []
      
      let todosArquivos = []
      
      for (const item of dados) {
        if (item.type === "file" && item.name !== ".gitkeep") {
          // É um arquivo direto
          todosArquivos.push({
            nome: item.name.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
            link: item.download_url,
            tamanho: (item.size / 1024).toFixed(0) + " KB"
          })
        } else if (item.type === "dir") {
          // É uma pasta - busca arquivos dentro dela
          const subUrl = `${url}/${encodeURIComponent(item.name)}`
          const subResposta = await fetch(subUrl)
          if (subResposta.ok) {
            const subDados = await subResposta.json()
            if (Array.isArray(subDados)) {
              for (const subItem of subDados) {
                if (subItem.type === "file" && subItem.name !== ".gitkeep") {
                  todosArquivos.push({
                    nome: subItem.name.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
                    link: subItem.download_url,
                    tamanho: (subItem.size / 1024).toFixed(0) + " KB"
                  })
                }
              }
            }
          }
        }
      }
      
      return todosArquivos
    } catch (erro) {
      console.error(`Erro ao buscar ${pasta}:`, erro)
      return []
    }
  }

  useEffect(() => {
    async function buscarTodosDocumentos() {
      const [contabil, fiscal, pessoal] = await Promise.all([
        buscarArquivosNaPasta("contabil"),
        buscarArquivosNaPasta("fiscal"),
        buscarArquivosNaPasta("pessoal")
      ])
      
      setDocumentosContabil(contabil)
      setDocumentosFiscal(fiscal)
      setDocumentosPessoal(pessoal)
      setCarregandoBusca(false)
    }

    buscarTodosDocumentos()
  }, [])

  const todosDocumentos = [...documentosContabil, ...documentosFiscal, ...documentosPessoal]
  const totalDocs = todosDocumentos.length

  const departamentos = [
    {
      titulo: "Departamento Contábil",
      icon: "📘",
      desc: "CPCs, instruções normativas, soluções de consulta e procedimentos internos.",
      rota: "/contabil",
      docs: documentosContabil.length
    },
    {
      titulo: "Departamento Fiscal",
      icon: "📗",
      desc: "ICMS, PIS/COFINS, obrigações acessórias e recuperação tributária.",
      rota: "/fiscal",
      docs: documentosFiscal.length
    },
    {
      titulo: "Departamento Pessoal",
      icon: "📙",
      desc: "Convenções, procedimentos internos e tutoriais do Domínio.",
      rota: "/pessoal",
      docs: documentosPessoal.length
    },
  ]

  return (
    <div>

      {/* BARRA DE BUSCA GLOBAL */}
      {!carregandoBusca && todosDocumentos.length > 0 && (
        <div className="mb-8">
          <BuscaGlobal documentos={todosDocumentos} />
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[42px] border border-orange-500/10 bg-gradient-to-br from-zinc-950 via-[#090909] to-black p-14 shadow-[0_0_150px_rgba(255,115,0,0.16)]">

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[140px]" />

        <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

          <div>
            <h1 className="text-7xl font-black leading-[0.95]">
              Central de conhecimento
              <span className="text-orange-500"> da Contagil Contabilidade</span>
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-relaxed">
              Normas, procedimentos, soluções de consulta e conhecimento técnico
              dos departamentos Contábil, Fiscal e Pessoal, centralizados em uma
              única plataforma interna.
            </p>
          </div>

          {/* Card lateral DINÂMICO */}
          <div className="relative">
            <div className="rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-[0_0_60px_rgba(255,115,0,0.10)]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-sm">Documentos disponíveis</p>
                  <h3 className="text-3xl font-bold mt-2 text-orange-400">{totalDocs}</h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-black text-2xl font-bold">
                  📚
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>{documentosContabil.length > 0 ? "✅" : "⏳"}</span> 
                  <span>Departamento Contábil: </span>
                  <span className="text-orange-400 font-mono">{documentosContabil.length} documentos</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>{documentosFiscal.length > 0 ? "✅" : "⏳"}</span> 
                  <span>Departamento Fiscal: </span>
                  <span className="text-orange-400 font-mono">{documentosFiscal.length} documentos</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>{documentosPessoal.length > 0 ? "✅" : "⏳"}</span> 
                  <span>Departamento Pessoal: </span>
                  <span className="text-orange-400 font-mono">{documentosPessoal.length} documentos</span>
                </div>
              </div>
              
              {/* Mensagem profissional */}
              <div className="mt-6 pt-4 border-t border-orange-500/10">
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>📊 Status atual</span>
                  <span className="text-orange-400">{totalDocs} documentos no total</span>
                </div>
                <div className="text-xs text-zinc-600 space-y-1">
                  <p>📘 Contábil: {documentosContabil.length} documentos</p>
                  <p>📗 Fiscal: {documentosFiscal.length} documentos</p>
                  <p>📙 Pessoal: {documentosPessoal.length} documentos</p>
                </div>
                <div className="mt-4 p-3 bg-orange-500/5 rounded-xl border border-orange-500/10">
                  <p className="text-orange-400 text-sm font-medium text-center">
                    📚 Base de conhecimento em construção
                  </p>
                  <p className="text-zinc-500 text-xs text-center mt-1">
                    Expansão contínua da biblioteca documental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTAMENTOS */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
        {departamentos.map((dep) => (
          <a
            key={dep.titulo}
            href={dep.rota}
            className="rounded-[34px] border border-orange-500/10 bg-gradient-to-b from-zinc-950 to-[#0b0b0b] p-8 hover:border-orange-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer block group"
          >
            <div className="text-4xl">
              {dep.icon}
            </div>

            <h3 className="text-2xl font-bold mt-5">
              {dep.titulo}
            </h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              {dep.desc}
            </p>
            
            <div className="mt-4 flex items-center justify-between">
              <span className="text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition">
                Clique para acessar →
              </span>
              <span className="text-zinc-500 text-xs">{dep.docs} documentos</span>
            </div>
          </a>
        ))}
      </section>
    </div>
  )
}