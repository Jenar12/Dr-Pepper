import { motion } from "motion/react";
import { MapPin, Navigation, ShoppingBag, Search } from "lucide-react";

const STORES = [
  { name: "Target Supercenter", address: "123 Main St, Austin, TX", distance: "0.8 miles", type: "Retailer" },
  { name: "7-Eleven", address: "456 Oak Ave, Austin, TX", distance: "1.2 miles", type: "Convenience" },
  { name: "Whole Foods Market", address: "789 Pine Rd, Austin, TX", distance: "2.5 miles", type: "Retailer" },
  { name: "CVS Pharmacy", address: "321 Elm Blvd, Austin, TX", distance: "3.1 miles", type: "Pharmacy" },
];

export default function StoreFinder() {
  return (
    <section id="locator" className="py-24 px-6 md:px-12 bg-drpepper-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold">Find Your <span className="text-drpepper-accent italic">Flavor</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Use our interactive Pepper Map to locate the nearest Dr Pepper retailer. Fresh, cold, and ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="text" 
                  placeholder="Enter Zip or City" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-drpepper-accent transition-colors"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {STORES.map((store, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-drpepper-accent/50 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold group-hover:text-drpepper-accent transition-colors">{store.name}</h4>
                    <span className="text-[10px] bg-drpepper-maroon/30 text-drpepper-accent px-2 py-1 rounded-md font-bold uppercase">{store.type}</span>
                  </div>
                  <p className="text-xs text-white/60 mb-4">{store.address}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white/40 flex items-center gap-1">
                      <MapPin size={12} /> {store.distance}
                    </span>
                    <button className="text-drpepper-accent text-xs font-bold flex items-center gap-1 hover:underline">
                      <Navigation size={12} /> Directions
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
            {/* Mock Map */}
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-50">
              {/* Grid lines */}
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
            
            {/* Map Pins */}
            {[
              { top: '30%', left: '40%' },
              { top: '50%', left: '60%' },
              { top: '70%', left: '30%' },
              { top: '20%', left: '80%' },
            ].map((pin, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="absolute inset-0 bg-drpepper-maroon rounded-full animate-ping opacity-20" />
                <div className="relative w-full h-full bg-drpepper-maroon rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-6 right-6 p-6 glass-morphism rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-drpepper-accent rounded-full flex items-center justify-center">
                  <ShoppingBag className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Ready to buy?</h4>
                  <p className="text-xs text-white/60">Connect to our e-commerce partners for instant checkout.</p>
                </div>
              </div>
              <button className="bg-drpepper-maroon px-8 py-3 rounded-full font-bold hover:bg-drpepper-maroon/80 transition-all">
                Shop Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
