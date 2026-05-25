import { useState } from "react"

export default function Login({ onLogin }) {
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  const senhaCorreta = "contagil2025"  // ← Altere para a senha que você quiser

  const handleSubmit = (e) => {
    e.preventDefault()
    if (senha === senhaCorreta) {
      onLogin(true)
    } else {
      setErro("Senha incorreta. Tente novamente.")
      setSenha("")
    }
  }

  return (
    <div className="min-h-screen bg-[#040404] flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute top-[-300px] right-[-200px] w-[1000px] h-[1000px] bg-orange-500/35 rounded-full blur-[180px]" />
      <div className="absolute bottom-[-250px] left-[-200px] w-[850px] h-[850px] bg-orange-700/20 rounded-full blur-[170px]" />

      {/* Card de Login */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-zinc-950/90 border border-orange-500/20 rounded-2xl p-8 shadow-[0_0_60px_rgba(255,115,0,0.15)] backdrop-blur-sm">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(255,115,0,0.5)] mx-auto">
              <span className="text-3xl font-black text-white">C</span>
            </div>
            <h1 className="text-3xl font-bold mt-4">
              CONEC<span className="text-orange-500">THON</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-1">Hub Contábil Inteligente</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-zinc-400 text-sm mb-2">
                🔒 Acesso Restrito
              </label>
              <input
                type="password"
                placeholder="Digite a senha de acesso"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 rounded-xl bg-zinc-900 border border-orange-500/20 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition"
                autoFocus
              />
            </div>

            {erro && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                ❌ {erro}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-500 text-black font-bold hover:bg-orange-400 transition shadow-[0_0_20px_rgba(255,115,0,0.3)]"
            >
              Entrar no CONECTHON →
            </button>
          </form>

          <p className="text-zinc-600 text-xs text-center mt-6">
            Sistema interno da Contagil Contabilidade
          </p>
        </div>
      </div>
    </div>
  )
}