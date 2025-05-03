
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSecretCodeIds } from '../data/secretCodes';
import { isCodeUsed } from '../utils/localStorage';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CodeInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedInput = inputValue.trim().toLowerCase();
    const allCodes = getAllSecretCodeIds();
    
    if (allCodes.includes(normalizedInput)) {
      // Valid code found
      if (isCodeUsed(normalizedInput)) {
        // Code already used
        triggerShake();
        setInputValue('');
      } else {
        // Navigate to the question page
        setIsDisabled(true);
        navigate(`/question/${normalizedInput}`);
      }
    } else {
      // Invalid code
      triggerShake();
      setInputValue('');
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`w-full bg-secondary/50 border-2 border-primary/30 text-foreground glow-input text-center text-lg py-6 pr-[4.5rem] ${
            isShaking ? 'animate-shake' : ''
          }`}
          placeholder="Enter code..."
          disabled={isDisabled}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button 
          type="submit"
          className="absolute right-0 inset-y-0 px-5 bg-primary/80 hover:bg-primary text-primary-foreground"
          disabled={isDisabled}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CodeInput;
