import { useState, useEffect } from "react"
import BuscaGlobal from "../components/BuscaGlobal"

export default function Dashboard() {
  const [documentosContabil, setDocumentosContabil] = useState([])
  const [documentosFiscal, setDocumentosFiscal] = useState([])
  const [documentosPessoal, setDocumentosPessoal] = useState([])
  const [carregandoBusca, setCarregandoBusca] = useState(true)

  const baseUrl = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs"

  useEffect(() => {
    async function buscarPDFs(pasta, departamento, setter) {
      try {
        const url = `${baseUrl}/${pasta}/solucoes`
        const resposta = await fetch(url)
        const dados = await resposta.json()
        
        if (Array.isArray(dados)) {
          const pdfs = dados.filter(f => f.name.endsWith(".pdf"))
          setter(pdfs.map(pdf => ({
            nome: pdf.name.replace(".pdf", "").replace(/-/g, " "),
            link: pdf.download_url,
            tamanho: (pdf.size / 1024).toFixed(0) + " KB",
            departamento: departamento
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
      buscarPDFs("contabil", "📘 Contábil", setDocumentosContabil),
      buscarPDFs("fiscal", "📗 Fiscal", setDocumentosFiscal),
      buscarPDFs("pessoal", "📙 Pessoal", setDocumentosPessoal)
    ]).finally(() => setCarregandoBusca(false))
  }, [])

  const todosDocumentos = [...documentosContabil, ...documentosFiscal, ...documentosPessoal]

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

  const totalDocs = documentosContabil.length + documentosFiscal.length + documentosPessoal.length

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

          <div className="relative">
            <div className="rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-[0_0_60px_rgba(255,115,0,0.10)]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-sm">Documentos disponíveis</p>
                  <h3 className="text-3xl font-bold mt-2 text-orange-400">{totalDocs}+</h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-black text-2xl font-bold">
                  📚
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>✅</span> Soluções de Consulta ({documentosContabil.length})
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>⏳</span> Instruções Normativas (em breve)
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span>⏳</span> CPCs (em breve)
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