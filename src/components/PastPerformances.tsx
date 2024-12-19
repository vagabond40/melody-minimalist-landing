import { motion } from "framer-motion";

export const PastPerformances = () => {
  const performances = [
    {
      venue: "Coachella Festival",
      location: "California, USA",
      date: "April 2023",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    },
    {
      venue: "Tomorrowland",
      location: "Boom, Belgium",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    },
    {
      venue: "Glastonbury Festival",
      location: "Somerset, UK",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    },
    {
      venue: "Ultra Music Festival",
      location: "Miami, USA",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Past Performances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performances.map((performance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={performance.image}
                    alt={performance.venue}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {performance.venue}
                    </h3>
                    <p className="text-white/80">{performance.location}</p>
                    <p className="text-primary text-sm">{performance.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};