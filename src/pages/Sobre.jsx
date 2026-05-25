export default function Sobre() {
  return (
    <div>
      {/* Hero da página Sobre */}
      <section className="relative overflow-hidden rounded-[42px] border border-orange-500/10 bg-gradient-to-br from-zinc-950 via-[#090909] to-black p-12">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm">
            Innovathon 2025
          </div>
          <h1 className="text-5xl font-bold mt-6">
            Sobre o <span className="text-orange-500">CONECTHON</span>
          </h1>
          <p className="text-zinc-400 text-xl mt-4 max-w-3xl mx-auto">
            Inteligência contábil centralizada para escritórios modernos
          </p>
        </div>
      </section>

      {/* Problema - Solução - Impacto */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-zinc-950/80 border border-red-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-red-400">Problema</h3>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Informações técnicas dispersas em pastas, e-mails e arquivos locais, 
            gerando perda de tempo operacional e falta de padronização.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-orange-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-bold text-orange-400">Solução</h3>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Centralização de normas, procedimentos e conhecimento técnico 
            em um único ambiente digital acessível.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-green-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">📈</div>
          <h3 className="text-2xl font-bold text-green-400">Impacto</h3>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Mais produtividade, padronização e velocidade de consulta, 
            reduzindo retrabalho em até 40%.
          </p>
        </div>
      </div>

      {/* Próximos passos */}
      <div className="mt-10 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">🚀 Próximos passos</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="flex gap-3 items-start">
            <span className="text-orange-400">✓</span>
            <span className="text-zinc-400">Upload automático de PDFs</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-orange-400">✓</span>
            <span className="text-zinc-400">Busca por conteúdo dos documentos</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-orange-400">✓</span>
            <span className="text-zinc-400">Assistente IA para responder dúvidas</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-orange-400">✓</span>
            <span className="text-zinc-400">Integração com sistemas contábeis</span>
          </div>
        </div>
      </div>
    </div>
  )
}