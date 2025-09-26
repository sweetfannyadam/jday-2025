import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PostcardScreenProps {
  onShowLetter: () => void;
}

export function PostcardScreen({ onShowLetter }: PostcardScreenProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Auto-flip animation on mount
    const flipTimer = setTimeout(() => {
      setIsFlipped(true);
    }, 500);

    return () => {
      clearTimeout(flipTimer);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-xl'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-handwritten text-terracotta'>
          Happy Birthday!
        </h1>
        <p className='text-lg font-handwritten text-ink/80'>
          your special toast has a message...
        </p>
      </div>

      <div className='relative perspective-1000'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            className={`relative w-[28rem] h-[20rem] transition-transform duration-1000 transform-style-preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of postcard (toast side) */}
            <div className='absolute inset-0 backface-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-3 border-ink rounded-lg overflow-hidden shadow-lg'>
              <div
                className='absolute inset-0 border-8 border-transparent bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-[length:20px_20px] opacity-80'
                style={{
                  backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #dc2626 0px,
                      #dc2626 10px,
                      #2563eb 10px,
                      #2563eb 20px
                    )`,
                }}
              ></div>
              <div className='absolute inset-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded flex items-center justify-center'>
                <svg width='160' height='160' viewBox='0 0 120 120'>
                  {/* Toast outline with golden color */}
                  <path
                    d='M20 30 C15 25, 15 20, 25 15 L95 15 C105 20, 105 25, 100 30 L100 90 C105 95, 105 100, 95 105 L25 105 C15 100, 15 95, 20 90 Z'
                    fill='#f4d03f'
                    stroke='var(--color-terracotta)'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  {/* Toast texture with golden brown spots */}
                  <circle cx='40' cy='40' r='2' fill='#d68910' opacity='0.8' />
                  <circle cx='60' cy='50' r='2' fill='#d68910' opacity='0.8' />
                  <circle cx='80' cy='45' r='2' fill='#d68910' opacity='0.8' />
                  <circle cx='45' cy='70' r='2' fill='#d68910' opacity='0.8' />
                  <circle cx='75' cy='75' r='2' fill='#d68910' opacity='0.8' />
                </svg>
              </div>
            </div>

            <div className='absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-amber-50 to-orange-50 border-3 border-ink rounded-lg overflow-hidden shadow-lg'>
              {/* Airmail border */}
              <div
                className='absolute inset-0 border-8 border-transparent bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-[length:20px_20px] opacity-80'
                style={{
                  backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #dc2626 0px,
                      #dc2626 10px,
                      #2563eb 10px,
                      #2563eb 20px
                    )`,
                }}
              ></div>

              <div className='absolute inset-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded p-6'>
                {/* Stamp area */}
                <div className='absolute top-4 right-4'>
                  <div className='relative w-16 h-20 rounded-md bg-[#fff8ec] border-2 border-terracotta shadow-sm overflow-hidden'>
                    {/* Decorative inner border */}
                    <div className='absolute inset-1 border border-dashed border-terracotta/40 rounded-sm'></div>

                    {/* Stamp content */}
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-[9px] font-handwritten text-terracotta leading-tight'>
                      <div className='text-[8px] font-bold'>TOAST POST</div>
                      <div className='pt-1 text-[6px] text-ink/50'>
                        SEP 2025
                      </div>
                      <div className='text-xl mt-1'>🍞</div>
                    </div>
                  </div>
                </div>

                {/* Postmark circle */}
                <div className='absolute top-8 right-[7rem]'>
                  <svg
                    width='90'
                    height='30'
                    viewBox='0 0 90 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0,15 C10,10 20,20 30,15 C40,10 50,20 60,15 C70,10 80,20 90,15'
                      stroke='#8b5e3c'
                      strokeWidth='1.2'
                      strokeDasharray='3,2'
                      opacity='0.6'
                    />
                  </svg>
                  <div className='text-[8px] font-handwritten text-ink/50 text-center mt-1 italic'>
                    Special Toast Delivery
                  </div>
                </div>

                <div className='absolute top-3 left-6 rotate-[-8deg] bg-blue-100 text-blue-700 px-3 py-[2px] text-[9px] font-semibold border border-blue-300 rounded shadow'>
                  ✈️ AIR MAIL
                </div>
                <div className='absolute bottom-6 left-6 text-xl rotate-[10deg]'>
                  ✨
                </div>
                <div className='absolute bottom-6 right-6 text-xl rotate-[-12deg]'>
                  📞🦭
                </div>

                {/* Vertical divider line */}
                <div className='absolute right-40 top-6 bottom-6 w-px bg-ink/30'></div>

                {/* Address lines on the right */}
                <div className='absolute right-6 top-28 space-y-2 text-right'>
                  <div className='w-28 h-px bg-ink/30'></div>
                  <div className='justify- text-sm font-handwritten text-ink/60'>
                    To: Pick me Judah
                  </div>
                  <div className='w-28 h-px bg-ink/30'></div>
                  <div className='text-center text-sm font-handwritten text-ink/60'>
                    Discord
                  </div>
                  <div className='w-28 h-px bg-ink/30'></div>
                  <div className='text-center text-sm font-handwritten text-ink/60'>
                    internet
                  </div>
                  <div className='w-28 h-px bg-ink/30'></div>
                </div>

                {/* Message area on the left */}
                <div className='pr-44 pt-8 space-y-3'>
                  <div className='text-base font-handwritten text-ink/80 italic'>
                    Happy Juday!!,
                  </div>

                  <div className='space-y-3 text-base font-handwritten text-ink leading-relaxed'>
                    <p>
                      Just like this toast started as simple bread, you've grown
                      into someone truly wonderful.
                    </p>
                    <p className='text-terracotta'>Life is butter with you!</p>
                    <p className='text-terracotta text-3xl'>🧈</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Small button to open another letter, shown after flip */}
      {isFlipped && (
        <motion.button
          onClick={onShowLetter}
          className='px-6 py-2 bg-terracotta text-white rounded-full font-handwritten text-sm hover:bg-orange-600 transition-colors duration-200 shadow-md'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        >
          actually i have some more things to say
        </motion.button>
      )}
    </div>
  );
}
