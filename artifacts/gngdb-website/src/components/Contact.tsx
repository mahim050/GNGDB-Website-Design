import { AnimatedSection } from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
            <a href="mailto:contact@gngdb.org" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              contact@gngdb.org
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
            <a href="tel:01909995078" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              01909995078
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground font-medium">
              13A/4A, Babar Road, Block-B (1st Floor)<br />Mohammadpur, Dhaka-1207
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
