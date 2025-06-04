
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StatusSysteme = () => {
  const services = [
    {
      name: "Plateforme Web",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "Aucun"
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.8%",
      lastIncident: "Aucun"
    },
    {
      name: "Base de données",
      status: "operational",
      uptime: "100%",
      lastIncident: "Aucun"
    },
    {
      name: "Service d'email",
      status: "operational",
      uptime: "99.7%",
      lastIncident: "Maintenance - 2 jours"
    },
    {
      name: "Upload de fichiers",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "Aucun"
    },
    {
      name: "Notifications",
      status: "operational",
      uptime: "99.5%",
      lastIncident: "Aucun"
    }
  ];

  const incidents = [
    {
      date: "2024-01-15",
      title: "Maintenance programmée",
      description: "Mise à jour de sécurité du système",
      status: "resolved",
      duration: "2h"
    },
    {
      date: "2024-01-10",
      title: "Ralentissement temporaire",
      description: "Charge élevée sur les serveurs",
      status: "resolved",
      duration: "30min"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Opérationnel</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Dégradé</Badge>;
      case 'outage':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Hors service</Badge>;
      case 'resolved':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Résolu</Badge>;
      default:
        return <Badge variant="secondary">Inconnu</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Status du Système
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Surveillez l'état de nos services en temps réel
            </p>
          </div>

          {/* Overall Status */}
          <Card className="mb-8 border-green-200 dark:bg-gray-800 dark:border-green-700">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <CardTitle className="text-2xl text-green-700 dark:text-green-400">Tous les systèmes sont opérationnels</CardTitle>
              </div>
              <CardDescription className="dark:text-gray-400">
                Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')} à {new Date().toLocaleTimeString('fr-FR')}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Services Status */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">État des Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Disponibilité: {service.uptime} | Dernier incident: {service.lastIncident}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Incidents Récents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg dark:text-white">{incident.title}</CardTitle>
                      {getStatusBadge(incident.status)}
                    </div>
                    <CardDescription className="dark:text-gray-400">
                      {incident.date} | Durée: {incident.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{incident.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StatusSysteme;
