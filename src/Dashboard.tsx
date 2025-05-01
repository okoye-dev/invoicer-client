import { useEffect } from "react";
 import Navbar from "@/landing/components/Navbar";
 import HeroSection from "@/landing/components/HeroSection";

import { motion } from "framer-motion";

export const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen overflow-x-hidden bg-dark-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar /> 
      <HeroSection />
        
    </motion.div>
  );
};
