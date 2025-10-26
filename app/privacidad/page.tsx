'use client';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';

export default function Privacidad() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Información que Recopilamos",
      content: (
        <>
          <p className="mb-4">
            En NALA, recopilamos y procesamos diferentes tipos de información para brindarte el mejor servicio de asistente de ventas con inteligencia artificial a través de WhatsApp.
          </p>
          
          <h3 className="text-lg font-semibold mb-3 mt-6">Información que proporcionas directamente:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Datos de registro:</strong> Nombre, correo electrónico, número de teléfono, nombre del negocio</li>
            <li><strong>Información del negocio:</strong> Catálogo de productos, precios, horarios de atención, políticas comerciales</li>
            <li><strong>Conversaciones:</strong> Mensajes intercambiados a través de WhatsApp con tus clientes</li>
            <li><strong>Información de pago:</strong> Datos necesarios para procesar tu suscripción (procesados de forma segura)</li>
            <li><strong>Configuración y preferencias:</strong> Ajustes personalizados del bot, respuestas predefinidas</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Información que recopilamos automáticamente:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de uso:</strong> Interacciones con la plataforma, frecuencia de uso, funciones utilizadas</li>
            <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo, identificadores del dispositivo</li>
            <li><strong>Métricas de rendimiento:</strong> Tiempos de respuesta, tasa de conversión, satisfacción del cliente</li>
            <li><strong>Información de cookies:</strong> Datos para mejorar tu experiencia y recordar tus preferencias</li>
          </ul>
        </>
      )
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Cómo Utilizamos tu Información",
      content: (
        <>
          <p className="mb-4">
            Utilizamos la información recopilada para proporcionar, mejorar y personalizar nuestros servicios:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Prestación del servicio:</strong> Procesar y responder mensajes de clientes mediante IA, gestionar catálogos de productos, facilitar transacciones comerciales
            </li>
            <li>
              <strong>Mejora continua:</strong> Entrenar y optimizar nuestros modelos de IA para ofrecer respuestas más precisas y contextualizadas
            </li>
            <li>
              <strong>Personalización:</strong> Adaptar las respuestas automáticas al estilo, tono y necesidades específicas de tu negocio
            </li>
            <li>
              <strong>Análisis y reportes:</strong> Generar estadísticas sobre el rendimiento de tus ventas, métricas de interacción con clientes
            </li>
            <li>
              <strong>Soporte técnico:</strong> Resolver problemas técnicos y responder a tus consultas de manera eficiente
            </li>
            <li>
              <strong>Seguridad y prevención:</strong> Proteger contra fraude, abuso, spam y actividades ilegales
            </li>
            <li>
              <strong>Comunicaciones:</strong> Enviarte actualizaciones sobre el servicio, notificaciones importantes y contenido relevante
            </li>
            <li>
              <strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias aplicables
            </li>
          </ul>
        </>
      )
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Compartir tu Información",
      content: (
        <>
          <p className="mb-4 font-semibold text-blue-600">
            No vendemos tu información personal a terceros. Tu confianza es fundamental para nosotros.
          </p>
          <p className="mb-4">
            Compartimos información únicamente en los siguientes casos necesarios:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar (servicios de hosting, almacenamiento en la nube, procesamiento de pagos, análisis de datos). Todos están sujetos a acuerdos estrictos de confidencialidad
            </li>
            <li>
              <strong>WhatsApp Business API:</strong> Para facilitar la comunicación bidireccional con tus clientes a través de la plataforma
            </li>
            <li>
              <strong>Procesadores de pago:</strong> Para gestionar transacciones y suscripciones de manera segura
            </li>
            <li>
              <strong>Requerimientos legales:</strong> Cuando sea necesario para cumplir con la ley, órdenes judiciales, o proteger derechos y seguridad
            </li>
            <li>
              <strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta de activos (con previo aviso)
            </li>
            <li>
              <strong>Con tu consentimiento:</strong> En cualquier otro caso, solo con tu autorización explícita
            </li>
          </ul>
        </>
      )
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Seguridad de los Datos",
      content: (
        <>
          <p className="mb-4">
            Implementamos medidas de seguridad técnicas, físicas y organizativas robustas para proteger tu información:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Encriptación:</strong> Datos encriptados en tránsito (TLS/SSL) y en reposo (AES-256)</li>
            <li><strong>Autenticación:</strong> Autenticación de dos factores (2FA) disponible para acceso a cuentas</li>
            <li><strong>Control de acceso:</strong> Acceso limitado solo a personal autorizado con necesidad legítima</li>
            <li><strong>Monitoreo continuo:</strong> Sistemas de detección de intrusiones y actividades sospechosas</li>
            <li><strong>Auditorías de seguridad:</strong> Evaluaciones periódicas de vulnerabilidades y pruebas de penetración</li>
            <li><strong>Respaldo de datos:</strong> Copias de seguridad regulares para prevenir pérdida de información</li>
            <li><strong>Protección contra ataques:</strong> Firewalls, sistemas anti-DDoS y protección contra malware</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Sin embargo, ningún sistema es 100% seguro. Te recomendamos usar contraseñas fuertes y no compartir tus credenciales.
          </p>
        </>
      )
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tus Derechos y Control",
      content: (
        <>
          <p className="mb-4">
            Tienes control sobre tu información personal y puedes ejercer los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Acceso:</strong> Solicitar una copia de toda la información que tenemos sobre ti
            </li>
            <li>
              <strong>Rectificación:</strong> Corregir información inexacta o incompleta
            </li>
            <li>
              <strong>Eliminación:</strong> Solicitar la eliminación de tu información personal ("derecho al olvido")
            </li>
            <li>
              <strong>Portabilidad:</strong> Obtener tus datos en un formato estructurado y legible para transferirlos
            </li>
            <li>
              <strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines
            </li>
            <li>
              <strong>Limitación:</strong> Restringir el procesamiento de tu información en ciertas circunstancias
            </li>
            <li>
              <strong>Revocación del consentimiento:</strong> Retirar tu consentimiento en cualquier momento
            </li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, contáctanos en: <a href="mailto:privacidad@nala-ia.com" className="text-blue-600 hover:underline">privacidad@nala-ia.com</a>
          </p>
        </>
      )
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Retención y Eliminación de Datos",
      content: (
        <>
          <p className="mb-4">
            Retenemos tu información personal solo durante el tiempo necesario para cumplir con los fines descritos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Cuenta activa:</strong> Mientras mantengas una cuenta activa con nosotros</li>
            <li><strong>Obligaciones legales:</strong> El tiempo requerido por ley (generalmente 5-10 años para registros financieros)</li>
            <li><strong>Resolución de disputas:</strong> Hasta que se resuelvan conflictos o reclamaciones</li>
            <li><strong>Datos agregados:</strong> Información anonimizada puede retenerse indefinidamente para análisis estadísticos</li>
          </ul>
          <p className="mb-4">
            <strong>Eliminación de cuenta:</strong> Si cierras tu cuenta, eliminaremos o anonimizaremos tu información personal dentro de 90 días, excepto donde la ley requiera retención adicional.
          </p>
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Tu privacidad es fundamental. Conoce cómo protegemos y manejamos tu información.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Última actualización: 25 de Octubre de 2025
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Bienvenido a NALA IA</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              En NALA IA, nos comprometemos a proteger tu privacidad y la de tus clientes. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella. NALA IA es una plataforma de asistente virtual con inteligencia artificial que permite a negocios locales automatizar su comunicación con clientes a través de WhatsApp, facilitando la venta de productos y servicios de manera eficiente y personalizada.
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

          {/* Additional Important Information */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 backdrop-blur-lg rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Información Adicional Importante</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cookies y Tecnologías Similares</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Utilizamos cookies, píxeles y tecnologías similares para mejorar tu experiencia, recordar preferencias y analizar el uso de nuestro servicio. Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Menores de Edad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  NALA IA está dirigido a negocios y usuarios mayores de 18 años. No recopilamos intencionalmente información de menores de edad. Si detectamos que un menor ha proporcionado información, la eliminaremos de inmediato.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Transferencias Internacionales</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tu información puede ser transferida y procesada en servidores ubicados fuera de tu país de residencia. Implementamos salvaguardas apropiadas para proteger tu información conforme a esta política y las leyes aplicables.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cambios a Esta Política</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos por correo electrónico o mediante un aviso destacado en nuestro servicio. Te recomendamos revisar esta página periódicamente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Si tienes preguntas, inquietudes o deseas ejercer tus derechos de privacidad, puedes contactarnos:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Email: <a href="mailto:privacidad@nala-ia.com" className="text-blue-600 hover:underline">privacidad@nala-ia.com</a></li>
                  <li>Email general: <a href="mailto:contacto@nala-ia.com" className="text-blue-600 hover:underline">contacto@nala-ia.com</a></li>
                  <li>WhatsApp: +52 55 1234 5678</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              ¿Tienes más preguntas sobre cómo protegemos tu información?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/terminos-y-condiciones" className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-lg transition-all">
                Ver Términos y Condiciones
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