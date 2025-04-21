import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollAnimationOptions {
  threshold?: number;
  direction?: "vertical" | "horizontal";
  startRange?: [number, number];
  endRange?: [number, number];
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
): [React.RefObject<HTMLElement>, MotionValue<number>] {
  const {
    threshold = 0.1,
    direction = "vertical",
    startRange = [0, 1],
    endRange = [0, 1],
  } = options;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, startRange, endRange);

  return [ref, progress];
}

export function useElementInView() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      }
    );

    observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY ? "down" : "up";
      
      if (
        direction !== scrollDirection &&
        (Math.abs(currentScrollY - prevScrollY) > 10)
      ) {
        setScrollDirection(direction);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, scrollDirection]);

  return scrollDirection;
}