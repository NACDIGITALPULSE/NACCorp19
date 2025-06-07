
import { useState, useEffect } from 'react';

const ThreeDIllustration = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
      {/* Éléments 3D animés */}
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* Cube principal */}
        <div 
          className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 mx-auto my-auto bg-gradient-to-br from-niger-orange to-red-500 rounded-xl shadow-2xl transform-gpu"
          style={{
            transform: `rotateY(${rotation}deg) rotateX(${rotation * 0.5}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
        </div>

        {/* Cercles flottants */}
        <div 
          className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-xl opacity-80"
          style={{
            transform: `translateY(${Math.sin(rotation * 0.02) * 20}px) rotateZ(${rotation * 2}deg)`
          }}
        ></div>

        <div 
          className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl opacity-80"
          style={{
            transform: `translateY(${Math.cos(rotation * 0.03) * 15}px) rotateZ(${-rotation * 1.5}deg)`
          }}
        ></div>

        <div 
          className="absolute top-1/2 left-0 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl opacity-80"
          style={{
            transform: `translateX(${Math.sin(rotation * 0.025) * 25}px) rotateZ(${rotation * 1.2}deg)`
          }}
        ></div>

        {/* Formes géométriques */}
        <div 
          className="absolute top-0 left-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 shadow-lg opacity-80"
          style={{
            transform: `translateX(-50%) translateY(${Math.sin(rotation * 0.04) * 30}px) rotate(${rotation * 3}deg)`
          }}
        ></div>

        <div 
          className="absolute bottom-0 right-0 w-10 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full shadow-lg opacity-80"
          style={{
            transform: `translateY(${Math.cos(rotation * 0.035) * 20}px) rotateZ(${rotation * 2.5}deg)`
          }}
        ></div>
      </div>

      {/* Particules flottantes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0 ? 'bg-niger-orange' : 
            i % 3 === 1 ? 'bg-blue-400' : 
            'bg-purple-400'
          } opacity-60`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            transform: `translateY(${Math.sin((rotation + i * 30) * 0.03) * 40}px) scale(${0.5 + Math.sin((rotation + i * 45) * 0.02) * 0.5})`,
            transition: 'none'
          }}
        ></div>
      ))}
    </div>
  );
};

export default ThreeDIllustration;
