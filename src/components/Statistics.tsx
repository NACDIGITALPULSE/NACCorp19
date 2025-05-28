
import { CountUp } from "@/components/CountUp";

const Statistics = () => {
  const stats = [
    { number: 500, suffix: "+", label: "Entreprises créées", color: "text-niger-orange" },
    { number: 48, suffix: "h", label: "Délai moyen", color: "text-niger-green" },
    { number: 99, suffix: "%", label: "Taux de réussite", color: "text-niger-orange" },
    { number: 24, suffix: "/7", label: "Support disponible", color: "text-niger-green" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-niger-orange to-niger-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
            Nos résultats parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre expertise et de la confiance de nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <CountUp end={stat.number} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white/90 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
