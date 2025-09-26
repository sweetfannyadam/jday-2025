export function FinalMessageScreen() {
  return (
    <div
      className='min-h-screen w-full flex items-center justify-center p-8 relative'
      style={{
        background: `
          linear-gradient(45deg, 
            rgba(107, 142, 173, 0.1) 0%, 
            rgba(229, 155, 116, 0.1) 100%
          ),
          radial-gradient(circle at 2px 2px, rgba(44,44,44,0.05) 2px, transparent 0)
        `,
        backgroundSize: '100% 100%, 30px 30px',
      }}
    >
      <div className='max-w-2xl text-center space-y-6'>
        <div className='text-2xl md:text-3xl text-foreground font-sans leading-relaxed text-balance'>
          <p className='mb-6'>
            Happy Birthday to someone who makes every day brighter! 🎉
          </p>
          <p className='mb-6'>
            Your kindness, laughter, and amazing spirit light up every room you
            enter. I'm so grateful to have you in my life and can't wait to
            celebrate many more birthdays with you.
          </p>
          <p className='mb-8'>
            Here's to another year of adventures, inside jokes, and
            unforgettable memories together!
          </p>
          <p className='text-secondary font-medium'>
            Love, Your Favorite Person ❤️
          </p>
        </div>
      </div>

      {/* Heartbeat heart in corner */}
      <div className='absolute bottom-8 right-8'>
        <div className='heartbeat text-secondary text-2xl'>❤️</div>
      </div>
    </div>
  );
}
