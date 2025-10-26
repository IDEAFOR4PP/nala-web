import { Bot } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

export default function Footer() {
  return (
    <footer className="border-t border-blue-200 dark:border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold">NALA IA</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Automatiza tus ventas con IA en WhatsApp
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Producto</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="/home#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Características</a></li>
                  <li><a href="/home#pricing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Precios</a></li>
                  <li><a href="/demo" className="hover:text-gray-900 dark:hover:text-white transition-colors">Demo</a></li>
                  <li><a href="/casos-de-uso" className="hover:text-gray-900 dark:hover:text-white transition-colors">Casos de Uso</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Recursos</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="/documentacion" className="hover:text-gray-900 dark:hover:text-white transition-colors">Documentación</a></li>
                  <li><a href="/api" className="hover:text-gray-900 dark:hover:text-white transition-colors">API</a></li>
                  <li><a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/soporte" className="hover:text-gray-900 dark:hover:text-white transition-colors">Soporte</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="/nosotros" className="hover:text-gray-900 dark:hover:text-white transition-colors">Quiénes Somos</a></li>
                  <li><a href="/nosotros#mision" className="hover:text-gray-900 dark:hover:text-white transition-colors">Misión y Visión</a></li>
                  <li><a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/contacto" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="/privacidad" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacidad</a></li>
                  <li><a href="/terminos-y-condiciones" className="hover:text-gray-900 dark:hover:text-white transition-colors">Términos y Condiciones</a></li>
                  <li><a href="/cookies" className="hover:text-gray-900 dark:hover:text-white transition-colors">Política de Cookies</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-blue-200 dark:border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 NALA IA. Todos los derechos reservados.</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Tema:</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
};
