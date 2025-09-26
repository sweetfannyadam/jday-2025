interface HandDrawnToasterProps {
  onClick?: () => void;
  breadInside?: boolean;
  pressed?: boolean;
}

export function HandDrawnToaster({
  onClick,
  breadInside = false,
  pressed = false,
}: HandDrawnToasterProps) {
  const leverYPosition = pressed ? 105 : 85;

  return (
    <div
      className={`select-none ${
        onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''
      }`}
      onClick={onClick}
    >
      <svg
        width='250'
        height='200'
        viewBox='0 0 250 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='drop-shadow-sm'
      >
        {/* Main toaster body */}
        <path
          d='M30 50 C25 45, 30 40, 35 42 L215 42 C220 40, 225 45, 220 50 L220 120 C225 125, 220 130, 215 128 L35 128 C30 130, 25 125, 30 120 Z'
          fill='#e8e4e0'
          stroke='var(--color-ink)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        {/* Toaster slots */}
        <rect
          x='50'
          y='25'
          width='35'
          height='15'
          rx='7'
          fill='var(--color-ink)'
          opacity='0.8'
        />
        <rect
          x='100'
          y='25'
          width='35'
          height='15'
          rx='7'
          fill='var(--color-ink)'
          opacity='0.8'
        />

        {/* Bread slices inside when inserted */}
        {breadInside && (
          <>
            <rect
              x='52'
              y='20'
              width='31'
              height='12'
              rx='6'
              fill='#f5f1eb'
              stroke='var(--color-ink)'
              strokeWidth='2'
            />
            <rect
              x='102'
              y='20'
              width='31'
              height='12'
              rx='6'
              fill='#f5f1eb'
              stroke='var(--color-ink)'
              strokeWidth='2'
            />
          </>
        )}

        {/* Control knob */}
        <circle
          cx='180'
          cy='70'
          r='12'
          fill='var(--color-terracotta)'
          stroke='var(--color-ink)'
          strokeWidth='2'
        />
        <line
          x1='180'
          y1='62'
          x2='180'
          y2='55'
          stroke='var(--color-ink)'
          strokeWidth='2'
          strokeLinecap='round'
        />

        {/* Lever handle */}
        <rect
          x='200'
          y={leverYPosition} // <-- Use our variable here
          width='12'
          height='25'
          rx='6'
          fill='var(--color-terracotta)'
          stroke='var(--color-ink)'
          strokeWidth='2'
          className='transition-all duration-200 ease-in-out'
        />

        {breadInside && (
          <>
            <path
              d='M60 15 Q62 10, 64 15 Q66 10, 68 15'
              stroke='var(--color-ink)'
              strokeWidth='2'
              fill='none'
              opacity='0.6'
            />
            <path
              d='M110 15 Q112 10, 114 15 Q116 10, 118 15'
              stroke='var(--color-ink)'
              strokeWidth='2'
              fill='none'
              opacity='0.6'
            />
            <path
              d='M85 12 Q87 7, 89 12 Q91 7, 93 12'
              stroke='var(--color-ink)'
              strokeWidth='2'
              fill='none'
              opacity='0.6'
            />
          </>
        )}

        {/* Base and feet */}
        <ellipse
          cx='50'
          cy='135'
          rx='15'
          ry='6'
          fill='var(--color-ink)'
          opacity='0.8'
        />
        <ellipse
          cx='200'
          cy='135'
          rx='15'
          ry='6'
          fill='var(--color-ink)'
          opacity='0.8'
        />

        {/* Decorative details */}
        <rect
          x='45'
          y='90'
          width='8'
          height='4'
          rx='2'
          fill='var(--color-muted-blue)'
        />
        <rect
          x='45'
          y='100'
          width='8'
          height='4'
          rx='2'
          fill='var(--color-muted-blue)'
        />
      </svg>
    </div>
  );
}
