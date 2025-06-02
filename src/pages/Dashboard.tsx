
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { ArrowLeft, FileText, Clock, CheckCircle, AlertCircle, Download, LogOut, User, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userId] = useState(user?.id || 'user-123');
  const { procedures, isLoading, getStatusColor, getStatusText, getEstimatedCompletion, overallProgress } = useProgressTracking(userId);

  const handleLogout = () => {
    logout();
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

  const quickActions = [
    { title: "Nouveau NIF/RCCM", link: "/inscription-nif-rccm", color: "bg-niger-orange" },
    { title: "Site Web", link: "/website-service", color: "bg-niger-green" },
    { title: "Logo Design", link: "/logo-service", color: "bg-blue-600" },
    { title: "Visibilité Online", link: "/visibilite-en-ligne", color: "bg-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header moderne */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NE</span>
                </div>
                <span className="font-playfair font-bold text-xl text-gray-900">
                  Niger EntreprenderHub
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5" />
                <span className="font-medium">{user?.firstName} {user?.lastName}</span>
              </div>
              <Button onClick={handleLogout} variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Bienvenue, {user?.firstName} !
          </h1>
          <p className="text-gray-600">
            Suivez l'avancement de vos procédures et gérez vos projets entrepreneuriaux
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Progression globale améliorée */}
        <Card className="mb-8 bg-gradient-to-r from-white to-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-niger-green" />
                <span>Progression globale</span>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {overallProgress}% complété
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Progress value={overallProgress} className="h-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {procedures.filter(p => p.status === 'completed').length}
                  </div>
                  <div className="text-sm font-medium text-green-700">Procédures terminées</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {procedures.filter(p => p.status === 'in-progress').length}
                  </div>
                  <div className="text-sm font-medium text-orange-700">En cours de traitement</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {procedures.filter(p => p.status === 'waiting').length}
                  </div>
                  <div className="text-sm font-medium text-blue-700">En attente de démarrage</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des procédures améliorée */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Mes procédures</h2>
            <span className="text-gray-500">{procedures.length} procédure{procedures.length > 1 ? 's' : ''} au total</span>
          </div>
          
          {procedures.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune procédure en cours</h3>
                <p className="text-gray-600 mb-6">Commencez votre aventure entrepreneuriale dès maintenant !</p>
                <Link to="/inscription-nif-rccm">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Créer mon NIF & RCCM
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            procedures.map((procedure) => {
              const remainingDays = getRemainingDays(procedure);
              
              return (
                <Card key={procedure.id} className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-niger-orange">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-niger-orange/10 rounded-xl">
                          <FileText className="w-6 h-6 text-niger-orange" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{procedure.title}</h3>
                          <Badge className={`${getStatusColor(procedure.status)} mt-2`}>
                            {getStatusText(procedure.status)}
                          </Badge>
                        </div>
                      </div>
                      
                      {procedure.status === 'completed' && (
                        <Button variant="outline" size="sm" className="flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Télécharger</span>
                        </Button>
                      )}
                    </div>

                    {/* Barre de progression améliorée */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-700">Progression</span>
                        <span className="text-lg font-bold text-niger-orange">{procedure.progress}%</span>
                      </div>
                      <Progress value={procedure.progress} className="h-3" />
                    </div>

                    {/* Informations de timing améliorées */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {procedure.startDate && (
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <div>
                            <div className="text-xs font-medium text-blue-600 uppercase tracking-wide">Date de début</div>
                            <div className="text-sm font-semibold text-blue-800">{formatDate(procedure.startDate)}</div>
                          </div>
                        </div>
                      )}
                      
                      {remainingDays !== null && procedure.status !== 'completed' && (
                        <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-xs font-medium text-orange-600 uppercase tracking-wide">Temps restant</div>
                            <div className="text-sm font-semibold text-orange-800">
                              {remainingDays > 0 ? `${remainingDays} jour${remainingDays > 1 ? 's' : ''}` : 'Bientôt terminé'}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {procedure.completionDate && (
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="text-xs font-medium text-green-600 uppercase tracking-wide">Finalisé le</div>
                            <div className="text-sm font-semibold text-green-800">{formatDate(procedure.completionDate)}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Prochaines étapes améliorées */}
                    {procedure.nextSteps && procedure.nextSteps.length > 0 && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Prochaines étapes
                        </h4>
                        <ul className="space-y-2">
                          {procedure.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-blue-800">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Section d'aide améliorée */}
        <Card className="mt-12 bg-gradient-to-r from-niger-orange/10 to-niger-green/10 border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Une question ? Besoin d'aide ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans toutes vos démarches entrepreneuriales.
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
