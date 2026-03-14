import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { GetInvolved } from "@/components/GetInvolved";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <GetInvolved />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
