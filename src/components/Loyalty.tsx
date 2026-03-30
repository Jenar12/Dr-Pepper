import { motion } from "motion/react";
import { Star, TrendingUp, Gift, ArrowRight } from "lucide-react";

export default function Loyalty() {
  return (
    <section id="perks" className="py-24 px-6 md:px-12 bg-drpepper-maroon relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-drpepper-accent/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Join the <br /> <span className="italic text-drpepper-accent">Pepper Perks</span>
          </h2>
          <p className="text-white/80 text-lg max-w-md">
            Earn points for every sip. Unlock exclusive drops, limited edition merch, and one-of-a-kind experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 bg-drpepper-accent rounded-full flex items-center justify-center shrink-0">
                <Star size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white">Earn Points</h4>
                <p className="text-xs text-white/60 mt-1">10 points for every $1 spent on Dr Pepper products.</p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <Gift size={20} className="text-drpepper-maroon" />
              </div>
              <div>
                <h4 className="font-bold text-white">Exclusive Drops</h4>
                <p className="text-xs text-white/60 mt-1">Get early access to new flavors and limited merch.</p>
              </div>
            </div>
          </div>

          <button className="bg-white text-drpepper-maroon px-10 py-4 rounded-full font-bold text-lg hover:bg-drpepper-accent hover:text-white transition-all flex items-center gap-2">
            Sign Up Now
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="bg-drpepper-black/40 p-8 rounded-[3rem] border border-white/10 glass-morphism space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-drpepper-maroon rounded-full border-2 border-white/20 flex items-center justify-center font-bold">JD</div>
              <div>
                <h4 className="font-bold">Jane Doe</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">Pepper Pro Member</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-drpepper-accent">1,250</span>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Flavor Points</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
              <span>Current Level: Pro</span>
              <span>Next: Elite (2,000)</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "62.5%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-drpepper-accent to-white rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white/40">Recent Activity</h5>
            {[
              { label: "Dr Pepper 12pk Purchase", points: "+120", date: "Mar 28" },
              { label: "Flavor Lab Share", points: "+50", date: "Mar 25" },
              { label: "Limited Edition Hat", points: "-500", date: "Mar 20" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                <div>
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-[10px] text-white/40 uppercase">{item.date}</p>
                </div>
                <span className={`font-bold ${item.points.startsWith('+') ? 'text-green-400' : 'text-white/60'}`}>
                  {item.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
