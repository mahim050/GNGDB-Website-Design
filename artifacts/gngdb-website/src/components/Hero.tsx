import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Heart, Users } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const slides = [
  {
    // Bangladeshi youth program community discussion
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    title: "Empowering Bangladesh's Youth",
    subtitle: "Building the leaders of tomorrow through education and engagement.",
  },
  {
    // Community development project nature environment
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    title: "Sustainable Communities",
    subtitle: "Driving change through grassroots environmental and social initiatives.",
  },
  {
    // Children smiling in rural area
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    title: "Creating Lasting Impact",
    subtitle: "Join us in our mission to uplift lives across the nation.",
  }
];

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <AnimatedSection delay={0.2} className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-xl">
            Gono Netritto Gothon <br/> Unnayan Bangladesh
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium max-w-3xl mx-auto drop-shadow-md">
            Empowering Youth & Communities Across Bangladesh for a Sustainable Future.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4} direction="up" className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="#get-involved"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)]"
          >
            <Users className="w-5 h-5" />
            Get Involved
          </a>
          <a
            href="#donate"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            <Heart className="w-5 h-5 fill-current" />
            Donate Now
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
}
