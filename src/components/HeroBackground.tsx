
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-niger-sand via-white to-niger-orange/5"></div>
      
      {/* Éléments décoratifs animés en couleurs */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl animate-bounce opacity-20"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl animate-pulse opacity-15"></div>
      <div className="absolute top-10 left-1/2 w-36 h-36 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-2xl opacity-15 animate-bounce"></div>
      <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
    </div>
  );
};

export default HeroBackground;
