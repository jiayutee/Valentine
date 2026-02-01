import React, { useState, useRef, useEffect } from 'react';
import { Position } from '../types';

interface QuestionCardProps {
  onYes: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ onYes }) => {
  const [noCount, setNoCount] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState<Position | null>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  
  // Preload the transition GIF so it's ready when we switch to LoadingCard
  useEffect(() => {
    const img = new Image();
    img.src = "https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif";
  }, []);

  // Phrases that appear on the "Yes" button as it grows
  const phrases = [
    "Yes",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "CLICK YES!!!"
  ];

  const getYesButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleNoInteraction = () => {
    setNoCount(prev => prev + 1);
    
    if (!noBtnRef.current) return;

    // Get actual button dimensions to ensure it stays in bounds
    const btnRect = noBtnRef.current.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    
    // Viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Safety margin from edges
    const margin = 20; 

    // Calculate available area
    const maxX = viewportWidth - btnWidth - margin;
    const maxY = viewportHeight - btnHeight - margin;

    const safeMaxX = Math.max(margin, maxX);
    const safeMaxY = Math.max(margin, maxY);

    const newX = Math.random() * (safeMaxX - margin) + margin;
    const newY = Math.random() * (safeMaxY - margin) + margin;

    if (noButtonPos === null) {
      setNoButtonPos({ x: btnRect.left, y: btnRect.top });
      setTimeout(() => {
        setNoButtonPos({ x: newX, y: newY });
      }, 20);
    } else {
      setNoButtonPos({ x: newX, y: newY });
    }
  };

  const handleNoClick = (e: React.MouseEvent) => {
    handleNoInteraction();
  };

  const handleNoTouch = (e: React.TouchEvent) => {
    handleNoInteraction();
  };

  const yesButtonGrowth = 1 + (noCount * 0.1); 

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8">
      <div className="flex flex-col items-center space-y-8 animate-float">
        <div className="rounded-2xl overflow-hidden bg-valentine-50">
          <img 
            src="https://media.tenor.com/16JLRwPfDfAAAAAi/dudu-bubu-dancing-so-cute.gif" 
            alt="Milk and Mocha dancing" 
            className="w-64 h-64 object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-valentine-600 drop-shadow-sm px-4">
          Shinshin will you be my Valentine?
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 relative w-full min-h-[100px]">
        <button
          onClick={onYes}
          style={{ 
            fontSize: `${yesButtonGrowth * 1.25}rem`,
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          className={`
            bg-valentine-500 hover:bg-valentine-600 text-white font-bold 
            rounded-full shadow-lg hover:shadow-xl 
            px-[1.5em] py-[0.75em] z-20 min-w-[100px] 
            whitespace-normal break-words max-w-[85vw] leading-tight
          `}
        >
          {getYesButtonText()}
        </button>

        <button
          ref={noBtnRef}
          onMouseEnter={handleNoInteraction}
          onTouchStart={handleNoTouch}
          onClick={handleNoClick}
          style={noButtonPos ? {
            position: 'fixed',
            left: noButtonPos.x,
            top: noButtonPos.y,
            transition: 'all 0.25s ease-out'
          } : {
            transition: 'all 0.25s ease-out'
          }}
          className={`
            bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold 
            rounded-full shadow-md px-8 py-3 text-xl z-50
            ${noButtonPos ? 'fixed' : ''}
          `}
        >
          No
        </button>
      </div>
    </div>
  );
};