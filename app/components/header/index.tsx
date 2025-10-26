import { Bot } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-5 right-50 left-50 z-50 border-b border-blue-200 backdrop-blur-xl bg-white/80 rounded-4xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                NALA Ai 
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Características</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Precios</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Chat AI</a>
              <button onClick={() => window.location.href = "/registro"} className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-4xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105">
                Registrarse
              </button>
            </div>
          </div>
        </nav>
  );
}