export default function Sobre() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[42px] border border-orange-500/10 bg-gradient-to-br from-zinc-950 via-[#090909] to-black p-12 mb-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 text-center">
          <div className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm">
            Innovathon 2025
          </div>
          <h1 className="text-5xl font-bold mt-6">
            Sobre o <span className="text-orange-500">CONECTHON</span>
          </h1>
          <p className="text-zinc-400 text-xl mt-4 max-w-3xl mx-auto">
            Centralização inteligente de conhecimento fiscal e contábil
          </p>
        </div>
      </section>

      {/* O QUE É - O QUE FAZ AGORA */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-zinc-950/80 border border-orange-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">⚡</div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">O que o CONECTHON faz AGORA</h2>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Centraliza normas e soluções de consulta em um só lugar
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Busca inteligente por palavra-chave nos documentos
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Organização por departamentos (Contábil, Fiscal, Pessoal)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Acesso remoto 24/7 via navegador
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Login de segurança para acesso restrito
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✓</span>
              Upload automático de PDFs via GitHub
            </li>
          </ul>
        </div>

        <div className="bg-zinc-950/80 border border-orange-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">📈</div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Impacto atual</h2>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-orange-500">📉</span>
              Redução de 70% no tempo de busca por normas
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">🔒</span>
              Segurança da informação centralizada
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">🔄</span>
              Eliminação de retrabalho e dispersão de arquivos
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">⏱️</span>
              Consultas que levavam 5-10 minutos agora em segundos
            </li>
          </ul>
        </div>
      </div>

      {/* PRÓXIMOS PASSOS - FUTURO */}
      <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-6">🚀 Próximos passos (visão de futuro)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">🤖</span>
              <div>
                <h3 className="font-bold text-white">Assistente IA</h3>
                <p className="text-zinc-500 text-sm">Responder dúvidas sobre normas em linguagem natural</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">📊</span>
              <div>
                <h3 className="font-bold text-white">Análise automática de cenários</h3>
                <p className="text-zinc-500 text-sm">Simular impactos tributários (ICMS, PIS/COFINS)</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">🔮</span>
              <div>
                <h3 className="font-bold text-white">Projeção de reforma tributária</h3>
                <p className="text-zinc-500 text-sm">Comparativo antes/depois das novas regras</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">📎</span>
              <div>
                <h3 className="font-bold text-white">Busca dentro de PDFs</h3>
                <p className="text-zinc-500 text-sm">Localizar trechos específicos de normas automaticamente</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">🔄</span>
              <div>
                <h3 className="font-bold text-white">Integração com sistemas</h3>
                <p className="text-zinc-500 text-sm">Conectar com ERPs e sistemas contábeis</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-orange-400 text-xl">📱</span>
              <div>
                <h3 className="font-bold text-white">Aplicativo mobile</h3>
                <p className="text-zinc-500 text-sm">Consultas direto do celular no campo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEMA - SOLUÇÃO - IMPACTO */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-950/80 border border-red-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-red-400 mb-3">Problema</h3>
          <p className="text-zinc-400 leading-relaxed">
            Informações técnicas dispersas em pastas, e-mails e arquivos locais.
            Profissional fiscal gasta 5-10 minutos por consulta para conciliar
            legislação com cenário real.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-orange-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Solução</h3>
          <p className="text-zinc-400 leading-relaxed">
            Centralização de normas, procedimentos e conhecimento técnico
            em um ambiente digital acessível, com busca inteligente e
            organização por departamentos.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-green-500/20 rounded-2xl p-8">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-green-400 mb-3">Resultado</h3>
          <p className="text-zinc-400 leading-relaxed">
            Redução de 70% no tempo de análise tributária, padronização de
            procedimentos e segurança da informação centralizada.
          </p>
        </div>
      </div>

      {/* NÚMEROS E IMPACTOS */}
      <div className="mt-10 grid md:grid-cols-4 gap-4 text-center">
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6">
          <div className="text-3xl font-bold text-orange-500">70%</div>
          <p className="text-zinc-500 text-sm mt-2">Redução no tempo<br />de análise</p>
        </div>
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6">
          <div className="text-3xl font-bold text-orange-500">5→0.5</div>
          <p className="text-zinc-500 text-sm mt-2">Minutos por consulta<br />antes vs depois</p>
        </div>
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6">
          <div className="text-3xl font-bold text-orange-500">24/7</div>
          <p className="text-zinc-500 text-sm mt-2">Disponibilidade<br />na nuvem</p>
        </div>
        <div className="bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6">
          <div className="text-3xl font-bold text-orange-500">3</div>
          <p className="text-zinc-500 text-sm mt-2">Departamentos<br />integrados</p>
        </div>
      </div>

      {/* TECNOLOGIAS */}
      <div className="mt-10 bg-zinc-950/50 border border-orange-500/10 rounded-2xl p-6 text-center">
        <h3 className="text-sm font-bold text-zinc-500 mb-3">TECNOLOGIAS UTILIZADAS</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">React</span>
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">Tailwind CSS</span>
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">Vite</span>
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">GitHub API</span>
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">Fuse.js</span>
          <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-orange-400">Vercel</span>
        </div>
      </div>
    </div>
  )
}