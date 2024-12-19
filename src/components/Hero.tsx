import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-50" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-6">
            JAMES RIVER
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Electronic Composer & Producer
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
            Listen Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};