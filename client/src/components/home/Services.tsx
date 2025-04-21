import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PaintBucket, Code, RocketIcon, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
  gradient: string;
}

const ServiceCard = ({ title, description, icon: Icon, index, gradient }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -12, 
        transition: { duration: 0.3, type: "spring", stiffness: 300 } 
      }}
      className="h-full perspective-500"
    >
      <Card className="border border-gray-800 bg-primary-800/20 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 group overflow-hidden relative">
        <CardContent className="p-6 pt-6 relative z-10">
          <div className="relative z-10">
            <motion.div 
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
                gradient
              )}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              transition={{ 
                scale: { duration: 0.3 }, 
                rotate: { duration: 0.5, ease: "easeInOut", repeat: 0 } 
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-3"
              initial={{ opacity: 1 }}
              whileHover={{ 
                color: gradient.includes("blue") ? "#60a5fa" : 
                       gradient.includes("purple") ? "#c084fc" : 
                       gradient.includes("pink") ? "#f472b6" : 
                       gradient.includes("teal") ? "#2dd4bf" : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
        
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"
          initial={{ 
            background: `radial-gradient(circle at 50% 50%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                            gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                            gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                            "rgba(45, 212, 191, 0.3)"}, transparent 70%)` 
          }}
          animate={{ 
            background: [
              `radial-gradient(circle at 30% 30%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                  gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                  gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                  "rgba(45, 212, 191, 0.3)"}, transparent 70%)`,
              `radial-gradient(circle at 70% 70%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                  gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                  gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                  "rgba(45, 212, 191, 0.3)"}, transparent 70%)`,
              `radial-gradient(circle at 30% 70%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                  gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                  gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                  "rgba(45, 212, 191, 0.3)"}, transparent 70%)`,
              `radial-gradient(circle at 70% 30%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                  gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                  gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                  "rgba(45, 212, 191, 0.3)"}, transparent 70%)`,
              `radial-gradient(circle at 50% 50%, ${gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
                                                  gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
                                                  gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
                                                  "rgba(45, 212, 191, 0.3)"}, transparent 70%)`
            ]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />

        {/* Animated border glow */}
        <motion.div 
          className="absolute -inset-[1px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: `linear-gradient(90deg, transparent, ${
              gradient.includes("blue") ? "rgba(59, 130, 246, 0.3)" : 
              gradient.includes("purple") ? "rgba(139, 92, 246, 0.3)" : 
              gradient.includes("pink") ? "rgba(236, 72, 153, 0.3)" : 
              "rgba(45, 212, 191, 0.3)"
            }, transparent)`,
            borderRadius: "inherit",
            pointerEvents: "none"
          }}
        />
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

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

  const services = [
    {
      title: "Branding & Identity",
      description:
        "Create a distinctive brand identity that resonates with your target audience. From logos and color schemes to voice and messaging, we build cohesive brands that make an impact.",
      icon: PaintBucket,
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
    },
    {
      title: "Website & Portfolio Design",
      description:
        "Custom website designs that showcase your brand's unique personality. We focus on creating intuitive user experiences with stunning visuals and seamless functionality.",
      icon: Layers,
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-700",
    },
    {
      title: "Social Media Toolkit",
      description:
        "Comprehensive social media packages to establish your brand presence across platforms. Includes content strategy, template designs, and posting guidelines.",
      icon: RocketIcon,
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      title: "Tech Stack Setup",
      description:
        "From CMS implementation to e-commerce solutions, we'll set up the right technology to power your digital presence and streamline your business operations.",
      icon: Code,
      gradient: "bg-gradient-to-br from-blue-600 to-teal-500",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-950 to-primary-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="linePattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
                <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#linePattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Building Your Digital Presence,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              One Pixel at a Time
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From branding and design to development and marketing, we provide all the tools you 
            need to establish a powerful online presence and grow your startup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* Process timeline */}
        <div className="mt-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project delivers maximum value and meets 
              your business objectives.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-1 bg-gray-800 left-1/2 transform -translate-x-1/2 top-0 z-0 hidden md:block"></div>

            {/* Timeline steps */}
            <div className="space-y-12 md:space-y-0 relative z-10">
              {[
                {
                  title: "Discovery",
                  description: "We dig deep to understand your brand, audience, and objectives to create a strategic foundation.",
                  number: "01",
                },
                {
                  title: "Design & Development",
                  description: "From concepts to code, we craft every element with precision and purpose.",
                  number: "02",
                },
                {
                  title: "Testing & Refinement",
                  description: "Thorough testing ensures everything works flawlessly before launch.",
                  number: "03",
                },
                {
                  title: "Launch & Support",
                  description: "We help you launch with impact and provide ongoing support for continuous improvement.",
                  number: "04",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "md:flex items-center",
                    index % 2 === 0 ? "justify-start" : "justify-end",
                    "relative"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                    animate={isInView ? 
                      { opacity: 1, x: 0, y: 0 } : 
                      { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }
                    }
                    whileHover={{ 
                      y: -5, 
                      boxShadow: `0 10px 25px -5px ${index % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      boxShadow: { duration: 0.2 }
                    }}
                    className={cn(
                      "bg-primary-800/30 p-6 rounded-xl border border-gray-800 backdrop-blur-sm",
                      "transition-all duration-300 hover:border-blue-500/50 group",
                      "md:w-[calc(50%-2rem)]",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    <div className="flex items-start md:items-center">
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400 font-bold"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ rotate: { duration: 0.8, ease: "easeInOut" }, scale: { duration: 0.3 } }}
                      >
                        {step.number}
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl font-semibold mb-2"
                          whileHover={{ color: "#60a5fa" }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.title}
                        </motion.h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Moving background gradient */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl overflow-hidden z-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${index % 2 === 0 ? '70%' : '30%'} 50%, rgba(59, 130, 246, 0.3), transparent 70%)`
                      }}
                      animate={{
                        background: [
                          `radial-gradient(circle at ${index % 2 === 0 ? '70%' : '30%'} 30%, rgba(59, 130, 246, 0.3), transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)`,
                          `radial-gradient(circle at ${index % 2 === 0 ? '30%' : '70%'} 70%, rgba(59, 130, 246, 0.3), transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)`,
                          `radial-gradient(circle at ${index % 2 === 0 ? '70%' : '30%'} 30%, rgba(59, 130, 246, 0.3), transparent 70%)`
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.div>

                  {/* Timeline dot for desktop with animation */}
                  <motion.div 
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-primary" 
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.2, 
                      times: [0, 0.7, 1] 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
