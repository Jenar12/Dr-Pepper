import { motion } from "motion/react";
import { Search, MapPin, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-4 px-6 md:px-12 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div className="w-10 h-10 bg-drpepper-maroon rounded-full flex items-center justify-center font-serif font-bold text-xl border border-white/20">
          DP
        </div>
        <span className="font-serif text-2xl font-bold tracking-tighter hidden sm:block">
          Dr Pepper
        </span>
      </motion.div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
        <a href="#flavors" className="hover:text-drpepper-accent transition-colors">Flavors</a>
        <a href="#lab" className="hover:text-drpepper-accent transition-colors">Flavor Lab</a>
        <a href="#perks" className="hover:text-drpepper-accent transition-colors">Pepper Perks</a>
        <a href="#locator" className="hover:text-drpepper-accent transition-colors">Find Us</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <MapPin size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <User size={20} />
        </button>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
