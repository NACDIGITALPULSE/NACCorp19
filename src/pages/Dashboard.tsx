
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { ArrowRight, Building, Globe, Palette, FileText, Calculator, MessageSquare, Ship, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();
  const { procedures, isLoading, overallProgress } = useProgressTracking(user?.id);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="pt-24 max-w-6xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-niger-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement de votre tableau de bord...</p>
          </div>
        </div>
      </div>
    );
  }

  const allServices = [
    { 
      title: "Création NIF & RCCM", 
      description: "Obtenez votre Numéro d'Identification Fiscale et votre Registre de Commerce",
      link: "/inscription-nif-rccm", 
      icon: Building, 
      color: "bg-niger-orange",
      price: "À partir de 50,000 FCFA"
    },
    { 
      title: "Site Web Professionnel", 
      description: "Créez votre présence en ligne avec un site web moderne et responsive",
      link: "/website-service", 
      icon: Globe, 
      color: "bg-niger-green",
      price: "À partir de 150,000 FCFA"
    },
    { 
      title: "Design de Logo", 
      description: "Concevez l'identité visuelle de votre entreprise",
      link: "/logo-service", 
      icon: Palette, 
      color: "bg-blue-600",
      price: "À partir de 25,000 FCFA"
    },
    { 
      title: "Visibilité Online", 
      description: "Développez votre présence sur les réseaux sociaux",
      link: "/visibilite-en-ligne", 
      icon: MessageSquare, 
      color: "bg-purple-600",
      price: "À partir de 75,000 FCFA"
    },
    { 
      title: "Déclaration Fiscale", 
      description: "Gérez vos obligations fiscales en toute conformité",
      link: "/declaration-fiscale", 
      icon: FileText, 
      color: "bg-indigo-600",
      price: "À partir de 30,000 FCFA"
    },
    { 
      title: "Comptabilité", 
      description: "Tenue de livres et gestion comptable professionnelle",
      link: "/comptabilite", 
      icon: Calculator, 
      color: "bg-teal-600",
      price: "À partir de 100,000 FCFA"
    },
    { 
      title: "Société Offshore", 
      description: "Création de société offshore pour l'expansion internationale",
      link: "/offshore", 
      icon: Ship, 
      color: "bg-emerald-600",
      price: "À partir de 500,000 FCFA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NC</span>
                </div>
                <span className="font-playfair font-bold text-xl text-gray-900">
                  NACCORP
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5" />
                <span className="font-medium">
                  {profile ? `${profile.first_name} ${profile.last_name}` : user?.email}
                </span>
              </div>
              <Button onClick={handleLogout} variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section de bienvenue */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Bienvenue, {profile?.first_name || 'Cher client'} !
          </h1>
          <p className="text-gray-600">
            Choisissez le service dont vous avez besoin pour développer votre entreprise
          </p>
        </div>

        {/* Progression globale */}
        {procedures.length > 0 && (
          <Card className="mb-8 bg-gradient-to-r from-white to-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Mes procédures en cours</span>
                <span className="text-lg text-niger-orange font-bold">
                  {procedures.length} procédure{procedures.length > 1 ? 's' : ''}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {procedures.filter(p => p.status === 'completed').length}
                  </div>
                  <div className="text-sm text-green-700">Terminées</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {procedures.filter(p => p.status === 'in-progress').length}
                  </div>
                  <div className="text-sm text-orange-700">En cours</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {procedures.filter(p => p.status === 'pending').length}
                  </div>
                  <div className="text-sm text-blue-700">En attente</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tous les services disponibles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-niger-orange">{service.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-niger-orange transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Section d'aide */}
        <Card className="bg-gradient-to-r from-niger-orange/10 to-niger-green/10 border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Besoin d'aide ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est disponible pour vous accompagner dans toutes vos démarches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8">
                  Nous contacter
                </Button>
              </Link>
              <Link to="/tarifs">
                <Button size="lg" variant="outline" className="border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8">
                  Voir nos tarifs
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
