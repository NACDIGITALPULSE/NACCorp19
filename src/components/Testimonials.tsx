
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Hassane",
      company: "Boutique Mode Sahel",
      text: "Grâce à Niger EntreprenderHub, j'ai pu obtenir mon NIF et RCCM en 4 jours seulement. Le service design m'a aussi créé un logo magnifique qui reflète parfaitement mon activité.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Ibrahim Moussa",
      company: "Tech Solutions Niger",
      text: "Le processus était tellement simple ! L'équipe m'a accompagné à chaque étape et j'ai reçu une charte graphique complète pour mon entreprise technologique.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Fatouma Abdou",
      company: "Restaurant Délices du Niger",
      text: "Service exceptionnel ! Non seulement mes documents étaient prêts rapidement, mais l'identité visuelle créée pour mon restaurant dépasse mes attentes.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-niger-sand to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce que disent nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
              entrepreneurs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de ceux qui ont déjà lancé leur entreprise 
            avec notre accompagnement complet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-niger-orange to-niger-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-niger-orange text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-niger-orange">250+</div>
              <div className="text-gray-600 text-sm">Entreprises créées</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-niger-green">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction client</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-niger-orange">4.8/5</div>
              <div className="text-gray-600 text-sm">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
