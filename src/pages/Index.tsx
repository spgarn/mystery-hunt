
import React, { useEffect, useState } from 'react';
import CodeInput from '@/components/CodeInput';
import { getUsedCodes } from '@/utils/localStorage';
import SuccessConfetti from '@/components/SuccessConfetti';

const Index: React.FC = () => {
  const usedCodes = getUsedCodes();
  const completedCount = usedCodes.length;
  const totalCodes = 10;
  const allCodesFound = completedCount >= totalCodes;
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    if (allCodesFound) {
      setShowConfetti(true);
    }
  }, [allCodesFound]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      {allCodesFound ? (
        <div className="max-w-2xl w-full text-center animate-fade-in space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
            Grattis! Du har hittat alla koder!
          </h1>
          
          <div className="text-xl text-muted-foreground mt-6">
            Du har klarat alla {totalCodes} utmaningar.
          </div>
          
          <SuccessConfetti isActive={showConfetti} />
        </div>
      ) : (
        <div className="max-w-2xl w-full text-center animate-fade-in space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
            Jakten på de försvunna koderna
          </h1>
          
          <div className="w-full flex justify-center mt-8">
            <CodeInput />
          </div>
          
          <div className="text-sm text-muted-foreground mt-6">
            Det finns fler koder att finna
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
