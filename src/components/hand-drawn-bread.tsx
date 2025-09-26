export function HandDrawnBread() {
  return (
    <svg
      width='200'
      height='200'
      viewBox='0 0 200 200'
      className='drop-shadow-sm'
    >
      {/* Bread slice outline - hand-drawn style */}
      <path
        d='M50 60 C45 55, 45 50, 55 45 L145 45 C155 50, 155 55, 150 60 L150 140 C155 145, 155 150, 145 155 L55 155 C45 150, 45 145, 50 140 Z'
        fill='#f5f1eb'
        stroke='var(--color-ink)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Inner bread texture - small dots */}
      <circle cx='70' cy='70' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='90' cy='80' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='110' cy='75' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='130' cy='85' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='80' cy='100' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='120' cy='105' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='70' cy='120' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='100' cy='125' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='130' cy='115' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='85' cy='135' r='1.5' fill='var(--color-ink)' opacity='0.6' />
      <circle cx='115' cy='140' r='1.5' fill='var(--color-ink)' opacity='0.6' />

      {/* Crust edge - slightly darker */}
      <path
        d='M50 60 C45 55, 45 50, 55 45 L145 45 C155 50, 155 55, 150 60'
        fill='none'
        stroke='var(--color-ink)'
        strokeWidth='2'
        opacity='0.8'
      />
    </svg>
  );
}
