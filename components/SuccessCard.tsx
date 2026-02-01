import React from 'react';

export const SuccessCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 animate-float">
      <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-valentine-200 bg-valentine-50">
        <img 
          src="https://media.tenor.com/gUiu1zyxfzYAAAAj/bear-kiss-bear-kisses.gif" 
          alt="Bubu Dudu kissing" 
          className="w-full max-w-sm h-auto object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-valentine-600 drop-shadow-md">
        I knew it! <span className="text-valentine-500">{"❤️"}</span>
      </h1>
      
      <p className="text-xl text-valentine-400 font-semibold max-w-md mx-auto">
        Can't wait to be together with you!
      </p>
    </div>
  );
};