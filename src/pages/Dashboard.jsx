export default function Dashboard() {
  const departamentos = [
    {
      titulo: "Departamento Contábil",
      icon: "📘",
      desc:
        "CPCs, instruções normativas, soluções de consulta e procedimentos internos.",
    },
    {
      titulo: "Departamento Fiscal",
      icon: "📗",
      desc:
        "ICMS, PIS/COFINS, obrigações acessórias e recuperação tributária.",
    },
    {
      titulo: "Departamento Pessoal",
      icon: "📙",
      desc:
        "Convenções, procedimentos internos e tutoriais do Domínio.",
    },
  ]

  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[42px] border border-orange-500/10 bg-gradient-to-br from-zinc-950 via-[#090909] to-black p-14 shadow-[0_0_150px_rgba(255,115,0,0.16)]">

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[140px]" />

        <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT */}
          <div>
            <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm tracking-wide">
              Inteligência contábil centralizada
            </span>

            <h1 className="text-7xl font-black mt-8 leading-[0.95]">
              O hub
              <span className="text-orange-500"> inteligente </span>
              para o seu escritório contábil.
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-relaxed">
              Centralize normas, CPCs, soluções de consulta,
              procedimentos internos e conhecimento técnico
              dos departamentos Contábil, Fiscal e Pessoal
              em uma única plataforma inteligente.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold shadow-[0_0_45px_rgba(255,115,0,0.45)] hover:scale-105 transition duration-300">
                Explorar Departamentos
              </button>

              <button className="px-8 py-4 rounded-2xl border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 transition duration-300">
                Buscar Documentos
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-[0_0_60px_rgba(255,115,0,0.10)]">

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-sm">
                    Hub Inteligente
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    CONECTHON AI
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-black text-2xl font-bold">
                  AI
                </div>
              </div>

              <div className="mt-8 space-y-4">

                <div className="rounded-2xl bg-zinc-900 border border-orange-500/10 p-4">
                  <p className="text-zinc-500 text-sm">
                    Pesquisa Inteligente
                  </p>

                  <p className="mt-2 font-medium">
                    “PAT recuperação tributária”
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-900 border border-orange-500/10 p-4">
                  <p className="text-zinc-500 text-sm">
                    Resultado Encontrado
                  </p>

                  <p className="mt-2 text-orange-400 font-semibold">
                    Solução de Consulta COSIT nº 35
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
          <div
            key={dep.titulo}
            className="rounded-[34px] border border-orange-500/10 bg-gradient-to-b from-zinc-950 to-[#0b0b0b] p-8 hover:border-orange-500/40 transition-all duration-300"
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
          </div>
        ))}
      </section>
    </div>
  )
}