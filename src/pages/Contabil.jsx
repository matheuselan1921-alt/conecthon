import { useState, useEffect } from "react"

export default function Contabil() {
  const [arquivos, setArquivos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function buscarPDFs() {
      try {
        const url = "https://api.github.com/repos/matheuselan1921-alt/conecthon/contents/public/docs/contabil/solucoes"
        const resposta = await fetch(url)
        const dados = await resposta.json()
        
        if (Array.isArray(dados)) {
          const pdfs = dados.filter(f => f.name.endsWith(".pdf"))
          setArquivos(pdfs)
        }
        setCarregando(false)
      } catch (erro) {
        console.error("Erro:", erro)
        setCarregando(false)
      }
    }
    buscarPDFs()
  }, [])

  if (carregando) {
    return <div className="text-center text-orange-400 text-xl p-20">📚 Carregando documentos...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Departamento Contábil</h1>
        <p className="text-zinc-400">Soluções de Consulta - SC Cosit</p>
      </div>

      {arquivos.length === 0 && (
        <div className="text-center p-10 bg-zinc-900 rounded-xl">
          <p className="text-zinc-400">Nenhum PDF encontrado</p>
          <p className="text-zinc-500 text-sm mt-2">Verifique a pasta solucoes/ no GitHub</p>
        </div>
      )}

      <div className="space-y-2">
        {arquivos.map((pdf, idx) => (
          <a
            key={idx}
            href={pdf.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg hover:bg-orange-500/20 transition border border-orange-500/10"
          >
            <span>📄</span>
            <span className="flex-1">{pdf.name.replace(".pdf", "")}</span>
            <span className="text-zinc-500 text-sm">{Math.round(pdf.size / 1024)} KB</span>
          </a>
        ))}
      </div>
    </div>
  )
}