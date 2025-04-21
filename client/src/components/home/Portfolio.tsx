import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Category = "all" | "branding" | "web" | "mobile" | "marketing";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category[];
  image: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NovaTech Brand Identity",
    description: "Complete brand identity for an innovative tech startup.",
    category: ["branding"],
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "NovaTech Inc.",
  },
  {
    id: 2,
    title: "EcoSphere Web Platform",
    description: "E-commerce platform for sustainable products.",
    category: ["web"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "EcoSphere",
  },
  {
    id: 3,
    title: "PulseApp Mobile Application",
    description: "Fitness tracking app with social features.",
    category: ["mobile"],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "PulseHealth",
  },
  {
    id: 4,
    title: "Lumina Digital Campaign",
    description: "Multi-channel marketing campaign for product launch.",
    category: ["marketing"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "Lumina Beauty",
  },
  {
    id: 5,
    title: "Artisan Brand & Web",
    description: "Brand identity and website for a craft brewery.",
    category: ["branding", "web"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "Artisan Brew Co.",
  },
  {
    id: 6,
    title: "FinEdge App & Marketing",
    description: "Finance app with integrated marketing strategy.",
    category: ["mobile", "marketing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    client: "FinEdge",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-primary-800/20 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50">
        <AspectRatio ratio={16 / 10}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span 
                key={cat} 
                className="px-2 py-1 text-xs bg-primary-800/50 rounded-full text-blue-300"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category.includes(activeCategory)
  );

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-900 to-primary-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full mb-4 inline-block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of work that showcases our expertise in branding, web design, 
            mobile development, and digital marketing.
          </p>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value as Category)}
            className="w-full max-w-xl"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8 bg-primary-800/30 backdrop-blur-sm">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-700 text-white hover:bg-white/5 px-8 rounded-full transition-all duration-300"
            onClick={() => setActiveCategory("all")}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
