'use client';

import { Bot, Mail, Lock, ArrowRight, Chrome, Github, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50" />
        
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute -bottom-32 right-1/4 w-[700px] h-[700px] bg-blue-200/35 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.7s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              NalaBot AI
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Bienvenido de nuevo</h1>
          <p className="text-gray-600">Inicia sesión para continuar</p>
        </div>

        {/* Login Card */}
        <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8 shadow-2xl shadow-blue-200">
          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all hover:scale-[1.02] backdrop-blur-sm">
              <Chrome className="w-5 h-5" />
              <span className="font-semibold">Continuar con Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all hover:scale-[1.02] backdrop-blur-sm">
              <Github className="w-5 h-5" />
              <span className="font-semibold">Continuar con GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 text-gray-600 backdrop-blur-sm">O continúa con email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 rounded-lg border border-blue-500/30 bg-black/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-blue-200 bg-white text-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 transition-all"
                />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Recordarme</span>
              </label>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 mt-6"
            >
              <span>Iniciar Sesión</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿No tienes una cuenta?{' '}
            <a href="/registro" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Regístrate gratis
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a href="/home" className="text-gray-500 hover:text-gray-700 text-sm transition-colors inline-flex items-center gap-1">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}