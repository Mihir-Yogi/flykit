import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TypewriterEffect, SplitText } from "@/components/ui/text-animation";
import { PrimaryAnimatedButton, OutlineAnimatedButton } from "@/components/ui/animated-button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-950 to-primary-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800/20 via-primary-900/5 to-transparent"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNjQsNzYsMTAyLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')]"></div>
      
        {/* Animated orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[15%] w-44 h-44 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[15%] left-[25%] w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] left-[10%] w-32 h-32 rounded-full bg-green-500/10 blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 container px-6 md:px-12 mx-auto text-center"
      >
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
        >
          <SplitText 
            animation="slideUp" 
            staggerChildren={0.03}
          >
            Your Startup Toolkit,
          </SplitText>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            <TypewriterEffect 
              words={["Delivered with Tech Precision", "Built for Success", "Designed to Impress"]} 
              typingSpeed={100} 
              deletingSpeed={80} 
              delayBetweenWords={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-8"
        >
          <SplitText 
            animation="fadeIn" 
            staggerChildren={0.01}
            delayStart={0.5}
          >
            Design, Develop, and Grow — Fly with Flykit
          </SplitText>
        </motion.p>
        
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <PrimaryAnimatedButton 
            size="lg" 
            className="px-8 py-6"
            effectType="glow"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Build
            <ArrowRight className="ml-2 h-5 w-5" />
          </PrimaryAnimatedButton>
          <OutlineAnimatedButton 
            size="lg" 
            className="px-8 py-6"
            effectType="spotlight"
            onClick={() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Our Work
          </OutlineAnimatedButton>
        </motion.div>
        
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-20"
        >
          <motion.a 
            href="#about"
            className="relative inline-flex items-center flex-col text-gray-400 text-sm group"
            whileHover={{ scale: 1.05, color: "#60a5fa" }}
            transition={{ duration: 0.3 }}
          >
            <span className="mb-2">Scroll Down</span>
            
            {/* Circle + Arrow Animation */}
            <div className="relative w-10 h-10">
              {/* Pulsing circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Arrow animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300"
                >
                  <path 
                    d="M10 15L15 10M10 15L5 10M10 15V5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
