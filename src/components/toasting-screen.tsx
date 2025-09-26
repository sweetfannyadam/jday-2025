import { useEffect } from 'react';
import { HandDrawnToaster } from './hand-drawn-toaster';
import { HeatLines } from './heat-lines';

interface ToastingScreenProps {
  onToastDone: () => void;
}

export function ToastingScreen({ onToastDone }: ToastingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onToastDone();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onToastDone]);

  return (
    <div className='flex flex-col items-center justify-center space-y-8 animate-pulse'>
      <div className='relative'>
        <HandDrawnToaster pressed={true} />
        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2'>
          <HeatLines />
        </div>
      </div>
      <p className='text-xl font-handwritten text-ink/80'>Toasting...</p>
    </div>
  );
}
