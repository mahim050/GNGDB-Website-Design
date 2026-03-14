import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { CreditCard, Building2, Smartphone, DollarSign, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const donationPackages = [
  { amount: 500, label: "BDT" },
  { amount: 1000, label: "BDT" },
  { amount: 5000, label: "BDT" },
];

export function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [donateSubmitted, setDonateSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setTimeout(() => setVolunteerSubmitted(false), 5000);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonateSubmitted(true);
    setTimeout(() => setDonateSubmitted(false), 5000);
  };

  return (
    <section id="get-involved" className="py-24 md:py-32 bg-white dark:bg-background relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 dark:bg-primary/10 skew-y-3 origin-top-left -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">Take Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your time and resources can change lives. Join us as a volunteer or support our mission with a donation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Volunteer Form */}
          <AnimatedSection direction="left" className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
            <h3 className="text-3xl font-bold text-foreground mb-2">Become a Volunteer</h3>
            <p className="text-muted-foreground mb-8">Join our community of changemakers.</p>
            
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+880 1..."
                    className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">Area of Interest</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 appearance-none">
                  <option>Education & Literacy</option>
                  <option>Environmental Sustainability</option>
                  <option>Healthcare & Welfare</option>
                  <option>Youth Leadership</option>
                  <option>Event Organization</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-lg bg-foreground text-background hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Sign Up Now
                <Send className="w-5 h-5" />
              </button>
              {volunteerSubmitted && (
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-medium text-center">
                  Thank you for signing up! We will contact you soon.
                </div>
              )}
            </form>
          </AnimatedSection>

          {/* Donation Section */}
          <AnimatedSection direction="right" id="donate" className="bg-primary rounded-3xl p-8 shadow-2xl shadow-primary/30 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <h3 className="text-3xl font-bold mb-2">Make a Donation</h3>
              <p className="text-primary-foreground/80 mb-8">100% of your donation directly funds our projects.</p>

              <form onSubmit={handleDonateSubmit}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {donationPackages.map((pkg) => (
                    <button
                      key={pkg.amount}
                      type="button"
                      onClick={() => setSelectedAmount(pkg.amount)}
                      className={cn(
                        "py-4 rounded-2xl font-bold transition-all duration-200 border-2",
                        selectedAmount === pkg.amount 
                          ? "bg-white text-primary border-white scale-105 shadow-lg" 
                          : "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
                      )}
                    >
                      ৳ {pkg.amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedAmount("custom")}
                    className={cn(
                      "py-4 rounded-2xl font-bold transition-all duration-200 border-2",
                      selectedAmount === "custom" 
                        ? "bg-white text-primary border-white scale-105 shadow-lg" 
                        : "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
                    )}
                  >
                    Custom
                  </button>
                </div>

                {selectedAmount === "custom" && (
                  <div className="relative mb-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary">৳</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full px-12 py-5 rounded-2xl bg-white text-primary text-xl font-bold focus:outline-none shadow-inner"
                      min="1"
                      required
                    />
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider">Payment Method</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:text-primary transition-colors">
                      <Smartphone className="w-6 h-6" />
                      <span className="text-xs font-bold">bKash</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:text-primary transition-colors">
                      <Smartphone className="w-6 h-6" />
                      <span className="text-xs font-bold">Nagad</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:text-primary transition-colors">
                      <Building2 className="w-6 h-6" />
                      <span className="text-xs font-bold">Bank</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:text-primary transition-colors">
                      <CreditCard className="w-6 h-6" />
                      <span className="text-xs font-bold">Card</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-5 rounded-2xl font-black text-xl bg-white text-primary hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  <DollarSign className="w-6 h-6" />
                  Donate {selectedAmount !== "custom" ? `৳${selectedAmount}` : customAmount ? `৳${customAmount}` : "Now"}
                </button>
                {donateSubmitted && (
                  <div className="p-4 rounded-2xl bg-white/20 border border-white/30 text-white font-medium text-center">
                    Thank you for your generosity! Payment gateway coming soon.
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
