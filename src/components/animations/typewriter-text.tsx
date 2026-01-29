import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({
  text,
  className = '',
  delay = 0,
  speed = 50,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
}
