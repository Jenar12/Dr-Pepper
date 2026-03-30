import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-drpepper-black border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold">Dr Pepper</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            The 23-flavor symphony. Still human-made. Since 1885.
          </p>
          <div className="flex gap-4">
            <Instagram className="hover:text-drpepper-accent cursor-pointer" size={20} />
            <Twitter className="hover:text-drpepper-accent cursor-pointer" size={20} />
            <Facebook className="hover:text-drpepper-accent cursor-pointer" size={20} />
            <Youtube className="hover:text-drpepper-accent cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-drpepper-accent">Products</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer">Dr Pepper Classic</li>
            <li className="hover:text-white cursor-pointer">Dr Pepper Zero Sugar</li>
            <li className="hover:text-white cursor-pointer">Dr Pepper Cherry</li>
            <li className="hover:text-white cursor-pointer">Dr Pepper Strawberries & Cream</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-drpepper-accent">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-drpepper-accent">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">Join Pepper Perks for exclusive drops.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-drpepper-accent"
            />
            <button className="bg-drpepper-maroon px-4 py-2 rounded-r-md hover:bg-drpepper-maroon/80 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
        <p>© 2026 Keurig Dr Pepper. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
}
