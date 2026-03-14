import { Eye, Target, Globe, Award } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const subsections = [
  {
    title: "Our Vision",
    icon: Eye,
    content: "Gono Netritto Gothon Unnayan Bangladesh envisions a nation where youth are empowered, communities thrive sustainably, and social leadership drives change. Our vision is to create opportunities for all young people to actively participate in building a better Bangladesh.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Our Mission",
    icon: Target,
    content: "Our mission is to develop capable young leaders, implement community-driven development programs, promote social welfare, and create sustainable environmental initiatives across Bangladesh. We are committed to inclusivity, transparency, and measurable impact.",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Who We Are",
    icon: Globe,
    content: "GNGDB is a legally registered nonprofit organization dedicated to youth empowerment and community development. Since our inception, we have worked on diverse projects ranging from environmental sustainability and social welfare to educational and leadership programs.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Impact & Achievements",
    icon: Award,
    content: "• 5000+ youth engaged in leadership programs\n• 50+ completed community and environment projects\n• 20+ communities benefited across Bangladesh\n• Collaborations with local NGOs and government agencies to maximize social impact",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-gray-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">About Us</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Empowering Youth & Communities Across Bangladesh
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-8 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {subsections.map((section, idx) => (
            <AnimatedSection 
              key={section.title} 
              delay={idx * 0.1}
              className="bg-card rounded-3xl p-8 shadow-xl shadow-black/5 border border-border/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className={`shrink-0 p-4 rounded-2xl ${section.bg} ${section.color} group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{section.title}</h3>
                  {section.title === "Impact & Achievements" ? (
                    <ul className="space-y-3">
                      {section.content.split('\n').map((item, i) => (
                        <li key={i} className="text-muted-foreground text-lg leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1 font-bold">•</span>
                          {item.replace('• ', '')}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
