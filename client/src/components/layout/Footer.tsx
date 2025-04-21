import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import FlykitLogo from "../asserts/images/flykit_logo_light.png";

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaDribbble, href: "#", label: "Dribbble" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Branding & Identity", href: "#" },
      { name: "Web Design", href: "#" },
      { name: "App Development", href: "#" },
      { name: "Social Media Toolkit", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className="bg-primary-900 relative">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-green-500 to-purple-600"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded flex items-center justify-center">
              <img
                    src={FlykitLogo}
                    alt="Logo"
                    className="w-12 h-12 object-cover"
                  />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Flykit
                </h3>
                <p className="text-xs text-muted-foreground">AGENCY</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              We help startups take flight with powerful branding, web design, and digital 
              solutions crafted with tech precision.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center 
                              border border-gray-700 text-muted-foreground hover:text-white 
                              hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerLinks.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for updates on industry trends, company news, and exclusive resources.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-secondary/50 text-white border-gray-700 focus:border-blue-500"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2023 Flykit Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
