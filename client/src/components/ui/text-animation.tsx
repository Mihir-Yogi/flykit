import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export function TypewriterEffect({
  words,
  loop = true,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1000,
  className,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingPaused, setIsTypingPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isTypingPaused) {
      if (isDeleting) {
        // Deleting text
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) =>
            loop ? (prevIndex + 1) % words.length : Math.min(prevIndex + 1, words.length - 1)
          );
        } else {
          const timeoutId = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentText.length - 1));
          }, deletingSpeed);
          return () => clearTimeout(timeoutId);
        }
      } else {
        // Typing text
        if (currentText === currentWord) {
          // Pause at the end of typing a word
          setIsTypingPaused(true);
          const timeoutId = setTimeout(() => {
            setIsTypingPaused(false);
            setIsDeleting(true);
          }, delayBetweenWords);
          return () => clearTimeout(timeoutId);
        } else {
          // Continue typing
          const timeoutId = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          }, typingSpeed);
          return () => clearTimeout(timeoutId);
        }
      }
    }
  }, [
    currentText,
    isDeleting,
    isTypingPaused,
    currentWordIndex,
    words,
    loop,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
        className="inline-block w-1 ml-1 -mb-1 bg-current"
        style={{ height: "1.1em" }}
      >
        &nbsp;
      </motion.span>
    </span>
  );
}

interface TextRevealProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function TextReveal({
  text,
  duration = 0.05,
  delay = 0,
  className,
  once = false,
}: TextRevealProps) {
  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  useEffect(() => {
    // If not visible initially and once=true, we'll set visibility when intersecting
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            setShouldAnimate(false);
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(`.textReveal-${delay}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [delay, once]);

  const words = text.split(" ");

  return (
    <div className={`${className} textReveal-${delay}`}>
      <div className="flex flex-wrap">
        {words.map((word, i) => (
          <div key={i} className="mr-2 overflow-hidden">
            <motion.div
              initial={shouldAnimate ? { y: 100, opacity: 0 } : false}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + i * duration,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SplitTextProps {
  children: string;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideDown";
  staggerChildren?: number;
  delayStart?: number;
}

export function SplitText({
  children,
  className = "",
  animation = "fadeIn",
  staggerChildren = 0.03,
  delayStart = 0,
}: SplitTextProps) {
  // Split text into an array of characters
  const characters = children.split("");

  // Animation variants
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: { duration: 0.3, delay: delayStart + i * staggerChildren },
      }),
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delayStart + i * staggerChildren,
          ease: [0.22, 1, 0.36, 1],
        },
      }),
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delayStart + i * staggerChildren,
          ease: [0.22, 1, 0.36, 1],
        },
      }),
    },
  };

  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={animations[animation]}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}