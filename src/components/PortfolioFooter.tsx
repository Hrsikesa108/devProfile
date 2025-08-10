import React from "react";
import { Mail, Heart } from "lucide-react";

const PortfolioFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Github, href: "https://github.com", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:c108aravind@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-pulse-400 to-pulse-500 bg-clip-text text-transparent">
              Aravind Cherala
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating amazing digital experiences 
              with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-gray-400 hover:text-pulse-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-pulse-400 transition-colors duration-300"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 c108aravind@gmail.com</p>
              <p>📱 +91 94904 26426</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aravind Cherala. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pulse-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;