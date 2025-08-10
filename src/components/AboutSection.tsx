import React from "react";
// import { Code, Coffee, Zap, Users } from "lucide-react";

const AboutSection:React.FC = () => {
  // const stats = [
  //   { icon: Code, label: "Projects Completed", value: "50+" },
  //   { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  //   { icon: Zap, label: "Years Experience", value: "3+" },
  //   { icon: Users, label: "Happy Clients", value: "25+" },
  // ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="about">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/bb3db991-6d5a-4078-9032-0c87ec96c73e.png"
                alt="Aravind Cherala - Full Stack Developer"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="animate-on-scroll">
            <h2 className="section-title text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                I'm a dedicated Full Stack Developer specializing in React and Node.js (MERN) with strong TypeScript skills, having over 4 years of experience. I design and build reliable, scalable web apps with clean, maintainable code.
              </p>
              <p>
                I have hands-on experience creating RESTful APIs, integrating third‑party services, and implementing secure authentication (OAuth, JWT, Social login). I'm comfortable managing deployments and production environments.
              </p>
              <p>
                I actively participate across the SDLC—coding, debugging, testing, and reviewing architecture—to deliver performant, user‑centric solutions.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Core Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'React/Next.js', 'Node.js/Express', 'TypeScript', 
                  'PostgreSQL', 'MongoDB', 'AWS','REST APIs', 'Git/GitHub'
                ].map((skill) => (
                  <div key={skill} className="pulse-chip text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        {/* <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`text-center animate-on-scroll stagger-${index + 1}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-pulse-600" />
                  </div>
                  <div className="text-2xl font-display font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;