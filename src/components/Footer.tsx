import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <img src="/logo.png" alt="RGP Group Logo" className="w-32" />
            </a>
            <p className="text-background/70 text-sm">
              Innovating agriculture, powering businesses, and delivering
              world-class quality across every project.
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:grid md:grid-cols-3 col-span-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-background/70 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#projects" className="text-background/70 hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Agriculture & Farming</a></li>
                <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Food Processing</a></li>
                <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Infrastructure</a></li>
                <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Business Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Quick Links</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#home" className="text-background/70 hover:text-primary transition-colors">Home</a></li>
                    <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
                    <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
                    <li><a href="#projects" className="text-background/70 hover:text-primary transition-colors">Projects</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Agriculture & Farming</a></li>
                    <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Food Processing</a></li>
                    <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Infrastructure</a></li>
                    <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Business Consulting</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Follow Us</AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 RGP Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;