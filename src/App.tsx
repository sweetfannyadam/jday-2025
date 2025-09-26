// src/App.tsx (Updated with Yes/No questions and Goodbye screen)

import { useState } from 'react';

import { IntroScreen } from './components/intro-screen';
import { BreadScreen } from './components/bread-screen';
import { ToasterScreen } from './components/toaster-screen';
import { QuizScreen } from './components/quiz-screen';
import { ToastingScreen } from './components/toasting-screen';
import { ToastRevealScreen } from './components/toast-reveal-screen';
import { PostcardScreen } from './components/postcard-screen';
import { LetterScreen } from './components/letter-screen';

// 1. Add the new GOODBYE stage
type AppStage =
  | 'INTRO'
  | 'PROMPT_READY'
  | 'PROMPT_START'
  | 'BREAD'
  | 'TOASTER'
  | 'QUIZ'
  | 'TOASTING'
  | 'REVEAL'
  | 'POSTCARD'
  | 'LETTER'
  | 'GOODBYE 1'
  | 'GOODBYE 2'; // <-- New stage for the "No" path

function App() {
  const [stage, setStage] = useState<AppStage>('INTRO');

  const renderCurrentStage = () => {
    switch (stage) {
      case 'INTRO':
        return <IntroScreen onIntroDone={() => setStage('PROMPT_READY')} />;

      case 'PROMPT_READY':
        return (
          <div className='flex flex-col items-center space-y-8 text-center animate-fade-in'>
            {/* 2. Made the question font a bit smaller */}
            <h1 className='text-3xl font-handwritten text-ink'>
              ¿Estás listo?
            </h1>
            <div className='flex items-center space-x-6'>
              {/* "No" button leads to the GOODBYE stage */}
              <button
                onClick={() => setStage('GOODBYE 1')}
                className='text-1xl font-handwritten text-ink/70 hover:text-terracotta transition-colors'
              >
                no
              </button>
              {/* "Yes" button continues the flow */}
              <button
                onClick={() => setStage('PROMPT_START')}
                className='text-2xl font-handwritten text-ink hover:text-terracotta transition-colors cursor-pointer  hover:border-terracotta px-8 py-4 rounded-lg hover:bg-terracotta/10'
              >
                sí
              </button>
            </div>
          </div>
        );

      case 'PROMPT_START':
        return (
          <div className='flex flex-col items-center space-y-8 text-center animate-fade-in max-w-md'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-handwritten text-ink'>
                do you want to make some
              </h1>
              <h2 className='text-4xl font-handwritten text-terracotta'>
                Birthday Toast?
              </h2>
            </div>
            <div className='flex items-center space-x-6'>
              <button
                onClick={() => setStage('GOODBYE 2')}
                className='text-1xl font-handwritten text-ink/70 hover:text-terracotta transition-colors'
              >
                Not really
              </button>
              <button
                onClick={() => setStage('BREAD')}
                className='text-2xl font-handwritten text-ink hover:text-terracotta transition-colors cursor-pointer  hover:border-terracotta px-8 py-4 rounded-lg hover:bg-terracotta/10'
              >
                YES!
              </button>
            </div>
          </div>
        );

      case 'GOODBYE 1':
        return (
          <div className='text-center animate-fade-in'>
            <h1 className='text-4xl font-handwritten text-ink/80'>(۳ ˚Д˚)۳</h1>
            <p className='text-2xl font-handwritten text-ink/50 mt-2'>
              GO BACK AND CLICK YES
            </p>
          </div>
        );

      case 'GOODBYE 2':
        return (
          <div className='text-center animate-fade-in'>
            <h1 className='text-4xl font-handwritten text-ink/80'>
              ┌П┐(︶へ︶ メ)
            </h1>
            {/* <p className='text-2xl font-handwritten text-ink/50 mt-2'>
              GO BACK AND CLICK YES
            </p> */}
          </div>
        );

      case 'BREAD':
        return <BreadScreen onBreadClick={() => setStage('TOASTER')} />;
      case 'TOASTER':
        return (
          <ToasterScreen
            onToasterClick={() => setStage('QUIZ')}
            breadInToaster={true}
          />
        );
      case 'QUIZ':
        return <QuizScreen onSuccess={() => setStage('TOASTING')} />;
      case 'TOASTING':
        return <ToastingScreen onToastDone={() => setStage('REVEAL')} />;
      case 'REVEAL':
        return <ToastRevealScreen onFlip={() => setStage('POSTCARD')} />;
      case 'POSTCARD':
        return <PostcardScreen onShowLetter={() => setStage('LETTER')} />;
      case 'LETTER':
        return <LetterScreen />;
      default:
        return (
          <div className='font-handwritten text-xl'>Something went wrong!</div>
        );
    }
  };

  return (
    <main className='w-full min-h-screen flex items-center justify-center bg-background p-4 overflow-hidden'>
      {renderCurrentStage()}
    </main>
  );
}

export default App;
