'use client';
import Header from '../components/header';
import Footer from '../components/footer';
import { Bot, Users, Target, Lightbulb, Heart, TrendingUp, Globe, Zap } from 'lucide-react';

export default function Nosotros() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de la tecnología de IA para ofrecer soluciones cada vez más inteligentes y efectivas."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Enfoque en el Cliente",
      description: "Tu éxito es nuestro éxito. Diseñamos cada función pensando en facilitar y potenciar tu negocio."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accesibilidad",
      description: "Creemos que la tecnología avanzada debe estar al alcance de todos los negocios, sin importar su tamaño."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Eficiencia",
      description: "Automatizamos procesos para que puedas dedicar más tiempo a lo que realmente importa: hacer crecer tu negocio."
    }
  ];

  const team = [
    {
      role: "Fundador & CEO",
      description: "Visionario tecnológico con más de 10 años de experiencia en IA y automatización empresarial."
    },
    {
      role: "CTO",
      description: "Experto en arquitectura de sistemas y machine learning, liderando el desarrollo de nuestra plataforma."
    },
    {
      role: "Head of Product",
      description: "Especialista en UX/UI enfocado en crear experiencias intuitivas y efectivas para nuestros usuarios."
    },
    {
      role: "Lead AI Engineer",
      description: "Ingeniero de IA responsable de entrenar y optimizar nuestros modelos de lenguaje natural."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Fundación",
      description: "NALA IA nace con la visión de democratizar la inteligencia artificial para pequeños y medianos negocios."
    },
    {
      year: "2024",
      title: "Primera Versión",
      description: "Lanzamiento de la plataforma beta con 100 negocios pioneros en México."
    },
    {
      year: "2024 Q3",
      title: "Expansión",
      description: "Alcanzamos 1,000+ negocios activos y procesamos más de 500,000 conversaciones mensuales."
    },
    {
      year: "2025",
      title: "Crecimiento Internacional",
      description: "Expansión a Latinoamérica y nuevas funcionalidades de IA avanzada."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-950" />
        
        {/* Nebulous Blue Blobs */}
        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-blue-200/35 dark:bg-blue-900/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute -bottom-24 right-1/3 w-[650px] h-[650px] bg-cyan-200/35 dark:bg-cyan-900/20 rounded-full blur-[155px] animate-pulse" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[135px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-24 mt-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-6">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Quiénes Somos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado por la inteligencia artificial y comprometidos con empoderar a los negocios locales mediante tecnología accesible y efectiva.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                NALA IA nació de una observación simple pero poderosa: millones de negocios locales luchan por atender eficientemente a sus clientes a través de WhatsApp, perdiendo oportunidades de venta y agotando su tiempo en tareas repetitivas.
              </p>
              <p>
                Fundada en 2023 por un equipo de ingenieros de IA y emprendedores, NALA IA se propuso democratizar el acceso a la inteligencia artificial conversacional. Queríamos que cualquier negocio, sin importar su tamaño o recursos técnicos, pudiera beneficiarse de un asistente virtual inteligente.
              </p>
              <p>
                Hoy, ayudamos a más de 1,000 negocios en Latinoamérica a automatizar sus ventas, mejorar su atención al cliente y escalar sus operaciones sin necesidad de contratar personal adicional. Procesamos más de medio millón de conversaciones cada mes, ayudando a cerrar ventas y satisfacer clientes 24/7.
              </p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">
                Nuestra meta es clara: convertir a cada pequeño y mediano negocio en una empresa tecnológicamente avanzada, capaz de competir con las grandes corporaciones.
              </p>
            </div>
          </div>

          {/* Mission & Vision Combined */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed text-blue-50">
                Empoderar a negocios locales de todos los tamaños con tecnología de inteligencia artificial accesible, permitiéndoles automatizar sus ventas, mejorar su atención al cliente y competir eficazmente en la era digital, mientras liberan tiempo para enfocarse en el crecimiento estratégico de sus empresas.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-lg leading-relaxed text-purple-50">
                Ser la plataforma líder de inteligencia artificial conversacional en Latinoamérica, transformando la forma en que millones de negocios se comunican con sus clientes, y democratizando el acceso a tecnología que antes solo estaba disponible para grandes corporaciones.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Camino</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white inline-block px-6 py-2 rounded-full font-bold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex-shrink-0" />
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Un grupo multidisciplinario de expertos en IA, desarrollo de software, diseño de producto y atención al cliente, unidos por la pasión de ayudar a los negocios a crecer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors rounded-r-xl"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{member.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">NALA IA en Números</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1,000+</div>
                <div className="text-blue-100">Negocios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500K+</div>
                <div className="text-blue-100">Conversaciones/Mes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Disponibilidad</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a la Revolución de la IA</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Forma parte de los miles de negocios que ya están transformando sus ventas con NALA IA
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/registro" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 shadow-lg"
              >
                Comenzar Ahora
              </a>
              <a 
                href="/contacto" 
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-lg font-semibold rounded-2xl hover:shadow-lg transition-all"
              >
                Hablar con Ventas
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
