import { HandDrawnToaster } from './hand-drawn-toaster';

interface ToasterScreenProps {
  onToasterClick: () => void;
  breadInToaster: boolean;
}

export function ToasterScreen({
  onToasterClick,
  breadInToaster,
}: ToasterScreenProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-md'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-handwritten text-ink'>
          {breadInToaster ? 'Perfect!' : 'Now click the toaster'}
        </h1>
        <p className='text-lg font-handwritten text-ink/80'>
          {breadInToaster
            ? 'The bread is ready to toast'
            : 'to put the bread inside'}
        </p>
      </div>

      <button
        onClick={onToasterClick}
        className='transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-muted-blue focus:ring-offset-2 focus:ring-offset-background rounded-lg'
      >
        <HandDrawnToaster breadInside={breadInToaster} />
      </button>
    </div>
  );
}
