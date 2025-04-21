import { useEffect, useState } from "react";

interface ScrollSpyOptions {
  offsetTop?: number;
  offsetBottom?: number;
}

function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {}
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { offsetTop = 0, offsetBottom = 0 } = options;

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const checkScroll = () => {
      const scrollPosition = window.scrollY + offsetTop;

      // Find the last section that has been scrolled past
      let currentSection: string | null = null;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        
        if (!section) continue;
        
        const sectionTop = section.offsetTop - offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight - offsetBottom;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = sectionId;
          break;
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", checkScroll);
    // Initial check
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [sectionIds, offsetTop, offsetBottom, activeSection]);

  return activeSection;
}

export default useScrollSpy;
