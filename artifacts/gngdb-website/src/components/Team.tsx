import { AnimatedSection } from "./AnimatedSection";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Rafiqul Islam",
    designation: "Founder & President",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b9e?q=80&w=1974&auto=format&fit=crop",
    bio: "Dedicated to youth empowerment with 15+ years of NGO experience."
  },
  {
    name: "Nusrat Jahan",
    designation: "Vice President",
    image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?q=80&w=1976&auto=format&fit=crop",
    bio: "Leading community development and women's rights initiatives."
  },
  {
    name: "Ahmed Chowdhury",
    designation: "General Secretary",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1974&auto=format&fit=crop",
    bio: "Overseeing daily operations and national project coordination."
  },
  {
    name: "Fatema Begum",
    designation: "Head of Environmental Programs",
    image: "https://images.unsplash.com/photo-1631084655463-e671365ec05f?q=80&w=1961&auto=format&fit=crop",
    bio: "Passionate about climate action and sustainable farming."
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #f8faff 0%, #f0fdf4 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
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
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-emerald-600 font-semibold mb-4">{member.designation}</p>
              <p className="text-gray-500 mb-6">{member.bio}</p>
              <div className="flex items-center justify-center gap-4">
                <button className="p-2 bg-white rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors shadow-sm border border-gray-100">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors shadow-sm border border-gray-100">
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
