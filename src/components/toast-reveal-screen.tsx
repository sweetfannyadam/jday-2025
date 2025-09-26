import { useState, useEffect } from 'react';
import { HandDrawnToaster } from './hand-drawn-toaster';
import { HandDrawnToast } from './hand-drawn-toast';

interface ToastRevealScreenProps {
  onFlip: () => void;
}

export function ToastRevealScreen({ onFlip }: ToastRevealScreenProps) {
  const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPop(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-handwritten text-terracotta'>Perfect!</h1>
        <p className='text-lg font-handwritten text-ink/80'>
          Your birthday toast is ready!
        </p>
      </div>
      <div className='relative'>
        <div
          className={`transition-all duration-700 ${
            showPop ? 'animate-pop-bounce' : 'scale-0'
          } mb-4`}
        >
          <button onClick={onFlip} className='focus:outline-none'>
            <HandDrawnToast />
          </button>{' '}
        </div>
        <div className='opacity-80'>
          <HandDrawnToaster breadInside={false} />
        </div>

        {showPop && (
          <>
            <div className='absolute -top-4 -left-4 w-3 h-3 bg-terracotta rounded-full animate-ping'></div>
            <div className='absolute -top-2 -right-6 w-2 h-2 bg-muted-blue rounded-full animate-ping delay-300'></div>
            <div className='absolute -bottom-2 -left-6 w-2 h-2 bg-terracotta rounded-full animate-ping delay-500'></div>
            <div className='absolute -bottom-4 -right-4 w-3 h-3 bg-muted-blue rounded-full animate-ping delay-700'></div>
          </>
        )}
      </div>

      {/* Add this new line of text */}
      <p className='text-lg font-handwritten text-terracotta animate-pulse'>
        Oh, the toast has something behind it! 👀
      </p>
    </div>
  );
}
