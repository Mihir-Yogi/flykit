import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden"
            >
              <div className="z-10 font-bold text-4xl text-white">FK</div>
              
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 z-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(37, 99, 235, 1) 0%, rgba(139, 92, 246, 1) 100%)",
                    "linear-gradient(45deg, rgba(139, 92, 246, 1) 0%, rgba(37, 99, 235, 1) 100%)",
                    "linear-gradient(45deg, rgba(37, 99, 235, 1) 0%, rgba(139, 92, 246, 1) 100%)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-bold text-white mb-2"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Flykit Agency
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-40"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}