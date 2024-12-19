import { motion } from "framer-motion";

export const LatestRelease = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
            Latest Release
          </h2>
          <div className="aspect-video bg-gray-100 mb-6 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Latest album artwork"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-charcoal mb-2">Midnight Echo</h3>
          <p className="text-gray-600 mb-6">New Album Out Now</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Stream
            </a>
            <a
              href="#"
              className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              Buy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};