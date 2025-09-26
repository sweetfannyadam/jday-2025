// src/components/letter-screen.tsx

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import voiceNote from '../assets/voicenote.mp3'; // Import your audio file

export function LetterScreen() {
  const [showQuestion, setShowQuestion] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleYes = () => {
    setShowQuestion(false);
    // Auto-play after a short delay for smooth transition
    setTimeout(() => {
      handlePlay();
    }, 300);
  };

  const handleNo = () => {
    setShowQuestion(false);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='bg-paper p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] flex flex-col items-center relative overflow-hidden'
    >
      {/* Subtle accent: decorative border or pattern */}
      <div className='absolute inset-0 border-2 border-ink/10 rounded-lg pointer-events-none'>
        <div className='absolute -top-1 -left-1 w-4 h-4 bg-terracotta rounded-full'></div>
        <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-terracotta rounded-full'></div>
        <div className='absolute top-1/2 left-2 w-2 h-2 bg-ink/20 rounded-full'></div>
        <div className='absolute top-1/2 right-2 w-2 h-2 bg-ink/20 rounded-full'></div>
      </div>

      <h1 className='text-3xl font-handwritten text-terracotta mb-6 relative z-10'>
        One last thing...
      </h1>

      {/* Scrollable letter content (only the main letter, excluding buttons to prevent layout shifts) */}
      <div className='w-full text-lg italic font-handwritten text-ink leading-relaxed overflow-y-auto pr-4 mb-6 relative z-10 max-h-[50vh]'>
        <p className='mb-4'>Happy 29th birthday, Judah!</p>
        <p className='mb-4'>
          I'm so happy I get to celebrate your birthday this year. Before
          anything else, I just wanted to say thank you. Thank you for being
          you, for making it to 29, and for being here, talking with me.
          <br />
          You're such a nice man with big heart, you're sweet, and you always
          throw great jokes (you're also handsome, wink wink) (and pick me).
          <br />
          Even though we've only known each other for almost a year and have
          never met, I'm so proud of you. Getting to know you has healed a part
          of me, and you’ve taught me things just by being yourself. So I really
          hope you're as proud of yourself as I am of you.
        </p>
        <p className='mb-4'>
          For the year ahead, I hope you get to experience, explore, and learn
          more of this life, on your own terms. I hope you discover how many
          good things are out there waiting for you and I hope you're ready to
          receive them all. You have so much strength in you, and you deserve
          every moment of happiness the universe sends your way.
          <br />I also sent you a couple of small things. One is a tiny stone
          that says "hugs" on it. The idea is that you can rub or hold it
          whenever you're feeling lonely or overwhelmed, and it's like a hug
          from me ( '́⌣'̀)/(⌣́_⌣̀)
          <br />
          There's also a toast crochet, mostly because I find that texture
          really comforting and thought you might, too. I hope they make you
          smile.
        </p>
        <p>
          with all my pick me ness,
          <br />
          liz
        </p>
      </div>

      {/* Question section - moved outside scrollable div to prevent scrollbar issues on hover */}
      {showQuestion && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full text-center space-y-4 pt-4 border-t border-ink/20 relative z-10'
        >
          <p className='text-base text-terracotta font-handwritten'>
            do you want me to read it for you? (‾̴̴͡͡▿ ‾̴̴͡͡ʃƪ)
          </p>
          <div className='flex justify-center space-x-4'>
            <motion.button
              onClick={handleYes}
              className='px-4 py-2 bg-terracotta text-white rounded-full font-handwritten text-sm shadow-md transition-all duration-200 relative z-10 overflow-hidden'
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 12px rgba(180, 83, 9, 0.4)',
              }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              <span className='relative z-10'>yes</span>
              {/* Subtle glow effect on hover */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.button>
            <motion.button
              onClick={handleNo}
              className='px-4 py-2 border-2 border-ink/50 text-ink rounded-full font-handwritten text-sm shadow-md transition-all duration-200 relative z-10 overflow-hidden bg-white/80 hover:bg-ink/10'
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              <span className='relative z-10'>no</span>
              {/* Subtle glow effect on hover */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Audio controls section */}
      <div className='w-full mt-auto pt-4  relative z-10'>
        {/* Hidden audio element for background playback */}
        <audio
          ref={audioRef}
          src={voiceNote}
          onEnded={handleAudioEnd}
          className='hidden'
        >
          Your browser does not support the audio element.
        </audio>

        {/* Tiny play/pause button - shown after question is answered */}
        {!showQuestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className='flex justify-center'
          >
            <motion.button
              onClick={toggleAudio}
              className='w-12 h-12 bg-terracotta/80 hover:bg-terracotta rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200 relative z-10'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
