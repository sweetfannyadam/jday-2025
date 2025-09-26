// src/components/sketch-maps.tsx (Corrected Positions)

export function SketchMaps() {
  return (
    <>
      {/* --- USA Map Outline --- */}
      {/* We've adjusted translate(x, y) to move it. You can tweak these numbers! */}
      <g transform='translate(250, 25) scale(0.35)'>
        <path
          d='M166.6 86.2c-2.2-2.8-5.7-4.4-9.3-4.4H135c-1.3 0-2.5-.8-3-2s-.3-2.6.5-3.6l10-12.7c1.5-1.8 1.6-4.5.3-6.5L120.2 21c-1.2-2-3.8-2.6-5.8-1.5l-13 6.6c-2 1-3.2 3-3.2 5.2v10.4c0 1.2-.8 2.3-2 2.6s-2.5-.3-3.3-1.3L80.1 27c-1.5-2-4.3-2.6-6.5-1.5l-12.7 6.6c-2.2 1.2-3.6 3.5-3.6 6v36.5c0 1.2.8 2.3 2 2.6s2.5-.3 3.3-1.3l12.8-16.3c1.5-2 4.3-2.6 6.5-1.5l12.7 6.6c2.2 1.2 3.6 3.5 3.6 6v24c0 2.8 2.3 5.1 5.1 5.1h22.3c2.8 0 5.1-2.3 5.1-5.1V88.8c0-1.2-.5-2.3-1.5-3.1l-6.6-5.5z'
          fill='var(--color-muted-blue)'
          stroke='var(--color-muted-blue)'
          strokeWidth='3'
          strokeLinejoin='round'
          strokeLinecap='round'
          opacity='0.2'
        />
      </g>

      {/* --- Indonesia Map Outline --- */}
      {/* We've adjusted translate(x, y) and scale to move it. */}
      <g transform='translate(-10, 35) scale(0.4)'>
        <path
          d='M211.7,90.4c-2.2-1.2-4.9-1-6.9,0.5l-12.2,9.3c-2,1.5-4.8,1.6-6.9,0.3l-10-6.4c-2.2-1.3-5-1.3-7.2,0l-10,6.4c-2.2,1.3-4.9,1.2-6.9-0.3l-12.2-9.3c-2-1.5-4.8-1.6-6.9-0.3l-10,6.4c-2.2,1.3-5,1.3-7.2,0l-10-6.4c-2.2-1.3-4.9-1.2-6.9,0.3L85,99.7c-2,1.5-4.8,1.6-6.9,0.3l-10-6.4c-2.2-1.3-5-1.3-7.2,0l-10,6.4c-2.2,1.3-4.9,1.2-6.9-0.3l-12.2-9.3c-2-1.5-4.8-1.6-6.9-0.3l-10,6.4c-2.2,1.3-5,1.3-7.2,0l-10-6.4c-2.2-1.3-4.9-1.2-6.9,0.3L-10,99.7'
          fill='var(--color-terracotta)'
          stroke='var(--color-terracotta)'
          strokeWidth='3'
          strokeLinejoin='round'
          strokeLinecap='round'
          opacity='0.2'
        />
      </g>
    </>
  );
}
