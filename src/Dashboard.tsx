 import Navbar from "@/landing/components/Navbar";
 import HeroSection from "@/auth/components/HeroSection";

import { motion } from "framer-motion";

export const Dashboard = () => {
 

  return (
    <motion.div
     
    >
      <Navbar /> 
        <HeroSection />
        
    </motion.div>
  );
};
