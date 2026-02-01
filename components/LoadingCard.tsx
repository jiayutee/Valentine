import React, { useEffect } from 'react';

interface LoadingCardProps {
  onReady: () => void;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ onReady }) => {
  const successGifUrl = "https://media.tenor.com/gUiu1zyxfzYAAAAj/bear-kiss-bear-kisses.gif";
  const transitionGifUrl = "https://media1.tenor.com/m/gRcOi64o3oAAAAAC/crunchycat-luna.gif";

  useEffect(() => {
    const startTime = Date.now();
    const img = new Image();
    img.src = successGifUrl;

    const handleLoad = () => {
      // Stay on the loading screen for at least 2.5 seconds to appreciate the cool gif and animation
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2500 - elapsedTime);

      setTimeout(() => {
        onReady();
      }, remainingTime);
    };

    img.onload = handleLoad;
    img.onerror = handleLoad;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [onReady, successGifUrl]);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8">
      <style>{`
        @keyframes googleOrbit {
          0% { 
            transform: rotate(0deg) translateX(35px) rotate(0deg) scale(1); 
            opacity: 1;
          }
          25% { 
            transform: rotate(90deg) translateX(40px) rotate(-90deg) scale(1.2); 
            opacity: 0.8;
          }
          50% { 
            transform: rotate(180deg) translateX(35px) rotate(-180deg) scale(1); 
            opacity: 1;
          }
          75% { 
            transform: rotate(270deg) translateX(30px) rotate(-270deg) scale(0.8); 
            opacity: 0.6;
          }
          100% { 
            transform: rotate(360deg) translateX(35px) rotate(-360deg) scale(1); 
            opacity: 1;
          }
        }
        .heart-dot {
          position: absolute;
          animation: googleOrbit 2.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          filter: drop-shadow(0 2px 4px rgba(225, 29, 72, 0.1));
        }
        .heart-1 { animation-delay: 0s; color: #e11d48; font-size: 2.5rem; }
        .heart-2 { animation-delay: -0.55s; color: #fb7185; font-size: 2rem; }
        .heart-3 { animation-delay: -1.1s; color: #fda4af; font-size: 2.5rem; }
        .heart-4 { animation-delay: -1.65s; color: #fecdd3; font-size: 2rem; }
      `}</style>

      {/* Cool Fun Transition GIF */}
      <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-valentine-100 bg-white">
        <img 
          src={transitionGifUrl} 
          alt="Cool fun transition" 
          className="w-48 h-70 md:w-64 md:h-94 object-cover"
        />
      </div>

      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="heart-dot heart-1">❤️</div>
        <div className="heart-dot heart-2">❤️</div>
        <div className="heart-dot heart-3">❤️</div>
        <div className="heart-dot heart-4">❤️</div>
      </div>
      
      <div className="space-y-4 z-10 pt-4">
        <h2 className="text-2xl md:text-3xl font-black text-valentine-600 tracking-tight">
          One second, Shinshin...
        </h2>
        <div className="flex justify-center space-x-2">
          <span className="w-2.5 h-2.5 bg-valentine-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 bg-valentine-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 bg-valentine-400 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};