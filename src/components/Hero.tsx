import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const [text, setText] = useState("");
  const fullText = "The 23-Flavor Symphony. Still Human-Made.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  const handleFindNearMe = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mocking a location name based on coords
          setTimeout(() => {
            setLocation(`Austin, TX (${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)})`);
            setIsLocating(false);
          }, 1500);
        },
        () => {
          setTimeout(() => {
            setLocation("Austin, TX (Default)");
            setIsLocating(false);
          }, 1500);
        }
      );
    } else {
      setLocation("Austin, TX (Default)");
      setIsLocating(false);
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Geolocation Modal */}
      <AnimatePresence>
        {location && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <div className="bg-drpepper-maroon p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm text-center space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="text-drpepper-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Flavor Found!</h3>
                <p className="text-white/80 text-sm">We've located Dr Pepper near you in <span className="font-bold text-white">{location}</span>.</p>
              </div>
              <button 
                onClick={() => setLocation(null)}
                className="w-full bg-white text-drpepper-maroon py-3 rounded-xl font-bold hover:bg-drpepper-accent hover:text-white transition-all"
              >
                View Stores
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              bottom: "-20px"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-drpepper-accent font-bold tracking-[0.3em] uppercase text-xs">Est. 1885</span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mt-4">
              {text}<span className="animate-pulse">|</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-white/70 max-w-md leading-relaxed"
          >
            Experience the original blend of 23 flavors that defined a generation. Bold, carbonated, and one of a kind.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={handleFindNearMe}
              disabled={isLocating}
              className="bg-drpepper-maroon text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-drpepper-maroon/80 transition-all group disabled:opacity-50"
            >
              <MapPin size={20} className={isLocating ? "animate-bounce" : ""} />
              {isLocating ? "Locating..." : "Find Near Me"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
              Explore Flavor Season
            </button>
          </motion.div>
        </div>

        <motion.div 
          style={{ y, rotate, scale }}
          className="relative flex justify-center"
        >
          <div className="w-64 md:w-80 aspect-[1/2] bg-drpepper-maroon rounded-[3rem] shadow-2xl border-4 border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h2 className="text-5xl font-serif font-black italic tracking-tighter mb-2">Dr Pepper</h2>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-drpepper-maroon font-bold text-2xl mb-4">23</div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">The Original</p>
            </div>
            {/* Can condensation effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: '2px',
                    height: '2px',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -z-10 w-full h-full bg-drpepper-maroon/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
