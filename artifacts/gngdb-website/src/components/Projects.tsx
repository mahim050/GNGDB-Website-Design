import { AnimatedSection } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    // Youth leadership workshop Bangladesh
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    title: "Youth Leadership Summit 2025",
    category: "Education & Leadership"
  },
  {
    // Tree planting community environment
    image: "https://images.unsplash.com/photo-1594498653386-0683a4ad2d70?q=80&w=2070&auto=format&fit=crop",
    title: "Green Bangladesh Initiative",
    category: "Environmental Sustainability"
  },
  {
    // Community development people helping
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    title: "Rural Healthcare Camp",
    category: "Social Welfare"
  },
  {
    // School children learning Bangladesh
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    title: "Digital Literacy for All",
    category: "Education"
  },
  {
    // Clean water project rural
    image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop",
    title: "Safe Water Access Project",
    category: "Community Development"
  },
  {
    // Women empowerment discussion
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    title: "Women Empowerment Network",
    category: "Social Welfare"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">Projects & Activities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover how we are making a tangible difference in communities across Bangladesh through our focused initiatives.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <a href="#donate" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors text-lg group">
              Support our projects
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection 
              key={project.title} 
              delay={idx * 0.1}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary-foreground bg-primary rounded-full w-fit">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
