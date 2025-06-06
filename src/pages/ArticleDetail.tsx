
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ArticleDetail = () => {
  const { id } = useParams();

  // Données d'exemple des articles (en production, cela viendrait d'une API)
  const articles = {
    1: {
      title: "Nouvelles réformes fiscales au Niger : Ce qui change pour les entrepreneurs en 2024",
      content: `
        <p>Le gouvernement nigérien a récemment annoncé une série de réformes fiscales majeures qui transformeront le paysage entrepreneurial du pays. Ces changements, entrés en vigueur le 1er janvier 2024, visent à simplifier les démarches administratives tout en modernisant le système fiscal.</p>

        <h2>Les principales mesures</h2>
        <p><strong>1. Simplification de la TVA</strong><br/>
        Le taux de TVA reste fixé à 19%, mais les démarches de déclaration sont désormais entièrement dématérialisées. Les entreprises peuvent maintenant effectuer leurs déclarations en ligne via le portail unique des entreprises.</p>

        <p><strong>2. Nouveau régime pour les PME</strong><br/>
        Les petites et moyennes entreprises bénéficient désormais d'un régime fiscal simplifié avec un taux d'imposition réduit de 15% pour les entreprises réalisant un chiffre d'affaires inférieur à 50 millions de FCFA.</p>

        <p><strong>3. Incitations pour les startups</strong><br/>
        Un nouveau dispositif d'accompagnement fiscal pour les startups technologiques prévoit une exonération totale d'impôts pendant les deux premières années d'activité.</p>

        <h2>Impact sur les entrepreneurs</h2>
        <p>Ces réformes représentent une opportunité majeure pour les entrepreneurs nigériens. La digitalisation des procédures permet un gain de temps considérable, tandis que les nouvelles incitations fiscales encouragent la création d'entreprises innovantes.</p>

        <p>Pour les entrepreneurs existants, il est recommandé de réviser leur structure fiscale avec un expert-comptable afin d'optimiser leur situation au regard de ces nouveaux dispositifs.</p>

        <h2>Comment se préparer</h2>
        <ul>
          <li>Mettre à jour vos informations sur le portail des entreprises</li>
          <li>Réviser vos déclarations fiscales avec un professionnel</li>
          <li>Évaluer l'opportunité de changer de régime fiscal</li>
          <li>Former vos équipes aux nouveaux outils numériques</li>
        </ul>

        <p>NACCORP accompagne les entrepreneurs dans cette transition en proposant des services de conseil fiscal et de mise en conformité avec les nouvelles réglementations.</p>
      `,
      image: "📊",
      category: "Fiscalité",
      author: "NACCORP",
      date: "2024-03-15",
      readTime: "5 min",
      tags: ["Fiscalité", "Réforme", "Entrepreneur"]
    },
    2: {
      title: "Guide complet pour créer son NIF en 2024 : Étapes et documents requis",
      content: `
        <p>La création du Numéro d'Identification Fiscale (NIF) est une étape cruciale pour tout entrepreneur au Niger. Ce guide détaillé vous explique la procédure complète, les documents nécessaires et les délais à respecter.</p>

        <h2>Qu'est-ce que le NIF ?</h2>
        <p>Le NIF est un identifiant unique attribué par la Direction Générale des Impôts à toute personne physique ou morale exerçant une activité économique au Niger. Il est obligatoire pour :</p>
        <ul>
          <li>Ouvrir un compte bancaire professionnel</li>
          <li>Signer des contrats commerciaux</li>
          <li>Effectuer des déclarations fiscales</li>
          <li>Participer aux marchés publics</li>
        </ul>

        <h2>Documents requis</h2>
        <p><strong>Pour une personne physique :</strong></p>
        <ul>
          <li>Copie certifiée de la carte d'identité ou passeport</li>
          <li>Justificatif de domicile (facture d'eau, électricité, téléphone)</li>
          <li>Déclaration d'activité signée</li>
        </ul>

        <p><strong>Pour une personne morale :</strong></p>
        <ul>
          <li>Statuts de la société</li>
          <li>Procès-verbal de nomination du gérant</li>
          <li>Copie des pièces d'identité des dirigeants</li>
          <li>Justificatif du siège social</li>
        </ul>

        <h2>Procédure étape par étape</h2>
        <p><strong>Étape 1 : Préparation du dossier</strong><br/>
        Rassemblez tous les documents requis et vérifiez leur validité.</p>

        <p><strong>Étape 2 : Dépôt de la demande</strong><br/>
        Rendez-vous au Centre des Formalités des Entreprises (CFE) ou utilisez la plateforme en ligne.</p>

        <p><strong>Étape 3 : Instruction du dossier</strong><br/>
        L'administration examine votre dossier (délai : 3 à 5 jours ouvrables).</p>

        <p><strong>Étape 4 : Obtention du NIF</strong><br/>
        Récupération du certificat NIF au CFE ou téléchargement en ligne.</p>

        <h2>Tarifs et délais</h2>
        <p>Frais de création NIF : 15 000 FCFA<br/>
        Délai de traitement : 3 à 5 jours ouvrables<br/>
        Validité : Illimitée (sauf radiation)</p>

        <h2>Nos services d'accompagnement</h2>
        <p>NACCORP vous accompagne dans toutes vos démarches NIF avec :</p>
        <ul>
          <li>Vérification complète de votre dossier</li>
          <li>Dépôt et suivi de votre demande</li>
          <li>Récupération de votre certificat</li>
          <li>Conseil personnalisé</li>
        </ul>
      `,
      image: "🆔",
      category: "Administratif",
      author: "Équipe NIF-RCCM",
      date: "2024-03-12",
      readTime: "7 min",
      tags: ["NIF", "Administration", "Guide"]
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-12 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article introuvable</h1>
          <Link to="/journal">
            <Button className="bg-niger-orange hover:bg-niger-orange-dark">
              Retour au journal
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/journal" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au journal
          </Link>

          {/* Article header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gradient-to-r from-niger-orange to-niger-green flex items-center justify-center">
              <span className="text-6xl opacity-20">{article.image}</span>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline" className="border-niger-orange text-niger-orange">
                  {article.category}
                </Badge>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Call to action */}
          <div className="bg-niger-orange rounded-lg p-6 mt-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Besoin d'aide avec vos démarches ?</h3>
            <p className="mb-4">NACCORP vous accompagne dans toutes vos démarches entrepreneuriales</p>
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-niger-orange hover:bg-gray-100">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
