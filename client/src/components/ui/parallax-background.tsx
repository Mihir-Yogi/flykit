import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

export function ParallaxBackground({ children }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  
  // Star/dot coordinates
  const stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    alpha: Math.random() * 0.5 + 0.2,
  }));

  return (
    <motion.div ref={containerRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-primary-950 to-primary-900 opacity-50" />
        
        {/* Stars/dots */}
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {stars.map((star, i) => (
            <circle
              key={i}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size}
              fill={`rgba(59, 130, 246, ${star.alpha})`}
            />
          ))}
        </svg>
        
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-radial from-blue-500/10 to-transparent opacity-20" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-radial from-purple-500/10 to-transparent opacity-20" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}