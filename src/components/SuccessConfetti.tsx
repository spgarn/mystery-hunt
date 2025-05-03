
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface SuccessConfettiProps {
  isActive: boolean;
}

const SuccessConfetti: React.FC<SuccessConfettiProps> = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#5D5FEF', '#7879F1', '#A5A6F6']
        });
        
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#5D5FEF', '#7879F1', '#A5A6F6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [isActive]);

  return null; // This component doesn't render anything visually
};

export default SuccessConfetti;
