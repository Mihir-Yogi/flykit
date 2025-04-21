import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  highlightedText?: string;
  isPopular?: boolean;
  ctaText: string;
  ctaAction: () => void;
  gradient: string;
}

const PricingSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
      },
    }),
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      price: "$1,999",
      description: "Perfect for new startups and small businesses looking to establish their online presence.",
      highlightedText: "One-time payment",
      features: [
        { text: "Logo & Brand Identity", included: true },
        { text: "Responsive Website (up to 5 pages)", included: true },
        { text: "Social Media Profile Setup", included: true },
        { text: "Basic SEO Optimization", included: true },
        { text: "Email Marketing Setup", included: false },
        { text: "Ongoing Maintenance", included: false },
      ],
      ctaText: "Get Started",
      ctaAction: handleScrollToContact,
      gradient: "from-blue-500 to-indigo-700",
    },
    {
      title: "Growth",
      price: "$4,999",
      description: "For businesses ready to grow their brand and expand their digital footprint.",
      highlightedText: "Most popular choice",
      isPopular: true,
      features: [
        { text: "Advanced Logo & Brand Package", included: true },
        { text: "Custom Website (up to 10 pages)", included: true },
        { text: "Social Media Strategy & Setup", included: true },
        { text: "Comprehensive SEO Package", included: true },
        { text: "Email Marketing Automation", included: true },
        { text: "3 Months Maintenance", included: true },
      ],
      ctaText: "Choose Plan",
      ctaAction: handleScrollToContact,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for established businesses with specific needs and complex requirements.",
      features: [
        { text: "Complete Brand Ecosystem", included: true },
        { text: "Custom Web Application", included: true },
        { text: "Integrated Marketing Strategy", included: true },
        { text: "Advanced Analytics Dashboard", included: true },
        { text: "Custom Features Development", included: true },
        { text: "Dedicated Support Team", included: true },
      ],
      ctaText: "Contact Us",
      ctaAction: handleScrollToContact,
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-900 to-primary-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent"></div>
        
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
                id="pricingPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="1" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-purple-500 uppercase bg-purple-500/10 rounded-full mb-4 inline-block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Transparent Pricing,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Exceptional Value
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your business needs. All plans include personalized 
            service, fast delivery, and our commitment to bringing your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full perspective-500"
            >
              <Card className={cn(
                "h-full border border-gray-800 bg-primary-800/20 backdrop-blur-sm relative overflow-hidden",
                "transition-all duration-300 hover:border-blue-500/50 group",
                plan.isPopular && "border-purple-500/50"
              )}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 -mt-5 -mr-5">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-20">
                        <path 
                          d="M60,10 A50,50 0 1 1 59.9,10" 
                          fill="none" 
                          stroke="url(#popularGradient)" 
                          strokeWidth="2" 
                          strokeDasharray="4,4"
                        />
                        <defs>
                          <linearGradient id="popularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#4f46e5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                )}

                <CardHeader className="pb-3">
                  {plan.isPopular && (
                    <Badge 
                      className={cn(
                        "bg-gradient-to-r from-purple-500 to-indigo-600 text-white mb-2 hover:from-purple-600 hover:to-indigo-700",
                        "border-0"
                      )}
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">{plan.title}</CardTitle>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.highlightedText && (
                      <span className="text-sm text-muted-foreground">{plan.highlightedText}</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx + 0.3 }}
                      >
                        {feature.included ? (
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        ) : (
                          <XIcon className="h-5 w-5 text-muted-foreground mr-2 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={cn(
                      "w-full font-semibold",
                      plan.isPopular ? 
                        "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700" :
                        "bg-gradient-to-r " + plan.gradient
                    )}
                    onClick={plan.ctaAction}
                  >
                    {plan.ctaText}
                  </Button>
                </CardFooter>

                {/* Animated border glow */}
                <motion.div 
                  className="absolute -inset-[1px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${
                      plan.isPopular ? 
                        "rgba(139, 92, 246, 0.3)" : 
                        plan.gradient.includes("blue") ? 
                          "rgba(59, 130, 246, 0.3)" : 
                          "rgba(99, 102, 241, 0.3)"
                    }, transparent)`
                  }}
                />

                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${
                      plan.isPopular ? 
                        "rgba(139, 92, 246, 0.3)" : 
                        plan.gradient.includes("blue") ? 
                          "rgba(59, 130, 246, 0.3)" : 
                          "rgba(99, 102, 241, 0.3)"
                    }, transparent 70%)`
                  }}
                  animate={{
                    background: [
                      `radial-gradient(circle at 30% 30%, ${
                        plan.isPopular ? 
                          "rgba(139, 92, 246, 0.3)" : 
                          plan.gradient.includes("blue") ? 
                            "rgba(59, 130, 246, 0.3)" : 
                            "rgba(99, 102, 241, 0.3)"
                      }, transparent 70%)`,
                      `radial-gradient(circle at 70% 70%, ${
                        plan.isPopular ? 
                          "rgba(139, 92, 246, 0.3)" : 
                          plan.gradient.includes("blue") ? 
                            "rgba(59, 130, 246, 0.3)" : 
                            "rgba(99, 102, 241, 0.3)"
                      }, transparent 70%)`,
                      `radial-gradient(circle at 50% 50%, ${
                        plan.isPopular ? 
                          "rgba(139, 92, 246, 0.3)" : 
                          plan.gradient.includes("blue") ? 
                            "rgba(59, 130, 246, 0.3)" : 
                            "rgba(99, 102, 241, 0.3)"
                      }, transparent 70%)`
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need a custom solution? <span className="text-blue-400 font-medium">Get in touch</span> with 
            our team to create a tailored package that meets your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;