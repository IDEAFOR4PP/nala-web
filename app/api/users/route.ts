import { NextRequest, NextResponse } from 'next/server';

// URL del backend real - configurable por variable de entorno
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 
  'http://whspai-backend-0yik3p-cd0ce1-89-116-50-152.traefik.me';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🔵 API Route - Request recibido:', body);
    console.log('🔵 API Route - Backend URL:', BACKEND_URL);

    const response = await fetch(`${BACKEND_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('🟢 API Route - Response status:', response.status);
    
    // Intentar leer la respuesta como JSON
    let data;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log('⚠️ API Route - Respuesta no es JSON:', text);
      data = { message: text };
    }

    console.log('🟢 API Route - Response data:', data);

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('🔴 Error en proxy de usuarios:', error);
    console.error('🔴 Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json(
      { 
        error: 'Error al procesar la solicitud',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Manejar OPTIONS para CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
