import { Check } from 'lucide-react';
const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mes",
      description: "Perfecto para comenzar",
      features: [
        "1,000 mensajes/mes",
        "1 número de WhatsApp",
        "Respuestas básicas IA",
      ],
      cta: "Comenzar Gratis",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/mes",
      description: "Para negocios en crecimiento",
      features: [
        "10,000 mensajes/mes",
        "2 números de WhatsApp",
        "IA avanzada con aprendizaje",
        "Analytica de uso",
        "Soporte prioritario",
      ],
      cta: "Comenzar Ahora",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Solución empresarial completa",
      features: [
        "Mensajes ilimitados",
        "Números ilimitados",
        "IA personalizada",
        "Soporte 24/7 dedicado",
        "Analitica avanzada",
      ],
      cta: "Contactar Ventas",
      popular: false,
    },
  ];


export default function Plans() {
    return (
           <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Precios
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Transparentes</span>
            </h2>
            <p className="text-xl text-gray-600">Elige el plan perfecto para tu negocio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 relative ${
                  plan.popular
                    ? 'border-cyan-400 bg-gradient-to-b from-cyan-50 to-blue-50 shadow-lg shadow-cyan-200'
                    : 'border-blue-200 bg-blue-50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-300 text-white'
                    : 'border border-blue-300 hover:bg-blue-100 text-gray-900'
                }`}>
                  {plan.cta}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
    );
  };
