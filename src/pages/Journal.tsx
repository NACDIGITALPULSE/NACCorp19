
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Journal = () => {
  const featuredArticle = {
    id: 1,
    title: "Nouvelles réformes fiscales au Niger : Ce qui change pour les entrepreneurs en 2024",
    excerpt: "Le gouvernement nigérien a annoncé de nouvelles mesures fiscales qui impacteront directement les entrepreneurs. Découvrez les changements majeurs et comment vous y préparer.",
    image: "📊",
    category: "Fiscalité",
    author: "Niger EntreprenderHub",
    date: "2024-03-15",
    readTime: "5 min",
    tags: ["Fiscalité", "Réforme", "Entrepreneur"]
  };

  const articles = [
    {
      id: 2,
      title: "Guide complet pour créer son NIF en 2024 : Étapes et documents requis",
      excerpt: "Tout ce que vous devez savoir sur la création de votre Numéro d'Identification Fiscale au Niger. Procédures simplifiées et conseils pratiques.",
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-niger-orange to-niger-green">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Journal EntreprenderHub
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
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Catégories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={category.active ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        category.active 
                          ? "bg-niger-orange text-white" 
                          : "hover:bg-niger-orange/10 hover:text-niger-orange"
                      }`}
                    >
                      {category.name}
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
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
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
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
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl hover:text-niger-orange transition-colors cursor-pointer">
                  {featuredArticle.title}
                </CardTitle>
                <p className="text-gray-600">{featuredArticle.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                  Lire l'article complet
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center border-b">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{article.image}</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="border-niger-green text-niger-green">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-niger-orange transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-niger-green text-niger-green hover:bg-niger-green hover:text-white group-hover:scale-105 transition-transform">
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

      <Footer />
    </div>
  );
};

export default Journal;
