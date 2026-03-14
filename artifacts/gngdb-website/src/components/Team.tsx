import { AnimatedSection } from "./AnimatedSection";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Rafiqul Islam",
    designation: "Founder & President",
    // professional bangladeshi man portrait
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    bio: "Dedicated to youth empowerment with 15+ years of NGO experience."
  },
  {
    name: "Nusrat Jahan",
    designation: "Vice President",
    // professional bangladeshi woman portrait
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Leading community development and women's rights initiatives."
  },
  {
    name: "Ahmed Chowdhury",
    designation: "General Secretary",
    // professional man smiling
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    bio: "Overseeing daily operations and national project coordination."
  },
  {
    name: "Fatema Begum",
    designation: "Head of Environmental Programs",
    // professional woman outside
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Passionate about climate action and sustainable farming."
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals driving the vision of GNGDB forward every single day.
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-8 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, idx) => (
            <AnimatedSection key={member.name} delay={idx * 0.1} className="group">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.designation}</p>
              <p className="text-muted-foreground mb-6">{member.bio}</p>
              <div className="flex items-center justify-center gap-4">
                <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
