import React from 'react';

export const HeartBackground: React.FC = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.1,
    size: Math.random() * 20 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-valentine-200 animate-pulse"
          style={{
            left: heart.left,
            bottom: '-10%',
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `floatUp ${heart.animationDuration} linear infinite`,
            animationDelay: heart.animationDelay,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};