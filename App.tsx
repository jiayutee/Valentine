import React, { useState } from 'react';
import { AppStep } from './types.ts';
import { QuestionCard } from './components/QuestionCard.tsx';
import { SuccessCard } from './components/SuccessCard.tsx';
import { LoadingCard } from './components/LoadingCard.tsx';
import { HeartBackground } from './components/HeartBackground.tsx';

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.QUESTION);

  const handleYes = () => {
    setCurrentStep(AppStep.LOADING);
  };

  const handleLoaded = () => {
    setCurrentStep(AppStep.SUCCESS);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-valentine-50 flex items-center justify-center font-sans">
      <HeartBackground />
      
      <div className="z-10 w-full max-w-2xl px-4">
        {currentStep === AppStep.QUESTION && (
          <QuestionCard onYes={handleYes} />
        )}
        
        {currentStep === AppStep.LOADING && (
          <LoadingCard onReady={handleLoaded} />
        )}

        {currentStep === AppStep.SUCCESS && (
          <SuccessCard />
        )}
      </div>
      
      <footer className="absolute bottom-4 text-valentine-300 text-xs text-center w-full z-0">
        Made with ❤️ for Shinshin
      </footer>
    </div>
  );
}