interface HandDrawnToastProps {
  onClick?: () => void;
}

export function HandDrawnToast({ onClick }: HandDrawnToastProps) {
  return (
    <div
      className={`select-none ${
        onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''
      }`}
      onClick={onClick}
    >
      <svg
        width='140'
        height='120'
        viewBox='0 0 140 120'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='drop-shadow-lg'
      >
        <path
          d='M20 25 C15 20, 15 15, 25 12 L115 12 C125 15, 125 20, 120 25 L120 90 C125 95, 125 100, 115 103 L25 103 C15 100, 15 95, 20 90 Z'
          fill='var(--color-background)'
          stroke='var(--color-terracotta)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <g transform='translate(70, 57.5)'>
          <path
            d='M0 8 C-10 -2, -25 -2, -25 12 C-25 25, 0 35, 0 35 C0 35, 25 25, 25 12 C25 -2, 10 -2, 0 8 Z'
            fill='var(--color-terracotta)'
            stroke='var(--color-ink)'
            strokeWidth='2'
            opacity='0.8'
          />

          <circle
            cx='-5'
            cy='5'
            r='1.5'
            fill='var(--color-ink)'
            opacity='0.4'
          />
          <circle cx='5' cy='5' r='1.5' fill='var(--color-ink)' opacity='0.4' />
          <circle cx='0' cy='12' r='1' fill='var(--color-ink)' opacity='0.4' />
        </g>

        <circle
          cx='35'
          cy='35'
          r='1.5'
          fill='var(--color-terracotta)'
          opacity='0.4'
        />
        <circle
          cx='105'
          cy='40'
          r='1.5'
          fill='var(--color-terracotta)'
          opacity='0.4'
        />
        <circle
          cx='45'
          cy='80'
          r='1.5'
          fill='var(--color-terracotta)'
          opacity='0.4'
        />
        <circle
          cx='95'
          cy='75'
          r='1.5'
          fill='var(--color-terracotta)'
          opacity='0.4'
        />

        <path
          d='M25 25 Q35 20, 45 25'
          stroke='var(--color-muted-blue)'
          strokeWidth='2'
          fill='none'
          opacity='0.6'
        />
        <path
          d='M95 25 Q105 20, 115 25'
          stroke='var(--color-muted-blue)'
          strokeWidth='2'
          fill='none'
          opacity='0.6'
        />
      </svg>
    </div>
  );
}
