'use client';

import { useState, useEffect } from 'react';
import { CreditCard, Lock, AlertCircle, CheckCircle, DollarSign, Calendar, User, Mail } from 'lucide-react';

// Tipos de MercadoPago
declare global {
  interface Window {
    MercadoPago: any;
  }
}

export default function Pagos() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [installments, setInstallments] = useState('1');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // TODO: Reemplazar con tu Public Key de MercadoPago
  const MERCADOPAGO_PUBLIC_KEY = 'APP_USR-2a9cd7ca-b592-4b74-89e2-255a137ca0a8';

  // Datos del pedido (ejemplo)
  const orderData = {
    plan: 'Professional',
    price: 99.00,
    description: 'Suscripción mensual - Plan Professional',
    features: [
      '10,000 mensajes/mes',
      '3 números de WhatsApp',
      'IA avanzada con aprendizaje',
      'Analytics completos',
    ],
  };

  useEffect(() => {
    // Cargar SDK de MercadoPago
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Formatear número de tarjeta
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Formatear fecha de expiración
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9]/gi, '').slice(0, 4);
    setCvv(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus('idle');
    setErrorMessage('');

    try {
      // Validaciones básicas
      if (!cardNumber || !cardHolder || !expiryDate || !cvv || !email || !docNumber) {
        throw new Error('Por favor completa todos los campos');
      }

      if (cardNumber.replace(/\s/g, '').length < 13) {
        throw new Error('Número de tarjeta inválido');
      }

      if (cvv.length < 3) {
        throw new Error('CVV inválido');
      }

      // Aquí va la integración con MercadoPago
      // Inicializar MercadoPago
      if (typeof window.MercadoPago === 'undefined') {
        throw new Error('Error al cargar MercadoPago. Recarga la página.');
      }

      const mp = new window.MercadoPago(MERCADOPAGO_PUBLIC_KEY);

      // Crear token de tarjeta
      const cardData = {
        cardNumber: cardNumber.replace(/\s/g, ''),
        cardholderName: cardHolder,
        cardExpirationMonth: expiryDate.split('/')[0],
        cardExpirationYear: '20' + expiryDate.split('/')[1],
        securityCode: cvv,
        identificationType: 'DNI', // o 'CPF', 'CUIT', etc según el país
        identificationNumber: docNumber,
      };

      // NOTA: Este código es un ejemplo de cómo usar la API
      // En producción, deberías llamar a tu backend que maneje el token
      console.log('Datos de tarjeta preparados:', cardData);
      console.log('Email:', email);
      console.log('Cuotas:', installments);

      // Simulación de pago exitoso (reemplazar con integración real)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // TODO: Aquí debes hacer el POST a tu backend con el token
      // const response = await fetch('/api/process-payment', {
      //   method: 'POST',
      //   body: JSON.stringify({ token, email, amount: orderData.price, installments }),
      // });

      setPaymentStatus('success');
      
    } catch (error: any) {
      console.error('Error en el pago:', error);
      setErrorMessage(error.message || 'Ocurrió un error al procesar el pago');
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50" />
        
        {/* Nebulous Blue Blobs */}
        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-blue-200/35 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute -bottom-24 right-1/3 w-[650px] h-[650px] bg-cyan-200/35 rounded-full blur-[155px] animate-pulse" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[135px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">
              Datos del <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pago</span>
            </h1>
            <p className="text-gray-600">Procesamiento seguro con MercadoPago</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
              <Lock className="w-4 h-4" />
              <span>Conexión segura SSL</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Datos de Pago</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                      required
                    />
                  </div>
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Número de Tarjeta *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                      required
                    />
                  </div>
                </div>

                {/* Card Holder */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Nombre del Titular *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                      placeholder="JUAN PEREZ"
                      className="w-full pl-11 pr-12 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900 uppercase"
                      required
                    />
                  </div>
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Vencimiento *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      CVV *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Document Number */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Número de Documento (DNI/CUIT) *
                  </label>
                  <input
                    type="text"
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="12345678"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                </div>

                {/* Installments */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Cuotas
                  </label>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-gray-900"
                  >
                    <option value="1">1 cuota sin interés</option>
                    <option value="3">3 cuotas</option>
                    <option value="6">6 cuotas</option>
                    <option value="12">12 cuotas</option>
                  </select>
                </div>

                {/* Error Message */}
                {paymentStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 font-semibold">Error en el pago</p>
                      <p className="text-red-300 text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Success Message */}
                {paymentStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-400 font-semibold">¡Pago exitoso!</p>
                      <p className="text-green-300 text-sm mt-1">Tu pago ha sido procesado correctamente</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing || paymentStatus === 'success'}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Pagar ${orderData.price.toFixed(2)}</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Al continuar, aceptas nuestros términos y condiciones
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>

                <div className="border border-blue-200 rounded-xl p-6 bg-blue-50 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{orderData.plan}</h3>
                      <span className="text-sm text-gray-700">{orderData.description}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-cyan-400">${orderData.price.toFixed(2)}</p>
                      <p className="text-xs text-gray-600">por mes</p>
                    </div>
                  </div>

                  <div className="border-t border-blue-200 pt-4 space-y-2">
                    {orderData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${orderData.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>IVA (21%)</span>
                    <span>${(orderData.price * 0.21).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-cyan-400">${(orderData.price * 1.21).toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-gray-900 font-semibold mb-1">Pago 100% Seguro</p>
                      <p className="text-gray-600">Procesado por MercadoPago con encriptación SSL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}