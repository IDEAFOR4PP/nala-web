import { MessageCircle, Sparkles, Phone } from 'lucide-react';

  const stats = [
    { value: "98%", label: "Satisfacción del Cliente" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "3X", label: "Aumento en Ventas" },
    { value: "< 5min", label: "Tiempo de Respuesta" },
  ];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Powered by IDEA Inc.</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Tu Asistente IA que
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vende por Ti 24/7
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforma tu WhatsApp Business en una máquina de ventas automatizada. 
            Responde consultas, cierra ventas y aumenta tu revenue mientras te enfocas en hacer crecer tu negocio.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4  rounded-4xl  font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/50">
              <Phone className="w-5 h-5" />
              Contratar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm bg-blue-500/5 hover:bg-blue-500/10 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10" />
            <div className="border border-blue-300 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 backdrop-blur-sm bg-gradient-to-br from-blue-50/80 to-purple-50/80 p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <MessageCircle className="w-32 h-32 text-blue-400/50" />
              </div>
            </div>
          </div>
        </section>
  )
};
