// src/components/intro-screen.tsx (Updated for Automatic Transition)

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

import inaPic from '../assets/ina.png';
import usaPic from '../assets/usa.png';
import mapIna from '../assets/map-indonesia.svg';
import mapUsa from '../assets/map-usa.svg';

interface IntroScreenProps {
  onIntroDone: () => void;
}

export function IntroScreen({ onIntroDone }: IntroScreenProps) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // --- TIMING CONSTANTS ---
    const drawingDelay = 1000; // Time before the line starts drawing
    const drawingDuration = 2500; // How long the line takes to draw
    const finalMessageDelay = 2500; // How long to show the final message before transitioning

    // --- TIMERS ---
    const startTimer = setTimeout(() => setIsDrawing(true), drawingDelay);
    const finishTimer = setTimeout(
      () => setIsFinished(true),
      drawingDelay + drawingDuration
    );

    // 1. ADD THIS NEW TIMER
    // This timer will call onIntroDone automatically after everything is finished.
    const doneTimer = setTimeout(() => {
      onIntroDone();
    }, drawingDelay + drawingDuration + finalMessageDelay); // Total duration

    // --- CLEANUP ---
    return () => {
      clearTimeout(startTimer);
      clearTimeout(finishTimer);
      clearTimeout(doneTimer); // Make sure to clean up the new timer too!
    };
  }, [onIntroDone]); // The logic depends on onIntroDone, so it's a dependency.

  const drawAnimation: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 2.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-lg'>
      <AnimatePresence>
        {!isFinished && (
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {/* ... Your map and drawing SVG ... (This part is perfect, no changes needed) */}
            <div className='space-y-4'>
              <h1 className='text-3xl font-handwritten text-ink'>
                From my corner of the world to yours...
                <br />
              </h1>
            </div>
            <div className='relative w-full h-64'>
              <svg width='100%' height='100%' viewBox='0 0 400 200'>
                <image x='25' y='0' width='50' height='50' href={inaPic} />
                <image x='325' y='0' width='50' height='50' href={usaPic} />
                <image href={mapIna} x='12.5' y='82.5' width='75' height='75' />
                <image
                  href={mapUsa}
                  x='312.5'
                  y='82.5'
                  width='75'
                  height='75'
                />
                <motion.path
                  d='M 50 65 C 150 30, 250 100, 350 65'
                  stroke='var(--color-ink)'
                  strokeWidth='4'
                  strokeDasharray='10 5'
                  strokeLinecap='round'
                  fill='none'
                  variants={drawAnimation}
                  initial='hidden'
                  animate={isDrawing ? 'visible' : 'hidden'}
                />
                <circle
                  cx='50'
                  cy='65'
                  r='8'
                  fill='#FFEB3B'
                  className={isDrawing ? 'animate-pulse' : ''}
                />
                <circle
                  cx='350'
                  cy='65'
                  r='8'
                  fill='#90CAF9'
                  className={isDrawing ? 'animate-pulse' : ''}
                />
                <text
                  x='50'
                  y='170'
                  textAnchor='middle'
                  className='font-handwritten text-lg fill-current text-ink/80'
                  fontSize='14'
                >
                  Indonesia
                </text>
                <text
                  x='350'
                  y='170'
                  textAnchor='middle'
                  className='font-handwritten text-lg fill-current text-ink/80'
                  fontSize='14'
                >
                  United States
                </text>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isFinished && (
          <motion.div
            className='absolute flex flex-col items-center space-y-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='text-4xl font-handwritten text-terracotta'>
              Sending you something special!
            </h2>
            {/* 2. REMOVE THE BUTTON
                The new timer in useEffect handles the transition now.
            */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
