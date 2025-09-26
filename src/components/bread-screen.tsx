import { HandDrawnBread } from './hand-drawn-bread';

interface BreadScreenProps {
  onBreadClick: () => void;
}

export function BreadScreen({ onBreadClick }: BreadScreenProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-md'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-handwritten text-ink'>Let's make some</h1>
        <h2 className='text-5xl font-handwritten text-terracotta'>
          Birthday Toast!
        </h2>
      </div>

      <p className='text-lg font-handwritten text-ink/80'>
        Click the bread to get started
      </p>

      <button
        onClick={onBreadClick}
        className='transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-muted-blue focus:ring-offset-2 focus:ring-offset-background rounded-lg'
      >
        <HandDrawnBread />
      </button>
    </div>
  );
}
