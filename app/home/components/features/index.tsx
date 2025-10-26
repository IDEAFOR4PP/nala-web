import { MessageCircle, Zap, Shield, TrendingUp, Bot, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Respuestas Instantáneas",
      description: "Tu chatbot responde 24/7 a consultas de clientes en tiempo real a través de WhatsApp",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "IA Inteligente",
      description: "Powered by advanced AI que aprende de cada conversación para mejorar continuamente",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumenta tus Ventas",
      description: "Cierra ventas automáticamente mientras duermes. Conversión optimizada por IA",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguro y Confiable",
      description: "Encriptación de extremo a extremo y cumplimiento total con normativas de privacidad",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instalación Rápida",
      description: "Configura tu chatbot en menos de 5 minutos. Sin código, sin complicaciones",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Poderosos",
      description: "Dashboard completo con métricas en tiempo real de conversaciones y conversiones",
    },
  ];

export default function Features() {
   const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
    return (
         <section id="features" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Características que
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Impulsan</span>
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para automatizar tus ventas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl p-8 backdrop-blur-sm bg-blue-50 hover:bg-blue-100 transition-all hover:scale-105 cursor-pointer group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 transition-transform ${hoveredFeature === index ? 'scale-110' : ''}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
    );
};