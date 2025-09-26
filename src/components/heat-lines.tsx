export function HeatLines() {
  return (
    <div className='flex space-x-2'>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width='8'
          height='20'
          viewBox='0 0 8 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='heat-lines'
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <path
            d='M4 2 Q2 6, 4 10 Q6 14, 4 18'
            stroke='#E59B74'
            strokeWidth='2'
            strokeLinecap='round'
            fill='none'
          />
        </svg>
      ))}
    </div>
  );
}
