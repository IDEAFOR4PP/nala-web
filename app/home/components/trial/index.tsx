export default function Trial() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="border border-blue-200 rounded-2xl p-12 md:p-16 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                ¿Listo para
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Revolucionar</span>
                <br />
                tus Ventas?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Únete a cientos de negocios que ya están automatizando sus ventas con IA
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-4 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/50">
                Prueba Gratis por 14 Días
              </button>
              <p className="text-gray-600 text-sm mt-4">No requiere tarjeta de crédito • Cancela cuando quieras</p>
            </div>
          </div>
        </section>
    );
};
