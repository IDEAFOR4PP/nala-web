'use client';

import { useState } from 'react';
import { User, Building2, Plus, X, Save, Phone, FileText, Package, LogOut, Menu, ChevronRight, Trash2, Edit } from 'lucide-react';

interface Article {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface Business {
  id: string;
  name: string;
  type: string;
  description: string;
  whatsapp: string;
  articles: Article[];
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'profile' | 'businesses'>('profile');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [showNewBusinessForm, setShowNewBusinessForm] = useState(false);
  const [showEditArticle, setShowEditArticle] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [userProfile] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+52 555 123 4567',
    company: 'Mi Empresa S.A.',
    plan: 'Professional',
    joinedDate: '15 Enero 2025',
  });

  const [businesses, setBusinesses] = useState<Business[]>([
    {
      id: '1',
      name: 'Tienda de Ropa Fashion',
      type: 'Retail - Moda',
      description: 'Tienda moderna y juvenil enfocada en ropa casual y deportiva',
      whatsapp: '+52 555 100 2000',
      articles: [
        { id: 'a1', name: 'Playera Básica', price: 299, description: 'Playera de algodón 100%' },
        { id: 'a2', name: 'Jeans Slim Fit', price: 899, description: 'Jeans azul mezclilla' },
      ],
    },
    {
      id: '2',
      name: 'Restaurante El Sabor',
      type: 'Restaurante - Comida Mexicana',
      description: 'Restaurante familiar con comida tradicional mexicana',
      whatsapp: '+52 555 200 3000',
      articles: [
        { id: 'b1', name: 'Tacos al Pastor', price: 85, description: 'Orden de 4 tacos' },
        { id: 'b2', name: 'Quesadillas', price: 70, description: 'Con queso oaxaca' },
      ],
    },
  ]);

  const [newBusiness, setNewBusiness] = useState<Omit<Business, 'id'>>({
    name: '',
    type: '',
    description: '',
    whatsapp: '',
    articles: [],
  });

  const [newArticle, setNewArticle] = useState<Omit<Article, 'id'>>({
    name: '',
    price: 0,
    description: '',
  });

  const handleCreateBusiness = () => {
    if (!newBusiness.name || !newBusiness.type || !newBusiness.whatsapp) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const business: Business = {
      ...newBusiness,
      id: Date.now().toString(),
    };

    setBusinesses([...businesses, business]);
    setNewBusiness({ name: '', type: '', description: '', whatsapp: '', articles: [] });
    setShowNewBusinessForm(false);
  };

  const handleDeleteBusiness = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este negocio?')) {
      setBusinesses(businesses.filter(b => b.id !== id));
      if (selectedBusiness?.id === id) {
        setSelectedBusiness(null);
      }
    }
  };

  const handleAddArticle = () => {
    if (!selectedBusiness || !newArticle.name || !newArticle.price) {
      alert('Por favor completa los datos del artículo');
      return;
    }

    const article: Article = {
      ...newArticle,
      id: Date.now().toString(),
    };

    const updatedBusiness = {
      ...selectedBusiness,
      articles: [...selectedBusiness.articles, article],
    };

    setBusinesses(businesses.map(b => b.id === selectedBusiness.id ? updatedBusiness : b));
    setSelectedBusiness(updatedBusiness);
    setNewArticle({ name: '', price: 0, description: '' });
    setShowEditArticle(false);
  };

  const handleDeleteArticle = (articleId: string) => {
    if (!selectedBusiness) return;
    
    if (confirm('¿Eliminar este artículo?')) {
      const updatedBusiness = {
        ...selectedBusiness,
        articles: selectedBusiness.articles.filter(a => a.id !== articleId),
      };
      
      setBusinesses(businesses.map(b => b.id === selectedBusiness.id ? updatedBusiness : b));
      setSelectedBusiness(updatedBusiness);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200/35 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-0 -left-32 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 flex h-screen">
        <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} border-r border-blue-200 backdrop-blur-xl bg-white/80 transition-all duration-300 flex flex-col`}>
          <div className="p-6 border-b border-blue-200 flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="font-bold">Dashboard</span>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4">
            <button
              onClick={() => { setActiveSection('profile'); setSelectedBusiness(null); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 ${
                activeSection === 'profile' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-cyan-500/30 text-white' : 'hover:bg-blue-100'
              }`}
            >
              <User className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-semibold">Mi Perfil</span>}
            </button>

            <button
              onClick={() => { setActiveSection('businesses'); setSelectedBusiness(null); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === 'businesses' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-cyan-500/30 text-white' : 'hover:bg-blue-100'
              }`}
            >
              <Building2 className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-semibold">Mis Negocios</span>}
            </button>
          </nav>

          <div className="p-4 border-t border-blue-200">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-red-400 transition-all">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-semibold">Cerrar Sesión</span>}
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-8">
            {activeSection === 'profile' && (
              <div>
                <h1 className="text-4xl font-bold mb-8">
                  Mi <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Perfil</span>
                </h1>

                <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl font-bold">
                      {userProfile.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm">
                        Plan {userProfile.plan}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <label className="text-sm text-gray-600 mb-1 block">Correo Electrónico</label>
                      <p className="text-gray-900 font-semibold">{userProfile.email}</p>
                    </div>
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <label className="text-sm text-gray-600 mb-1 block">Teléfono</label>
                      <p className="text-gray-900 font-semibold">{userProfile.phone}</p>
                    </div>
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <label className="text-sm text-gray-600 mb-1 block">Empresa</label>
                      <p className="text-gray-900 font-semibold">{userProfile.company}</p>
                    </div>
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <label className="text-sm text-gray-600 mb-1 block">Miembro desde</label>
                      <p className="text-gray-900 font-semibold">{userProfile.joinedDate}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
                      Editar Perfil
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'businesses' && !selectedBusiness && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-4xl font-bold">
                    Mis <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Negocios</span>
                  </h1>
                  <button
                    onClick={() => setShowNewBusinessForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
                  >
                    <Plus className="w-5 h-5" />
                    Agregar Negocio
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {businesses.map((business) => (
                    <div
                      key={business.id}
                      className="border border-blue-200 rounded-xl backdrop-blur-xl bg-white/80 p-6 hover:bg-blue-100 transition-all cursor-pointer group"
                      onClick={() => setSelectedBusiness(business)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteBusiness(business.id); }}
                          className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{business.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{business.type}</p>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{business.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{business.articles.length} artículos</span>
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {showNewBusinessForm && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/95 p-8 max-w-2xl w-full max-h-[90vh] overflow-auto">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Nuevo Negocio</h2>
                        <button onClick={() => setShowNewBusinessForm(false)} className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Nombre del Negocio *</label>
                          <input
                            type="text"
                            value={newBusiness.name}
                            onChange={(e) => setNewBusiness({ ...newBusiness, name: e.target.value })}
                            placeholder="Ej: Tienda de Ropa Fashion"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Tipo de Negocio *</label>
                          <input
                            type="text"
                            value={newBusiness.type}
                            onChange={(e) => setNewBusiness({ ...newBusiness, type: e.target.value })}
                            placeholder="Ej: Retail - Moda"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Descripción / Personalidad</label>
                          <textarea
                            value={newBusiness.description}
                            onChange={(e) => setNewBusiness({ ...newBusiness, description: e.target.value })}
                            placeholder="Describe la personalidad y enfoque de tu negocio..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Número de WhatsApp *</label>
                          <input
                            type="tel"
                            value={newBusiness.whatsapp}
                            onChange={(e) => setNewBusiness({ ...newBusiness, whatsapp: e.target.value })}
                            placeholder="+52 555 123 4567"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                          />
                        </div>

                        <div className="flex gap-3 pt-4">
                          <button
                            onClick={handleCreateBusiness}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                          >
                            <Save className="w-5 h-5" />
                            Crear Negocio
                          </button>
                          <button
                            onClick={() => setShowNewBusinessForm(false)}
                            className="px-6 py-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'businesses' && selectedBusiness && (
              <div>
                <button
                  onClick={() => setSelectedBusiness(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
                >
                  ← Volver a mis negocios
                </button>

                <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/80 p-8 mb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{selectedBusiness.name}</h1>
                        <p className="text-cyan-400">{selectedBusiness.type}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <label className="text-sm text-gray-400">Descripción / Personalidad</label>
                      </div>
                      <p className="text-gray-900">{selectedBusiness.description}</p>
                    </div>

                    <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <label className="text-sm text-gray-400">WhatsApp</label>
                      </div>
                      <p className="text-gray-900 font-semibold">{selectedBusiness.whatsapp}</p>
                    </div>
                  </div>

                  <div className="border-t border-blue-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Package className="w-6 h-6" />
                        Artículos Cargados
                      </h3>
                      <button
                        onClick={() => setShowEditArticle(true)}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all text-sm flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Agregar Artículo
                      </button>
                    </div>

                    {selectedBusiness.articles.length === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p>No hay artículos cargados</p>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedBusiness.articles.map((article) => (
                          <div
                            key={article.id}
                            className="border border-blue-200 rounded-xl p-4 bg-blue-50 hover:bg-blue-100 transition-all group"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-lg">{article.name}</h4>
                              <button
                                onClick={() => handleDeleteArticle(article.id)}
                                className="p-1 hover:bg-red-500/20 rounded text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-2xl font-bold text-cyan-400 mb-2">${article.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-600">{article.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {showEditArticle && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="border border-blue-200 rounded-2xl backdrop-blur-xl bg-white/95 p-8 max-w-lg w-full">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Nuevo Artículo</h2>
                        <button onClick={() => setShowEditArticle(false)} className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Nombre del Artículo *</label>
                          <input
                            type="text"
                            value={newArticle.name}
                            onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
                            placeholder="Ej: Playera Básica"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Precio *</label>
                          <input
                            type="number"
                            value={newArticle.price || ''}
                            onChange={(e) => setNewArticle({ ...newArticle, price: parseFloat(e.target.value) || 0 })}
                            placeholder="299.00"
                            step="0.01"
                            min="0"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Descripción</label>
                          <textarea
                            value={newArticle.description}
                            onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                            placeholder="Describe el artículo..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                          />
                        </div>

                        <div className="flex gap-3 pt-4">
                          <button
                            onClick={handleAddArticle}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                          >
                            <Save className="w-5 h-5" />
                            Agregar
                          </button>
                          <button
                            onClick={() => setShowEditArticle(false)}
                            className="px-6 py-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
