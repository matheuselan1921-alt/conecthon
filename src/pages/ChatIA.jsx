import { useState } from "react"

export default function ChatIA() {
  const [mensagem, setMensagem] = useState("")
  const [respostas, setRespostas] = useState([])
  const [chatAberto, setChatAberto] = useState(false)

  // Pergunta que a IA "sabe" responder
  const perguntaConhecida = "o que é icms"
  const respostaConhecida = "ICMS é o Imposto sobre Circulação de Mercadorias e Serviços, de competência estadual. Ele incide sobre operações de circulação de mercadorias, transporte interestadual e intermunicipal, comunicação e energia elétrica. A alíquota varia conforme o estado e a operação."

  const handleEnviar = (e) => {
    e.preventDefault()
    if (!mensagem.trim()) return

    const perguntaUsuario = mensagem.toLowerCase().trim()
    let respostaIA = ""

    // Verifica se a pergunta é a conhecida
    if (perguntaUsuario.includes(perguntaConhecida) || perguntaUsuario === perguntaConhecida) {
      respostaIA = respostaConhecida
    } else {
      respostaIA = "📚 Ainda estou aprendendo sobre este assunto. Em breve, o assistente IA estará treinado para responder todas as dúvidas sobre normas fiscais, tributárias e trabalhistas. Por enquanto, consulte a base de documentos do CONECTHON."
    }

    setRespostas([...respostas, { pergunta: mensagem, resposta: respostaIA }])
    setMensagem("")
  }

  return (
    <>
      {/* Botão flutuante do chat */}
      <button
        onClick={() => setChatAberto(!chatAberto)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-400 shadow-[0_0_20px_rgba(255,115,0,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-105"
      >
        <span className="text-2xl">🤖</span>
      </button>

      {/* Janela do chat */}
      {chatAberto && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-zinc-950 border border-orange-500/20 rounded-2xl shadow-[0_0_40px_rgba(255,115,0,0.2)] flex flex-col overflow-hidden backdrop-blur-sm">
          
          {/* Cabeçalho */}
          <div className="p-4 bg-gradient-to-r from-orange-500/20 to-transparent border-b border-orange-500/20 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">🤖 Assistente IA Contábil</h3>
              <p className="text-xs text-zinc-500">Em fase de treinamento</p>
            </div>
            <button
              onClick={() => setChatAberto(false)}
              className="text-zinc-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Mensagem inicial */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-sm">🤖</div>
              <div className="flex-1 bg-zinc-900 rounded-xl p-3 text-sm text-zinc-300">
                Olá! Sou o assistente IA do CONECTHON. Pergunte-me sobre <span className="text-orange-400 font-medium">"O que é ICMS?"</span> para um exemplo. Outras perguntas serão registradas para meu treinamento futuro.
              </div>
            </div>

            {/* Histórico de perguntas/respostas */}
            {respostas.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex gap-2 justify-end">
                  <div className="bg-orange-500/20 rounded-xl p-3 text-sm text-white max-w-[80%]">
                    {item.pergunta}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm">👤</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-sm">🤖</div>
                  <div className="flex-1 bg-zinc-900 rounded-xl p-3 text-sm text-zinc-300">
                    {item.resposta}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleEnviar} className="p-4 border-t border-orange-500/20 flex gap-2">
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="flex-1 p-2 rounded-xl bg-zinc-900 border border-orange-500/20 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-orange-500 text-black font-medium hover:bg-orange-400 transition text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  )
}