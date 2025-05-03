
import React from 'react';
import CodeInput from '@/components/CodeInput';
import { getUsedCodes } from '@/utils/localStorage';

const Index: React.FC = () => {
  const usedCodes = getUsedCodes();
  const completedCount = usedCodes.length;
  const totalCodes = 10;
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full text-center animate-fade-in space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
          Secret Code Journey
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Discover the hidden paths by entering the correct codes. Each code unlocks a unique challenge.
        </p>
        
        <div className="w-full flex justify-center mt-8">
          <CodeInput />
        </div>
        
        <div className="text-sm text-muted-foreground mt-6">
          Progress: {completedCount}/{totalCodes} codes discovered
        </div>
      </div>
    </div>
  );
};

export default Index;
