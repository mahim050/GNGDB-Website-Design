import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 dark:bg-background/95"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="GNGDB Logo" 
              className="h-12 w-12 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className={cn(
              "font-display font-bold text-xl tracking-tight hidden sm:block transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            )}>
              GNGDB
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 hover:text-primary",
                    isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white drop-shadow-sm"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#donate"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl transition-all duration-300 origin-top overflow-hidden",
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-foreground hover:bg-muted rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-md"
            >
              <Heart className="w-5 h-5 fill-current" />
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
