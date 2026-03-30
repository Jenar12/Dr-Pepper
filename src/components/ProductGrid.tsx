import { motion } from "motion/react";

const FLAVORS = [
  { name: "Dr Pepper Classic", desc: "The original 23-flavor blend.", color: "bg-drpepper-maroon", image: "🥤" },
  { name: "Zero Sugar", desc: "All the flavor, zero the sugar.", color: "bg-drpepper-black", image: "🥤" },
  { name: "Cherry", desc: "A smooth, sweet cherry twist.", color: "bg-red-900", image: "🍒" },
  { name: "Strawberries & Cream", desc: "The newest creamy sensation.", color: "bg-pink-800", image: "🍓" },
  { name: "Cream Soda", desc: "Smooth vanilla finish.", color: "bg-yellow-900", image: "🍦" },
  { name: "Dr Pepper Dark Berry", desc: "Limited edition deep berry.", color: "bg-blue-900", image: "🫐" },
];

export default function ProductGrid() {
  return (
    <section id="flavors" className="py-24 px-6 md:px-12 bg-drpepper-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold">The <span className="text-drpepper-accent italic">Lineup</span></h2>
            <p className="text-white/60 text-lg max-w-md">
              From the original classic to our boldest new experiments. Find your favorite flavor.
            </p>
          </div>
          <button className="text-drpepper-accent font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVORS.map((flavor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${flavor.color} opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-40 transition-opacity`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl">
                  {flavor.image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{flavor.name}</h3>
                  <p className="text-white/60 text-sm">{flavor.desc}</p>
                </div>
                <button className="w-full py-3 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest group-hover:bg-drpepper-accent group-hover:border-drpepper-accent transition-all">
                  Product Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
