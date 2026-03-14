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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground font-medium">contact@gngdb.org</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground font-medium">01909995078</p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center group hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground font-medium">
              13A/4A, Babar Road, Block-B (1st Floor)<br/>Mohammadpur, Dhaka-1207
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-muted relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2!2d90.3590!3d23.7645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3b3%3A0x710be3b4e1e3f0d0!2sMohammadpur%2C%20Dhaka%201207!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GNGDB Office Location"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
