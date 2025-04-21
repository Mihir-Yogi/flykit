import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LightbulbIcon, Code2Icon, BarChart3Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import Diploma from "../asserts/images/Diploma_Passout_convocation.jpg";


const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  // Current team member
  const teamMembers = [
    {
      name: "Mihir Yogi",
      role: "Founder & Creative Director",
      image: Diploma,
    },
  ];
  
  /* Team members for future expansion
  const futureTeamMembers = [
    {
      name: "Alex Morgan",
      role: "Creative Director",
      image: `https://randomuser.me/api/portraits/women/32.jpg`,
    },
    
    {
      name: "James Chen",
      role: "Lead Developer",
      image: `https://randomuser.me/api/portraits/men/32.jpg`,
    },
    {
      name: "Sarah Johnson",
      role: "UX/UI Designer",
      image: `https://randomuser.me/api/portraits/women/44.jpg`,
    },
    {
      name: "Michael Torres",
      role: "Marketing Strategist",
      image: `https://randomuser.me/api/portraits/men/22.jpg`,
    },
  ];
  */

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-900 to-primary-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dotPattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="rgba(59, 130, 246, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full">
              About Us
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            We're Not Just an Agency,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              We're Your Tech Partners
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-muted-foreground text-lg"
          >
            Flykit Agency is a creative-tech powerhouse that builds stunning brands and digital 
            experiences for forward-thinking startups. We blend cutting-edge design with technical 
            expertise to propel your business into the future.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: LightbulbIcon,
              title: "Strategic Thinking",
              description:
                "We craft holistic strategies that align your brand with your business goals, creating cohesive and purposeful experiences.",
              color: "blue",
            },
            {
              icon: Code2Icon,
              title: "Technical Excellence",
              description:
                "Our development team builds robust, scalable solutions that leverage cutting-edge technologies for optimal performance.",
              color: "purple",
            },
            {
              icon: BarChart3Icon,
              title: "Growth Focused",
              description:
                "Everything we create is designed with growth in mind, helping you acquire users, drive engagement, and boost conversions.",
              color: "green",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "p-6 rounded-xl border border-gray-800 bg-primary-800/20 backdrop-blur-sm",
                "hover:border-blue-500/50 transition-all duration-300 group"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                  feature.color === "blue" && "bg-blue-500/20 text-blue-400",
                  feature.color === "purple" && "bg-purple-500/20 text-purple-400",
                  feature.color === "green" && "bg-green-500/20 text-green-400"
                )}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-10 text-center"
          >
            Meet Our Team
          </motion.h3>
          <motion.div 
  variants={itemVariants}
  className="flex flex-wrap justify-center gap-6"
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-primary-800/30 p-6 rounded-xl border border-gray-800 backdrop-blur-sm w-64"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-700">
        <img
          src={member.image}
          alt={member.name}
           className="w-full h-full object-cover object-center rounded-full"
        />
      </div>
      <h4 className="text-lg font-semibold text-center">{member.name}</h4>
      <p className="text-sm text-muted-foreground text-center">{member.role}</p>
    </motion.div>
  ))}
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
