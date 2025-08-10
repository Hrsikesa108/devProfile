import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MIRRASIA (Company Registration Incorporation)",
      description: "Web app for users to sign in and apply for company registration in Hong Kong; includes secure authentication and application workflows.",
      image: "/lovable-uploads/mirrasiaOneStop.png",
      tech: ["React","TypeScript", "Node.js", "Express","OAuth", "MongoDB", "REST API"],
      // github: "https://github.com",
      live: "https://onestop.mirrasia.com",
      category: "Full Stack"
    },
    {
      title: "Bluestar ELD (Vehicle Tracking)",
      description: "Smart vehicle tracking platform with company/driver/vehicle management, real-time GPS tracking, and FMCSA-compliant logs.",
      image: "/lovable-uploads/blueStar.png",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "WebSockets"],
      // github: "https://github.com",
      live: "https://bluestareld.com/",
      category: "Full Stack"
    },
    {
      title: "Tasty Kitchen",
      description: "Restaurant e-commerce demo where users browse menus, select food, and checkout orders (username: rahul, password: rahul@2021).",
      image: "/lovable-uploads/tastyKitchen.png",
      tech: ["React", "CSS3", "REST API", "Authentication"],
      // github: "https://github.com",
      live: "https://tkpracfrnt.ccbp.tech/",
      category: "Frontend"
    },
    {
      title: "Issue Tracker",
      description: "Full stack app built with Next.js and TypeScript featuring social login, Vercel deployment, and Xata database on the free dev plan, using test oauth setup with GCP.",
      image: "/placeholder.svg",
      tech: ["Next.js", "TypeScript", "OAuth", "Xata", "Vercel"],
      // github: "https://github.com",
      live: "https://issue-tracker-psi-sooty.vercel.app/",
      category: "Full Stack"
    }
  ];

  // const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory,] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="projects">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="section-title text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my recent work, demonstrating expertise across the full stack development spectrum.
          </p>
        </div>

        {/* Category filter */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`${
                activeCategory === category 
                  ? "bg-pulse-500 text-white hover:bg-pulse-600" 
                  : "button-secondary"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div> */}

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`glass-card group hover-lift animate-on-scroll stagger-${index + 1}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="pulse-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  {/* <Button 
                    size="sm" 
                    variant="outline" 
                    className="button-secondary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12 animate-on-scroll">
          <Button 
            className="button-primary"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;