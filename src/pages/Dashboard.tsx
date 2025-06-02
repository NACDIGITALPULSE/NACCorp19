
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { ArrowLeft, FileText, Clock, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Dashboard = () => {
  const [userId] = useState('user-123'); // Dans un vrai projet, ceci viendrait de l'authentification
  const { procedures, isLoading, getStatusColor, getStatusText, getEstimatedCompletion, overallProgress } = useProgressTracking(userId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 max-w-6xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-niger-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement de votre tableau de bord...</p>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | null) => {
    if (!date) return '-';
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const getRemainingDays = (procedure: any) => {
    const estimated = getEstimatedCompletion(procedure);
    if (!estimated || procedure.status === 'completed') return null;
    
    const diffTime = estimated.getTime() - new Date().getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 max-w-6xl mx-auto px-4 pb-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Suivez l'avancement de vos procédures en temps réel
          </p>
        </div>

        {/* Progression globale */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-niger-green" />
              <span>Progression globale</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Avancement global</span>
                <span className="text-sm font-bold text-niger-orange">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">
                    {procedures.filter(p => p.status === 'waiting').length}
                  </div>
                  <div className="text-sm text-gray-700">En attente</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des procédures */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Vos procédures</h2>
          
          {procedures.map((procedure) => {
            const remainingDays = getRemainingDays(procedure);
            
            return (
              <Card key={procedure.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-niger-orange/10 rounded-lg">
                        <FileText className="w-5 h-5 text-niger-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{procedure.title}</h3>
                        <Badge className={`${getStatusColor(procedure.status)} mt-1`}>
                          {getStatusText(procedure.status)}
                        </Badge>
                      </div>
                    </div>
                    
                    {procedure.status === 'completed' && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                    )}
                  </div>

                  {/* Barre de progression */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progression</span>
                      <span className="text-sm font-bold text-niger-orange">{procedure.progress}%</span>
                    </div>
                    <Progress value={procedure.progress} className="h-2" />
                  </div>

                  {/* Informations de timing */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {procedure.startDate && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-xs text-gray-500">Date de début</div>
                          <div className="text-sm font-medium">{formatDate(procedure.startDate)}</div>
                        </div>
                      </div>
                    )}
                    
                    {remainingDays !== null && procedure.status !== 'completed' && (
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <div>
                          <div className="text-xs text-gray-500">Temps estimé restant</div>
                          <div className="text-sm font-medium">
                            {remainingDays > 0 ? `${remainingDays} jour${remainingDays > 1 ? 's' : ''}` : 'Bientôt terminé'}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {procedure.completionDate && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <div>
                          <div className="text-xs text-gray-500">Date de finalisation</div>
                          <div className="text-sm font-medium">{formatDate(procedure.completionDate)}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Prochaines étapes */}
                  {procedure.nextSteps && procedure.nextSteps.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-900 mb-2">Prochaines étapes :</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        {procedure.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section d'aide */}
        <Card className="mt-8 bg-gradient-to-r from-niger-orange/5 to-niger-green/5">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Besoin d'aide ou d'informations ?
            </h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <Link to="/contact">
              <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                Nous contacter
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
