import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Droplets, Plus, Share2, Sparkles, Loader2 } from "lucide-react";
import { analyzeFlavor } from "../services/geminiService";

const ADD_INS = [
  { id: "coconut", name: "Coconut", color: "bg-white", icon: "🥥" },
  { id: "lime", name: "Lime", color: "bg-green-400", icon: "🍋" },
  { id: "cream", name: "Cream", color: "bg-yellow-100", icon: "🥛" },
  { id: "cherry", name: "Cherry", color: "bg-red-600", icon: "🍒" },
  { id: "vanilla", name: "Vanilla", color: "bg-orange-100", icon: "🍦" },
];

export default function FlavorLab() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<{ name: string; description: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleAddIn = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const handleMix = async () => {
    if (selected.length === 0) return;
    setLoading(true);
    const analysis = await analyzeFlavor(selected);
    setResult(analysis);
    setLoading(false);
  };

  return (
    <section id="lab" className="py-24 px-6 md:px-12 bg-drpepper-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-drpepper-maroon/20 border border-drpepper-maroon/30 text-drpepper-accent text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} />
            Interactive Experience
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            The Dirty Soda <br /> <span className="text-drpepper-accent italic">Flavor Lab</span>
          </h2>
          <p className="text-white/60 text-lg max-w-md">
            Mix, match, and experiment. Drag your favorite add-ins into the glass to create your unique Dr Pepper masterpiece.
          </p>

          <div className="flex flex-wrap gap-4">
            {ADD_INS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleAddIn(item.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
                  selected.includes(item.id) 
                    ? "bg-drpepper-maroon border-drpepper-maroon text-white" 
                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-bold">{item.name}</span>
                {selected.includes(item.id) ? <Plus size={16} className="rotate-45" /> : <Plus size={16} />}
              </motion.button>
            ))}
          </div>

          <button 
            disabled={selected.length === 0 || loading}
            onClick={handleMix}
            className="w-full md:w-auto bg-white text-drpepper-black px-12 py-5 rounded-full font-bold text-lg hover:bg-drpepper-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Droplets />}
            {loading ? "Analyzing Flavors..." : "Mix My Creation"}
          </button>
        </div>

        <div className="relative flex justify-center items-center h-[600px]">
          {/* The Glass */}
          <div className="relative w-64 h-96 bg-white/5 border-2 border-white/20 rounded-b-[2rem] rounded-t-lg overflow-hidden glass-morphism">
            {/* Liquid */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "80%" }}
              className="absolute bottom-0 left-0 right-0 bg-drpepper-maroon/80"
            >
              {/* Bubbles in glass */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -400], opacity: [0, 1, 0] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    className="absolute bottom-0 w-1 h-1 bg-white/40 rounded-full"
                    style={{ left: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              
              {/* Add-in visual layers */}
              <AnimatePresence>
                {selected.map((id, index) => {
                  const item = ADD_INS.find(a => a.id === id);
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.3, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 ${item?.color}`}
                      style={{ zIndex: index + 1 }}
                    />
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Result Modal */}
          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center z-20 p-6"
              >
                <div className="bg-drpepper-maroon p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm text-center space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="text-drpepper-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-2">{result.name}</h3>
                    <p className="text-white/80 text-sm italic">"{result.description}"</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setResult(null)}
                      className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold transition-colors"
                    >
                      Remix
                    </button>
                    <button className="flex-1 bg-drpepper-accent text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
