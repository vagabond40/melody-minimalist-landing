import { motion } from "framer-motion";
import { Award, Music, Mic } from "lucide-react";

export const Profile = () => {
  return (
    <section className="py-20 bg-charcoal/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About James
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1549834125-82d3c48159a3"
                alt="James River"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                James River is an electronic music composer and producer known for blending
                classical elements with modern electronic sounds. His unique approach to
                music production has earned him critical acclaim and a dedicated following
                worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/80">
                  <Music className="w-5 h-5 text-primary" />
                  <span>10+ Years of Production Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mic className="w-5 h-5 text-primary" />
                  <span>200+ Live Performances</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Multiple Industry Awards</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};