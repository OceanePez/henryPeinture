import React, { useState, useEffect } from 'react';

export default function AccueilView() {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setTextAnimation(true), 800);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header with side-by-side layout */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Name */}
            <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-wide leading-none">
                Florence
                <br />
                <span className="text-gray-600">Henry</span>
              </h1>
            </div>
            
            {/* Right side - Subtitle */}
            <div className={`transform transition-all duration-1500 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="md:text-right">
                <p className="text-2xl md:text-3xl text-gray-700 font-light italic tracking-wide leading-relaxed">
                  L'Art de l'Invisible,
                  <br />
                  la Peinture aux Âmes
                </p>
                <div className="w-24 h-px bg-gray-400 mt-6 md:ml-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with staggered animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16">
        
        {/* Introduction with slide-in effect */}
        <div className={`mb-16 text-center transform transition-all duration-1000 delay-700 ${textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-800 leading-relaxed mb-8 animate-fade-in">
              Entrez dans l'univers énigmatique de Florence Henry, artiste visionnaire surnommée 
              <em className="italic font-medium text-gray-900"> la peintre aux bulles</em>, dont chaque œuvre révèle un monde caché au-delà du visible.
            </p>
          </div>
        </div>

        {/* Artist description with cascading animation */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`space-y-6 transform transition-all duration-1000 delay-1000 ${textAnimation ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200 relative">
              L'Artiste
              <div className="absolute -bottom-px left-0 w-0 h-px bg-gray-900 animate-expand-line"></div>
            </h2>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Formée par la vie, guidée par l'intuition et nourrie d'une passion pour l'âme humaine, 
              Florence peint comme on murmure à l'inconscient. Ses toiles vibrent d'une énergie singulière : 
              un entrelacs de symboles, de textures dorées, de figures oniriques et de paysages intérieurs.
            </p>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Chaque détail semble respirer. Ses créations ne se regardent pas : elles se ressentent, 
              elles parlent, elles guident. Florence ne peint pas pour décorer. Elle peint pour révéler. 
              Pour guérir. Pour éveiller.
            </p>
            <blockquote className="italic text-gray-600 pl-4 border-l-2 border-gray-300 mt-8 transform hover:scale-105 transition-transform duration-300">
              "Son art est un langage. Une porte. Une présence."
            </blockquote>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 delay-1200 ${textAnimation ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200 relative">
              Le Style
              <div className="absolute -bottom-px left-0 w-0 h-px bg-gray-900 animate-expand-line" style={{animationDelay: '0.2s'}}></div>
            </h2>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Le style de Florence Henry est unique, inclassable. Il mêle la douceur d'un rêve à la 
              profondeur d'un cri intérieur. Ses œuvres oscillent entre abstraction intuitive et 
              figuration poétique, comme si chaque toile portait en elle un secret prêt à être découvert 
              par celui qui sait regarder.
            </p>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Les formes, les couleurs et les textures créent une harmonie vibrante qui touche directement 
              le cœur, sans passer par le mental. C'est un art sensoriel, presque spirituel, qui résonne 
              avec notre inconscient collectif.
            </p>
          </div>
        </div>

        {/* Acquisition section with background animation */}
        <div className={`bg-gray-50 p-8 md:p-12 mb-16 relative overflow-hidden transform transition-all duration-1000 delay-1400 ${textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50 transform translate-x-full animate-shimmer"></div>
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center pb-2 relative">
            Acquérir une Œuvre
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-900 animate-expand-center"></div>
          </h2>
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-gray-700 leading-relaxed mb-6 text-center hover:text-gray-900 transition-colors duration-300">
              Acquérir une toile de Florence, c'est bien plus qu'acheter une œuvre : c'est inviter une 
              énergie puissante chez soi. Ses tableaux ne se contentent pas d'embellir un lieu, ils le transforment. 
              Ils apaisent, inspirent, élèvent.
            </p>
            <p className="text-gray-700 leading-relaxed text-center hover:text-gray-900 transition-colors duration-300">
              Chaque peinture devient un point d'ancrage, un compagnon silencieux qui veille et murmure à l'âme. 
              Que ce soit pour un intérieur personnel, un espace thérapeutique ou une collection d'art singulière, 
              les toiles de Florence sont des présences rares, précieuses et vivantes.
            </p>
          </div>
        </div>

        {/* Statement section with floating effect */}
        <div className={`text-center space-y-8 transform transition-all duration-1000 delay-1600 ${textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-light text-gray-900 italic animate-float">
            "Vous ne regarderez plus jamais une peinture de la même manière."
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="group px-8 py-3 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">OSEZ EXPLORER</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="group px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">OSEZ RESSENTIR</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">OSEZ RESSENTIR</span>
            </button>
          </div>
        </div>

        {/* Final statement with typewriter effect */}
        <div className={`text-center mt-20 pt-16 border-t border-gray-200 transform transition-all duration-1000 delay-1800 ${textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-2xl font-light text-gray-800 italic animate-pulse">
            Osez l'art vivant de Florence Henry
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand-line {
          to { width: 100%; }
        }
        @keyframes expand-center {
          to { width: 64px; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        .animate-expand-line {
          animation: expand-line 1.5s ease-out forwards;
        }
        .animate-expand-center {
          animation: expand-center 1.5s ease-out 0.5s forwards;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}