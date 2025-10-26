const steps = [
    {
        step: "01",
        title: "Conecta WhatsApp",
        description: "Vincula tu número de WhatsApp Business en segundos con nuestro asistente guiado",
      },
      {
        step: "02",
        title: "Configura tu IA",
        description: "Personaliza las respuestas, productos y flujos de ventas según tu negocio",
      },
      {
        step: "03",
        title: "¡Listo para Vender!",
        description: "Tu Bot empieza a responder y vender automáticamente.",
      },
];

export default function ConfigChat() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Configuración en
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> 3 Pasos</span>
            </h2>
            <p className="text-xl text-gray-600">Tan simple que no necesitas ser técnico</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-y-1/2" />
                )}
                <div className="border border-blue-200 rounded-xl p-8 backdrop-blur-sm bg-blue-50 hover:bg-blue-100 transition-all relative">
                  <div className="text-6xl font-bold text-blue-300 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    );
}