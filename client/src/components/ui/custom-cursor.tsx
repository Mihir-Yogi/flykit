import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    // Listen for links and buttons to change cursor style
    const handleMouseEnterElement = () => setCursorVariant("button");
    const handleMouseLeaveElement = () => setCursorVariant("default");

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .interactive'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterElement);
      el.addEventListener("mouseleave", handleMouseLeaveElement);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterElement);
        el.removeEventListener("mouseleave", handleMouseLeaveElement);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(59, 130, 246, 0)",
      border: "2px solid rgba(59, 130, 246, 0.3)",
      boxShadow: "0 0 8px rgba(59, 130, 246, 0.1)"
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      border: "2px solid rgba(59, 130, 246, 0.6)",
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
    },
  };

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", mass: 0.3, stiffness: 200, damping: 20 }}
      style={{ 
        opacity: isVisible ? 1 : 0
      }}
    />
  );
}