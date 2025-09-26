// src/components/quiz-screen.tsx (Updated with Give Up button)

import type React from 'react';
import { useState } from 'react';

interface QuizScreenProps {
  onSuccess: () => void;
}

export function QuizScreen({ onSuccess }: QuizScreenProps) {
  const [code, setCode] = useState(['', '', '', '']);
  const [isChecking, setIsChecking] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState('Hint: your fav numbers');

  const correctCode = '6969';

  const resetQuiz = () => {
    setIsChecking(false);
    setFeedback(null);
    setCode(['', '', '', '']);
    document.getElementById('digit-0')?.focus();
  };

  const handleCodeCheck = (enteredCode: string) => {
    setIsChecking(true);

    if (enteredCode === correctCode) {
      setIsCorrect(true);
      const successMessage =
        attempts === 0
          ? 'ARE YOU CHEATING???'
          : attempts === 1
          ? 'G.E..N.I.U.S'
          : 'finally thank god';
      setFeedback(successMessage);
      setTimeout(() => onSuccess(), 2000);
    } else {
      setIsCorrect(false);
      setAttempts((prev) => prev + 1); // Only increment attempts on wrong answers

      // --- New Hint Logic (No Mercy Rule) ---
      if (attempts === 0) {
        setFeedback('first try, it ok, try again');
        setHint('Hint: you like it so much,,,');
      } else if (attempts === 1) {
        setFeedback('use your 8kb of your braincells plsss');
        setHint("Hint: it's part of your identity (but reversed)");
      } else {
        setFeedback('bruh did you even try?');
        setHint('Hint: disbe probably hates it');
      }
      setTimeout(resetQuiz, 2000);
    }
  };

  // --- New Function for the Give Up Button ---
  const handleGiveUp = () => {
    setIsChecking(true);
    setFeedback('damn it lets just toast it');
    setCode(['6', '9', '6', '9']); // Visually show the answer
    setTimeout(() => {
      onSuccess();
    }, 2500); // Give him a moment to see the answer
  };

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 3) {
      document.getElementById(`digit-${index + 1}`)?.focus();
    }

    if (newCode.join('').length === 4) {
      handleCodeCheck(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`digit-${index - 1}`)?.focus();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-8 text-center max-w-lg'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-handwritten text-ink'>
          Unlock the Toaster!
        </h1>
        <h2 className='text-2xl font-handwritten text-terracotta'>
          Enter the secret code
        </h2>
      </div>

      <div className='bg-background/50 p-6 rounded-lg border-2 border-ink/20 space-y-6 w-full'>
        <p className='text-xl font-handwritten text-ink'>
          🔒 4-Digit Locker Code
        </p>

        <div className='flex justify-center space-x-2 sm:space-x-4'>
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type='text'
              inputMode='numeric'
              value={digit}
              onChange={(e) => handleDigitChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl font-handwritten border-2 border-ink/30 rounded-lg focus:border-muted-blue focus:outline-none bg-background transition-all duration-300'
              maxLength={1}
              disabled={isChecking}
            />
          ))}
        </div>

        <div className='h-16 flex flex-col items-center justify-center'>
          {isChecking ? (
            <p
              className={`text-xl font-handwritten transition-opacity duration-500 ${
                isCorrect ? 'text-terracotta' : 'text-ink'
              }`}
            >
              {feedback}
            </p>
          ) : (
            <p className='text-sm font-handwritten text-ink/60 transition-opacity duration-500'>
              {hint}
            </p>
          )}
        </div>

        {/* --- The New Give Up Button --- */}
        <div className='h-8 pt-2'>
          {attempts > 0 && !isChecking && (
            <button
              onClick={handleGiveUp}
              className='text-xs font-handwritten text-ink/50 hover:text-terracotta transition-colors underline'
            >
              admit that you're dumb button
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
