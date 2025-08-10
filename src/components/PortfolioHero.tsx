import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-pulse-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pulse-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pulse-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          {/* Greeting chip */}
          <div className="pulse-chip mb-6 animate-pulse-slow">
            👋 Hello, I'm Aravind
          </div>
          
          {/* Main heading */}
          <h1 className="section-title text-gray-900 mb-6 leading-tight">
            Full Stack Developer
            <span className="block bg-gradient-to-r from-pulse-500 to-pulse-600 bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="section-subtitle mx-auto mb-8">
           I create modern, scalable web applications using React, Node.js, and cutting-edge technologies. Passionate about clean code, user experience, and turning ideas into reality.
          </p>
          
          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB','PostgreSQL', 'AWS'].map((tech, index) => (
              <span key={tech} className={`pulse-chip stagger-${index + 1}`}>
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="button-primary w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="button-secondary w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com" className="text-gray-600 hover:text-pulse-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:c108aravind@gmail.com" className="text-gray-600 hover:text-pulse-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;