import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import ServicesSection from "@/components/home/Services";
import PortfolioSection from "@/components/home/Portfolio";
import PricingSection from "@/components/home/Pricing";
import ContactSection from "@/components/home/Contact";
import FooterSection from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageLoader } from "@/components/ui/page-loader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  // Scroll to top button logic
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    
    const handleScroll = () => {
      if (scrollToTopBtn) {
        if (window.scrollY > 500) {
          scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
          scrollToTopBtn.classList.add("opacity-100");
        } else {
          scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
          scrollToTopBtn.classList.remove("opacity-100");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Page Loader */}
      <PageLoader />
      
      {/* Custom Cursor for desktop */}
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-primary text-white overflow-hidden"
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
        <FooterSection />
        
        {/* Scroll to top button with improved animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Button
            id="scrollToTop"
            onClick={scrollToTop}
            size="icon"
            className={cn(
              "fixed bottom-6 right-6 z-50 rounded-full w-12 h-12",
              "bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
              "opacity-0 pointer-events-none transition-all duration-300",
              "shadow-lg hover:shadow-blue-500/20"
            )}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="h-6 w-6" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}
