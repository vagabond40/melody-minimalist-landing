import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold">
            JAMES RIVER
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#latest" className="text-white/80 hover:text-white transition-colors">
              Latest
            </a>
            <a href="#tour" className="text-white/80 hover:text-white transition-colors">
              Tour
            </a>
            <a href="#newsletter" className="text-white/80 hover:text-white transition-colors">
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};