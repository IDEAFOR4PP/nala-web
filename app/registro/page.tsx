'use client';

import { Bot, Mail, Lock, ArrowRight, Eye, EyeOff, User, Building2, Phone } from 'lucide-react';
import { useState } from 'react';

import { ENDPOINT } from '../constantes';

export default function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    if (!formData.acceptTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    
    try {
      console.log('Registro attempt:', formData);

      const response = await fetch(ENDPOINT + 'users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.name,
          last_name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      
      console.log('Response:', response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Registro exitoso:', data);
      alert('¡Registro exitoso! Bienvenido a NalaBot AI');
      
      // Opcional: Redirigir al usuario después del registro exitoso
      // window.location.href = '/dashboard';
      
    } catch (error) {
      console.error('Error en el registro:', error);
      alert(`Error al registrar: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden flex items-center justify-center py-12">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50" />
        
        {/* Nebulous Blue Blobs */}
        <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-purple-200/30 rounded-full blur-[145px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -top-32 right-1/3 w-[600px] h-[600px] bg-blue-200/35 rounded-full blur-[135px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-24 w-[480px] h-[480px] bg-cyan-200/40 rounded-full blur-[155px] animate-pulse" style={{ animationDelay: '1.2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              NalaBot AI
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Crea tu cuenta</h1>
          <p className="text-gray-600">Comienza a automatizar tus ventas hoy</p>
        </div>

        {/* Register Card */}
        <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8 shadow-2xl shadow-blue-200">
          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email - Two columns */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Nombre completo
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Correo electrónico
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/1 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Phone and Company - Two columns */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                  Teléfono
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 555 123 4567"
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Company Input */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                  Empresa
                </label>
                <div className="relative">
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A."
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Password and Confirm Password - Two columns */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 rounded-lg border border-blue-200 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                    minLength={8}
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 rounded-lg border border-blue-200 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                    required
                    minLength={8}
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="text-xs text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-gray-700 mb-1">Tu contraseña debe contener:</p>
              <ul className="space-y-1 ml-4 list-disc">
                <li>Mínimo 8 caracteres</li>
                <li>Al menos una letra mayúscula y una minúscula</li>
                <li>Al menos un número</li>
              </ul>
            </div>

            {/* Terms & Conditions */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-blue-200 bg-white text-cyan focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 transition-all mt-0.5"
                  required
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  Acepto los{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">
                    términos y condiciones
                  </a>{' '}
                  y la{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">
                    política de privacidad
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 mt-6 text-white"
            >
              <span>Crear Cuenta</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs text-gray-600">
            <p>Al registrarte, obtienes 14 días de prueba gratis. No se requiere tarjeta de crédito.</p>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Inicia sesión
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
