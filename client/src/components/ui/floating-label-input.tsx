import { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface FloatingLabelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, error, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isActive = isFocused || hasValue || !!props.value;

  return (
    <div className="relative">
      <Input
        id={id}
        ref={ref}
        className={cn(
          "pt-4 pb-2 h-14 px-4 transition-all duration-200 bg-transparent",
          "border-gray-700 focus:border-blue-500",
          error && "border-red-500 focus:border-red-500",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(!!e.target.value);
        }}
        onChange={(e) => setHasValue(!!e.target.value)}
        {...props}
      />
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -10 : 0,
          scale: isActive ? 0.8 : 1,
          color: isFocused 
            ? "rgb(59, 130, 246)" 
            : error 
              ? "rgb(239, 68, 68)" 
              : "rgb(156, 163, 175)",
        }}
        transition={{ duration: 0.2 }}
        htmlFor={id}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 origin-[0] pointer-events-none text-gray-400 transition-all"
        )}
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export const FloatingLabelTextarea = forwardRef<
  HTMLTextAreaElement,
  FloatingLabelTextareaProps
>(({ className, label, error, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isActive = isFocused || hasValue || !!props.value;

  return (
    <div className="relative">
      <Textarea
        id={id}
        ref={ref}
        className={cn(
          "pt-6 min-h-32 px-4 transition-all duration-200 bg-transparent resize-none",
          "border-gray-700 focus:border-blue-500",
          error && "border-red-500 focus:border-red-500",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(!!e.target.value);
        }}
        onChange={(e) => setHasValue(!!e.target.value)}
        {...props}
      />
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -30 : -12,
          scale: isActive ? 0.8 : 1,
          color: isFocused 
            ? "rgb(59, 130, 246)" 
            : error 
              ? "rgb(239, 68, 68)" 
              : "rgb(156, 163, 175)",
        }}
        transition={{ duration: 0.2 }}
        htmlFor={id}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 origin-[0] pointer-events-none text-gray-400 transition-all"
        )}
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

FloatingLabelTextarea.displayName = "FloatingLabelTextarea";