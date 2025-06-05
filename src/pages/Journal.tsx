
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Building, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Journal = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = {
    id: 1,
    title: "Nouvelles réformes fiscales au Niger : Ce qui change pour les entrepreneurs en 2024",
    excerpt: "Le gouvernement nigérien a annoncé de nouvelles mesures fiscales qui impacteront directement les entrepreneurs. Découvrez les changements majeurs et comment vous y préparer.",
    content: `
      <h2>Introduction</h2>
      <p>Le gouvernement nigérien vient d'annoncer une série de réformes fiscales majeures qui entreront en vigueur dès 2024. Ces changements visent à moderniser le système fiscal et à encourager l'entrepreneuriat local.</p>
      
      <h2>Les principales mesures</h2>
      <h3>1. Réduction de l'impôt sur les sociétés</h3>
      <p>L'impôt sur les sociétés passe de 30% à 25% pour les entreprises de moins de 10 employés, une mesure qui devrait bénéficier à plus de 80% des PME nigériennes.</p>
      
      <h3>2. Simplification des procédures</h3>
      <p>La création d'entreprise sera désormais possible en ligne avec NACCORP, réduisant les délais de 15 jours à 3 jours ouvrables.</p>
      
      <h3>3. Incitations pour les startups</h3>
      <p>Les nouvelles entreprises technologiques bénéficieront d'un abattement de 50% sur leurs impôts pendant les 3 premières années.</p>
      
      <h2>Impact sur votre entreprise</h2>
      <p>Ces réformes représentent une opportunité unique pour les entrepreneurs nigériens. NACCORP vous accompagne dans cette transition avec des services adaptés aux nouvelles réglementations.</p>
    `,
    image: "📊",
    category: "Fiscalité",
    author: "NACCORP",
    date: "2024-03-15",
    readTime: "5 min",
    tags: ["Fiscalité", "Réforme", "Entrepreneur"]
  };

  const articles = [
    {
      id: 2,
      title: "Guide complet pour créer son NIF en 2024 : Étapes et documents requis",
      excerpt: "Tout ce que vous devez savoir sur la création de votre Numéro d'Identification Fiscale au Niger. Procédures simplifiées et conseils pratiques.",
      content: `
        <h2>Qu'est-ce que le NIF ?</h2>
        <p>Le Numéro d'Identification Fiscale (NIF) est un identifiant unique attribué à chaque contribuable au Niger.</p>
        
        <h2>Documents requis</h2>
        <ul>
          <li>Copie de la carte d'identité ou passeport</li>
          <li>Justificatif de domicile</li>
          <li>Acte de naissance</li>
        </ul>
        
        <h2>Procédure avec NACCORP</h2>
        <p>Grâce à notre plateforme digitale, obtenez votre NIF en 3 étapes simples et en moins de 24h.</p>
      `,
      image: "🆔",
      category: "Administratif",
      author: "Équipe NIF-RCCM",
      date: "2024-03-12",
      readTime: "7 min",
      tags: ["NIF", "Administration", "Guide"]
    },
    {
      id: 3,
      title: "L'importance du branding pour les startups nigériennes",
      excerpt: "Comment créer une identité visuelle forte qui marque les esprits et fidélise votre clientèle dans un marché concurrentiel.",
      content: `
        <h2>Pourquoi le branding est crucial ?</h2>
        <p>Dans un marché de plus en plus concurrentiel, votre identité visuelle est votre premier atout de différenciation.</p>
        
        <h2>Les éléments clés</h2>
        <ul>
          <li>Logo professionnel et mémorable</li>
          <li>Charte graphique cohérente</li>
          <li>Supports marketing harmonisés</li>
        </ul>
        
        <h2>NACCORP vous accompagne</h2>
        <p>Nos designers experts créent votre identité visuelle complète pour faire décoller votre business.</p>
      `,
      image: "🎨",
      category: "Design",
      author: "Digital Pulse Team",
      date: "2024-03-10",
      readTime: "4 min",
      tags: ["Branding", "Design", "Startup"]
    },
    {
      id: 4,
      title: "TVA au Niger : Calculs et obligations pour les entreprises",
      excerpt: "Maîtrisez les calculs de TVA et respectez vos obligations fiscales. Guide pratique avec exemples concrets et simulateur inclus.",
      image: "🧮",
      category: "Comptabilité",
      author: "Experts Comptables",
      date: "2024-03-08",
      readTime: "6 min",
      tags: ["TVA", "Comptabilité", "Calcul"]
    },
    {
      id: 5,
      title: "Digitalisation des entreprises : Opportunités et défis au Niger",
      excerpt: "Analyse des tendances de digitalisation au Niger et comment les entreprises peuvent tirer parti du numérique pour leur croissance.",
      image: "💻",
      category: "Digital",
      author: "Analystes Tech",
      date: "2024-03-05",
      readTime: "8 min",
      tags: ["Digital", "Transformation", "Innovation"]
    },
    {
      id: 6,
      title: "Financement des PME : Nouvelles opportunités disponibles",
      excerpt: "Découvrez les dernières options de financement pour les petites et moyennes entreprises au Niger, y compris les programmes gouvernementaux.",
      image: "💰",
      category: "Financement",
      author: "Conseillers Financiers",
      date: "2024-03-02",
      readTime: "5 min",
      tags: ["Financement", "PME", "Opportunités"]
    }
  ];

  const categories = [
    { name: "Tous", count: 20, active: true },
    { name: "Fiscalité", count: 5, active: false },
    { name: "Administratif", count: 4, active: false },
    { name: "Design", count: 3, active: false },
    { name: "Digital", count: 4, active: false },
    { name: "Financement", count: 4, active: false }
  ];

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-niger-orange to-niger-green">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Journal NACCORP
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Restez informé des dernières actualités entrepreneuriales, conseils pratiques et réformes qui impactent votre business au Niger
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Actualités en temps réel
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Building className="w-4 h-4 mr-2" />
              Conseils d'experts
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Globe className="w-4 h-4 mr-2" />
              Tendances du marché
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Catégories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={category.active ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        category.active 
                          ? "bg-niger-orange text-white hover:bg-niger-orange-dark" 
                          : "hover:bg-niger-orange/10 hover:text-niger-orange dark:text-gray-300 dark:hover:text-niger-orange"
                      }`}
                    >
                      {category.name}
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative">
                <div className="h-64 bg-gradient-to-r from-niger-orange to-niger-green flex items-center justify-center">
                  <span className="text-6xl opacity-20">{featuredArticle.image}</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-niger-orange text-white">
                  Article en vedette
                </Badge>
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-niger-orange text-niger-orange">
                    {featuredArticle.category}
                  </Badge>
                  {featuredArticle.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl hover:text-niger-orange transition-colors cursor-pointer dark:text-white">
                  {featuredArticle.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{featuredArticle.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => openArticle(featuredArticle)}
                  className="bg-niger-orange hover:bg-niger-orange-dark text-white"
                >
                  Lire l'article complet
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group dark:bg-gray-800 dark:border-gray-700">
                  <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b dark:border-gray-600">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{article.image}</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="border-niger-green text-niger-green">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-niger-orange transition-colors line-clamp-2 dark:text-white">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{article.excerpt}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => openArticle(article)}
                      variant="outline" 
                      className="w-full border-niger-green text-niger-green hover:bg-niger-green hover:text-white group-hover:scale-105 transition-transform"
                    >
                      Lire plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white">
                Charger plus d'articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center dark:text-gray-300 dark:hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour
                  </Button>
                  <Badge variant="outline" className="border-niger-orange text-niger-orange">
                    {selectedArticle.category}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl dark:text-white">{selectedArticle.title}</DialogTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedArticle.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedArticle.readTime}
                  </div>
                </div>
              </DialogHeader>
              <div 
                className="prose max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Journal;
