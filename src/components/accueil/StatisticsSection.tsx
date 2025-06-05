
const StatisticsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-niger-orange mb-2 group-hover:scale-110 transition-transform">
              1000+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Entreprises créées</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-niger-green mb-2 group-hover:scale-110 transition-transform">
              24h
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Délai moyen NIF</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-niger-orange mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Taux de satisfaction</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-niger-green mb-2 group-hover:scale-110 transition-transform">
              7j/7
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
