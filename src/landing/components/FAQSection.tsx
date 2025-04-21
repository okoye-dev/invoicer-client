import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../constants/faqs"; 

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 sm:py-24 bg-dark-background relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600/70 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/70 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            FAQ
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-dark-muted mx-auto opacity-90 leading-relaxed">
            Find answers to common questions about our platform and how it can
            enhance your learning experience.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className={`w-full p-5 glass-card text-left rounded-xl flex justify-between items-center ${
                  activeIndex === index ? "bg-dark-card/80" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base md:text-lg font-bold text-dark-text pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </div>
              </motion.button>

              <motion.div
                className={`overflow-hidden rounded-b-xl ${
                  activeIndex !== index ? "h-0" : "glass-card mt-1"
                }`}
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 text-sm md:text-base text-dark-muted opacity-90 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
