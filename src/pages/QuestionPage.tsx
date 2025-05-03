
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSecretCodeById } from '../data/secretCodes';
import { markCodeAsUsed } from '../utils/localStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SuccessConfetti from '@/components/SuccessConfetti';
import { PartyPopper } from 'lucide-react';

const QuestionPage: React.FC = () => {
  const { codeId } = useParams<{ codeId: string }>();
  const navigate = useNavigate();
  
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const secretCode = codeId ? getSecretCodeById(codeId) : undefined;
  
  useEffect(() => {
    // Redirect if code doesn't exist
    if (!secretCode) {
      navigate('/');
      return;
    }

    // If answer is correct, start countdown to redirect
    if (isCorrect) {
      // Mark the code as used
      if (codeId) {
        markCodeAsUsed(codeId);
      }
      
      // Set up countdown timer
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isCorrect, navigate, codeId, secretCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!secretCode) return;
    
    const normalizedAnswer = answer.trim().toLowerCase();
    if (normalizedAnswer === secretCode.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      // Wrong answer, shake the input
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  if (!secretCode) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Challenge</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Answer correctly to receive your code
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isCorrect ? (
            <>
              <p className="text-lg mb-6 text-center">{secretCode.question}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={`w-full bg-secondary/50 border-2 border-primary/30 text-center ${
                    isShaking ? 'animate-shake' : ''
                  }`}
                  placeholder="Your answer..."
                  autoFocus
                />
                <Button type="submit" className="w-full bg-primary/80 hover:bg-primary">
                  Submit Answer
                </Button>
              </form>
            </>
          ) : (
            <>
              <SuccessConfetti isActive={true} />
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <PartyPopper className="w-16 h-16 text-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-bold">Congratulations!</h3>
                <p>You've answered correctly.</p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-md border border-primary/30">
                  <p className="text-sm text-muted-foreground">Your success code:</p>
                  <p className="text-xl font-bold tracking-wider">{secretCode.successCode}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Redirecting in {timeLeft} seconds...
                </p>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={() => navigate('/')} className="text-muted-foreground">
            Return to home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionPage;
