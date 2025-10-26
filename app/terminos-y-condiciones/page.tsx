'use client';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ChevronDown, ChevronUp, FileText, AlertCircle, Scale, CreditCard, UserX, Briefcase } from 'lucide-react';

export default function TerminosYCondiciones() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Aceptación de los Términos",
      content: (
        <>
          <p className="mb-4">
            Al acceder y utilizar NALA IA, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Estos términos constituyen un acuerdo legal vinculante entre tú (el "Usuario" o "Cliente") y NALA IA</li>
            <li>Al registrarte, confirmas que tienes al menos 18 años y capacidad legal para celebrar contratos</li>
            <li>Si representas a una empresa, garantizas tener autoridad para vincular a esa entidad a estos términos</li>
            <li>Tu uso continuado del servicio constituye aceptación de cualquier modificación a estos términos</li>
          </ul>
        </>
      )
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Descripción del Servicio",
      content: (
        <>
          <p className="mb-4">
            NALA IA proporciona una plataforma de asistente virtual con inteligencia artificial que permite:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Automatización de ventas:</strong> Gestión automática de consultas y pedidos de clientes vía WhatsApp</li>
            <li><strong>Catálogo digital:</strong> Administración y presentación de productos y servicios</li>
            <li><strong>Procesamiento con IA:</strong> Respuestas inteligentes y contextualizadas a consultas de clientes</li>
            <li><strong>Análisis y reportes:</strong> Estadísticas sobre interacciones, ventas y rendimiento</li>
            <li><strong>Integración con WhatsApp Business API:</strong> Comunicación fluida con tus clientes</li>
          </ul>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Nota: NALA IA no garantiza resultados específicos de ventas. El éxito depende de múltiples factores incluyendo la calidad de tus productos, precios y estrategia comercial.
          </p>
        </>
      )
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "Registro y Cuenta",
      content: (
        <>
          <h3 className="text-lg font-semibold mb-3">Requisitos de Registro:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Proporcionar información veraz, precisa y completa</li>
            <li>Mantener actualizada tu información de cuenta</li>
            <li>Ser mayor de 18 años</li>
            <li>Tener un negocio legítimo</li>
            <li>Cumplir con todas las leyes aplicables en tu jurisdicción</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Responsabilidades del Usuario:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Seguridad de la cuenta:</strong> Eres responsable de mantener la confidencialidad de tus credenciales</li>
            <li><strong>Actividad de la cuenta:</strong> Eres responsable de todas las actividades que ocurran bajo tu cuenta</li>
            <li><strong>Notificación de violaciones:</strong> Debes notificarnos inmediatamente sobre cualquier uso no autorizado</li>
            <li><strong>Una cuenta por persona/negocio:</strong> No se permiten múltiples cuentas sin autorización previa</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Prohibiciones:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vender, transferir o ceder tu cuenta a terceros</li>
            <li>Compartir credenciales de acceso</li>
            <li>Crear cuentas mediante medios automatizados o con información falsa</li>
            <li>Utilizar el servicio para actividades ilegales o fraudulentas</li>
          </ul>
        </>
      )
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagos y Facturación",
      content: (
        <>
          <h3 className="text-lg font-semibold mb-3">Planes y Precios:</h3>
          <p className="mb-4">
            NALA IA ofrece diferentes planes de suscripción. Los precios están claramente indicados en nuestra página de precios y pueden variar según:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Nivel del plan seleccionado (Básico, Pro, Enterprise)</li>
            <li>Volumen de mensajes procesados</li>
            <li>Funcionalidades adicionales contratadas</li>
            <li>País o región donde operas</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Facturación:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Ciclo de facturación:</strong> Mensual o anual según tu elección</li>
            <li><strong>Renovación automática:</strong> Tu suscripción se renueva automáticamente al final de cada período</li>
            <li><strong>Métodos de pago:</strong> Aceptamos tarjetas de crédito/débito y transferencias bancarias</li>
            <li><strong>Facturación anticipada:</strong> El pago se realiza al inicio de cada período de facturación</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Reembolsos:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Período de prueba:</strong> Puedes cancelar durante los primeros 14 días y recibir reembolso completo</li>
            <li><strong>Después del período de prueba:</strong> No se ofrecen reembolsos por cancelaciones</li>
            <li><strong>Excepción:</strong> Reembolsos pueden considerarse si el servicio presenta fallas técnicas significativas</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Cambios de Precio:</h3>
          <p className="mb-2">
            Nos reservamos el derecho de modificar nuestros precios con 30 días de aviso previo. Los cambios no afectarán tu ciclo de facturación actual.
          </p>
        </>
      )
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Uso Aceptable",
      content: (
        <>
          <p className="mb-4">
            Al utilizar NALA IA, te comprometes a:
          </p>
          
          <h3 className="text-lg font-semibold mb-3 text-green-600">Usos Permitidos:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Comunicación legítima con clientes reales</li>
            <li>Venta de productos y servicios legales</li>
            <li>Atención al cliente y soporte</li>
            <li>Marketing y promociones con consentimiento del receptor</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-red-600">Usos Prohibidos:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Spam:</strong> Envío masivo de mensajes no solicitados</li>
            <li><strong>Contenido ilegal:</strong> Venta de productos ilegales, pirateados o robados</li>
            <li><strong>Fraude:</strong> Esquemas piramidales, estafas o engaños</li>
            <li><strong>Contenido ofensivo:</strong> Discurso de odio, acoso, pornografía o violencia</li>
            <li><strong>Violación de derechos:</strong> Infracción de propiedad intelectual o marcas registradas</li>
            <li><strong>Interferencia:</strong> Intentos de hackear, sobrecargar o interferir con el servicio</li>
            <li><strong>Suplantación:</strong> Hacerse pasar por otra persona o entidad</li>
            <li><strong>Recopilación de datos:</strong> Scraping o recopilación no autorizada de información de usuarios</li>
          </ul>

          <p className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <strong>Consecuencias:</strong> El incumplimiento de estas políticas puede resultar en suspensión inmediata o terminación permanente de tu cuenta sin reembolso.
          </p>
        </>
      )
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Propiedad Intelectual y Licencia",
      content: (
        <>
          <h3 className="text-lg font-semibold mb-3">Propiedad de NALA IA:</h3>
          <p className="mb-4">
            Todo el contenido, software, código, diseños, logos, marcas y tecnología de NALA IA son propiedad exclusiva de NALA IA y están protegidos por leyes de propiedad intelectual.
          </p>

          <h3 className="text-lg font-semibold mb-3 mt-6">Licencia Otorgada a Ti:</h3>
          <p className="mb-2">
            Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Acceder y usar el servicio conforme a estos términos</li>
            <li>Utilizar la plataforma para tu negocio legítimo</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Tu Contenido:</h3>
          <p className="mb-2">
            Conservas todos los derechos sobre el contenido que proporcionas (catálogos, descripciones, imágenes). Al usar NALA IA, nos otorgas una licencia para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Almacenar y procesar tu contenido</li>
            <li>Mostrar tu contenido a tus clientes a través de WhatsApp</li>
            <li>Utilizar tu contenido para entrenar y mejorar nuestros modelos de IA (de forma anonimizada)</li>
            <li>Realizar copias de respaldo de tu contenido</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Restricciones:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>No puedes copiar, modificar o distribuir nuestro software</li>
            <li>No puedes realizar ingeniería inversa de nuestra plataforma</li>
            <li>No puedes crear productos derivados basados en nuestro servicio</li>
            <li>No puedes eliminar avisos de derechos de autor o propiedad</li>
          </ul>
        </>
      )
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
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 py-24 mt-16">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Lee detenidamente los términos que rigen el uso de NALA IA
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Última actualización: 25 de Octubre de 2025
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Acuerdo Legal</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Estos Términos y Condiciones ("Términos") regulan tu acceso y uso de NALA IA, incluyendo nuestra plataforma web, servicios de inteligencia artificial, y todas las funcionalidades relacionadas (colectivamente, el "Servicio").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Por favor, lee estos términos cuidadosamente antes de utilizar nuestro servicio. Al acceder o utilizar NALA IA, reconoces que has leído, entendido y aceptado estos términos en su totalidad.
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedSection === index && (
                  <div className="px-8 pb-8 text-gray-700 dark:text-gray-300">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="mt-8 space-y-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Limitación de Responsabilidad</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                NALA IA se proporciona "tal cual" y "según disponibilidad". No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>No somos responsables por:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Pérdidas de ventas, ingresos o datos</li>
                <li>Daños indirectos, incidentales o consecuentes</li>
                <li>Interrupciones del servicio por causas fuera de nuestro control</li>
                <li>Acciones de terceros (incluyendo WhatsApp)</li>
                <li>Contenido o comportamiento de tus clientes</li>
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Terminación del Servicio</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Puedes cancelar tu cuenta en cualquier momento:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Desde la configuración de tu cuenta</li>
                <li>Contactando a nuestro soporte</li>
                <li>La cancelación se hace efectiva al final del período de facturación actual</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Podemos suspender o terminar tu cuenta si:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Violas estos términos</li>
                <li>Incumples con los pagos</li>
                <li>Tu actividad pone en riesgo nuestro servicio o usuarios</li>
                <li>Así lo requiere la ley</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 backdrop-blur-lg rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad de México.
              </p>
              <h3 className="text-lg font-semibold mb-3 mt-6">Contacto Legal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Para cuestiones legales o contractuales:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Email: <a href="mailto:legal@nala-ia.com" className="text-blue-600 hover:underline">legal@nala-ia.com</a></li>
                <li>Email general: <a href="mailto:contacto@nala-ia.com" className="text-blue-600 hover:underline">contacto@nala-ia.com</a></li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              ¿Tienes preguntas sobre estos términos?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacidad" className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-lg transition-all">
                Ver Política de Privacidad
              </a>
              <a href="/contacto" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105">
                Contactar Soporte
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
