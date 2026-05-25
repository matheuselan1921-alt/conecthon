import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Contabil from "./pages/Contabil"
import Fiscal from "./pages/Fiscal"
import Pessoal from "./pages/Pessoal"
import Sobre from "./pages/Sobre"

function App() {
  const menuItems = [
    { nome: "🏠 Dashboard", rota: "/" },
    { nome: "📘 Contábil", rota: "/contabil" },
    { nome: "📗 Fiscal", rota: "/fiscal" },
    { nome: "📙 Pessoal", rota: "/pessoal" },
    { nome: "ℹ Sobre o Projeto", rota: "/sobre" },
  ]

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#040404] text-white flex relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-300px] right-[-200px] w-[1000px] h-[1000px] bg-orange-500/35 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-250px] left-[-200px] w-[850px] h-[850px] bg-orange-700/20 rounded-full blur-[170px]" />

        {/* Sidebar */}
        <aside className="w-80 min-h-screen bg-[#0A0A0A]/90 border-r border-orange-500/10 backdrop-blur-xl p-8 z-20">

          {/* Logo */}
          <div className="mb-14">
            <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center shadow-[0_0_40px_rgba(255,115,0,0.5)]">
              <span className="text-3xl font-black">C</span>
            </div>
            <h1 className="text-4xl font-black mt-6 tracking-tight">
              CONEC<span className="text-orange-500">THON</span>
            </h1>
            <p className="text-zinc-500 mt-2">Hub Contábil Inteligente</p>
          </div>

          {/* MENU */}
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.nome}
                to={item.rota}
                className="block w-full px-5 py-4 rounded-2xl bg-zinc-950/70 border border-transparent hover:border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-black transition-all duration-300 font-medium"
              >
                {item.nome}
              </Link>
            ))}
          </nav>

          {/* IA FUTURA */}
          <div className="mt-10 rounded-[28px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <span className="text-xs uppercase tracking-widest text-orange-400">Em Breve</span>
            <h3 className="text-lg font-bold mt-3">Assistente IA Contábil</h3>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Pesquise normas, encontre soluções de consulta e receba recomendações
              inteligentes de procedimentos.
            </p>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-10 z-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contabil" element={<Contabil />} />
            <Route path="/fiscal" element={<Fiscal />} />
            <Route path="/pessoal" element={<Pessoal />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App