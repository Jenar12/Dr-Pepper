/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import FlavorLab from "./components/FlavorLab";
import Loyalty from "./components/Loyalty";
import StoreFinder from "./components/StoreFinder";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-drpepper-black text-drpepper-white selection:bg-drpepper-accent selection:text-drpepper-black overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-drpepper-black flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-drpepper-maroon rounded-full flex items-center justify-center font-serif font-bold text-3xl border-2 border-white/20"
            >
              DP
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <ProductGrid />
        <FlavorLab />
        <Loyalty />
        <StoreFinder />
      </main>

      <Footer />
    </div>
  );
}
