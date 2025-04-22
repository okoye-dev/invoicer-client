import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../constants/testimonials";
import { cardVariants } from "../constants/testimonialVariants";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getTestimonialsToShow = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  const testimonialsToShow = getTestimonialsToShow();

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-dark-background to-dark-card/30 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/70 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
            What our Beta-users saying
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              {testimonialsToShow.map((index, i) => (
                <motion.div
                  key={`desktop-${index}`}
                  custom={direction}
                  initial={i === 0 ? "enter" : { opacity: 1, x: 0 }}
                  animate="center"
                  exit={i === 0 ? "exit" : { opacity: 1, x: 0 }}
                  variants={i === 0 ? cardVariants : {}}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <motion.div
                    className="glass-card rounded-xl p-6 h-full flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-xl"></div>

                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center text-white"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Quote className="h-5 w-5" aria-hidden="true" />
                      </motion.div>
                    </div>

                    <blockquote className="text-sm md:text-base text-dark-text text-center mb-6 flex-grow opacity-90 leading-relaxed">
                      "{testimonials[index].text}"
                    </blockquote>

                    <motion.div
                      className="flex items-center justify-center mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <img
                        className="h-12 w-12 rounded-full ring-2 ring-indigo-500/20 p-[2px]"
                        src={testimonials[index].image}
                        alt={`${testimonials[index].name} avatar`}
                      />
                      <div className="ml-3 text-left">
                        <div className="text-sm font-medium text-dark-text">
                          {testimonials[index].name}
                        </div>
                        <div className="text-xs text-primary">
                          {testimonials[index].role}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
