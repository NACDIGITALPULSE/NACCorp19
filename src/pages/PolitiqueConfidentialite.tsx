
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, AlertTriangle } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl mb-8 opacity-90">
            NACCORP s'engage à protéger vos données personnelles
          </p>
          <p className="text-sm opacity-75">
            Dernière mise à jour : 15 mars 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2 text-blue-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              NACCORP (ci-après "nous", "notre" ou "la société") respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité vous informe sur la façon dont nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez nos services.
            </p>
            <p>
              En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </CardContent>
        </Card>

        {/* Données collectées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-6 h-6 mr-2 text-green-600" />
              Données que nous collectons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Informations personnelles</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Nom, prénom et raison sociale</li>
                <li>Adresse email et numéro de téléphone</li>
                <li>Adresse postale et de facturation</li>
                <li>Informations d'identification fiscale (NIF, RCCM)</li>
                <li>Documents d'identité (pour la vérification)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Données techniques</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Adresse IP et données de géolocalisation</li>
                <li>Informations sur votre navigateur et appareil</li>
                <li>Cookies et technologies similaires</li>
                <li>Journaux de connexion et d'utilisation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Données de transaction</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Historique des commandes et factures</li>
                <li>Informations de paiement (cryptées)</li>
                <li>Correspondances et communications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Utilisation des données */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="w-6 h-6 mr-2 text-orange-600" />
              Comment nous utilisons vos données
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Prestation de services</h3>
                <p className="text-gray-600">
                  Traitement de vos demandes, création de documents officiels (NIF, RCCM), développement de supports visuels et sites web, gestion de votre compte client.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Communication</h3>
                <p className="text-gray-600">
                  Envoi de confirmations, mises à jour sur vos commandes, support client, newsletters (avec votre consentement).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Amélioration des services</h3>
                <p className="text-gray-600">
                  Analyse de l'utilisation de nos services, développement de nouvelles fonctionnalités, personnalisation de l'expérience utilisateur.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Obligations légales</h3>
                <p className="text-gray-600">
                  Conformité avec les réglementations nigériennes, lutte contre la fraude, archivage légal des documents.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partage des données */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
              Partage de vos données
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Prestataires de services :</strong> Partenaires de confiance qui nous aident à fournir nos services (hébergement, paiement, livraison).
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Autorités compétentes :</strong> Administrations nigériennes pour les démarches officielles (DGI, RCCM).
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Obligations légales :</strong> En cas de demande judiciaire ou réglementaire légitime.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sécurité */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-6 h-6 mr-2 text-red-600" />
              Sécurité de vos données
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Chiffrement</h4>
                  <p className="text-sm text-blue-600">Toutes les données sensibles sont chiffrées en transit et au repos</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Accès contrôlé</h4>
                  <p className="text-sm text-green-600">Accès limité aux données sur base du besoin de savoir</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Surveillance</h4>
                  <p className="text-sm text-purple-600">Monitoring continu de nos systèmes de sécurité</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Sauvegardes</h4>
                  <p className="text-sm text-orange-600">Sauvegardes régulières et sécurisées de vos données</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vos droits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vos droits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Vous disposez des droits suivants concernant vos données personnelles :
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </div>
                <div>
                  <strong>Droit d'accès :</strong> Demander une copie des données que nous détenons sur vous
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">2</span>
                </div>
                <div>
                  <strong>Droit de rectification :</strong> Corriger ou mettre à jour vos informations
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">3</span>
                </div>
                <div>
                  <strong>Droit à l'effacement :</strong> Demander la suppression de vos données (sous certaines conditions)
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">4</span>
                </div>
                <div>
                  <strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données à des fins de marketing
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Pour exercer vos droits, contactez-nous à : <strong>privacy@naccorp.com</strong> ou par courrier à notre adresse postale.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Nous contacter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
            </p>
            
            <div className="space-y-2">
              <p><strong>Email :</strong> privacy@naccorp.com</p>
              <p><strong>Téléphone :</strong> +227 98141675</p>
              <p><strong>Adresse :</strong> Niamey, Niger</p>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note :</strong> Cette politique peut être mise à jour périodiquement. Nous vous informerons de tout changement significatif par email ou via notre site web.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
