import { Facebook, Instagram, Linkedin, Youtube, Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="GNGDB Logo"
                className="h-12 w-12 rounded-full bg-white p-1"
              />
              <span className="font-black text-2xl tracking-tight">GNGDB</span>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
              Gono Netritto Gothon Unnayan Bangladesh — A Government Registered Nonprofit dedicated to youth empowerment and sustainable community development across Bangladesh.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 mb-10">
              <li><a href="#about" className="text-zinc-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-zinc-400 hover:text-primary transition-colors">Projects &amp; Activities</a></li>
              <li><a href="#team" className="text-zinc-400 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#get-involved" className="text-zinc-400 hover:text-primary transition-colors">Get Involved</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>

            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <a href="mailto:contact@gngdb.org" className="hover:text-primary transition-colors">
                  contact@gngdb.org
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Phone className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <a href="tel:01909995078" className="hover:text-primary transition-colors">
                  01909995078
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <span>13A/4A, Babar Road, Block-B<br />(1st Floor), Mohammadpur,<br />Dhaka-1207</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Support Us</h4>
            <p className="text-zinc-400 mb-6">Your contribution helps us create more leaders and better communities across Bangladesh.</p>
            <a href="#donate" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500">
          <p>© 2026 Gono Netritto Gothon Unnayan Bangladesh. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
