import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  effectType?: "spotlight" | "shine" | "glow" | "ripple";
  gradientFrom?: string;
  gradientTo?: string;
}

export function AnimatedButton({
  children,
  className,
  effectType = "spotlight",
  gradientFrom = "from-blue-600",
  gradientTo = "to-purple-600",
  ...props
}: AnimatedButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Spotlight effect (follows mouse cursor)
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (effectType !== "spotlight") return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  return (
    <Button
      className={cn(
        "relative overflow-hidden",
        effectType === "glow" && "transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20",
        effectType === "shine" && "group",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Base content */}
      <span className="relative z-10">{children}</span>

      {/* Spotlight effect */}
      {effectType === "spotlight" && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isHovering
              ? `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 40%)`
              : "",
          }}
        />
      )}

      {/* Shine effect */}
      {effectType === "shine" && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform"
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Glow Gradient Border */}
      {effectType === "glow" && (
        <motion.div
          className={cn(
            "absolute inset-0 opacity-0 bg-gradient-to-r",
            gradientFrom,
            gradientTo
          )}
          initial={{ opacity: 0 }}
          animate={isHovering ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Ripple effect */}
      {effectType === "ripple" && isHovering && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0, x: position.x, y: position.y, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            originX: 0,
            originY: 0,
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      )}
    </Button>
  );
}

export function PrimaryAnimatedButton({
  children,
  className,
  effectType = "spotlight",
  ...props
}: AnimatedButtonProps) {
  return (
    <AnimatedButton
      className={cn(
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
        "text-white rounded-full transition-all duration-300 transform hover:scale-105",
        className
      )}
      effectType={effectType}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export function OutlineAnimatedButton({
  children,
  className,
  effectType = "shine",
  ...props
}: AnimatedButtonProps) {
  return (
    <AnimatedButton
      variant="outline"
      className={cn(
        "border-gray-700 text-white hover:bg-white/5",
        "rounded-full transition-all duration-300",
        className
      )}
      effectType={effectType}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}