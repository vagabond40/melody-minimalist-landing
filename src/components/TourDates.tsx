import { motion } from "framer-motion";

export const TourDates = () => {
  const tours = [
    { date: "MAR 15", venue: "The Echo", location: "Los Angeles, CA" },
    { date: "MAR 18", venue: "Great American", location: "San Francisco, CA" },
    { date: "MAR 22", venue: "Crystal Ballroom", location: "Portland, OR" },
    { date: "MAR 25", venue: "The Showbox", location: "Seattle, WA" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Tour Dates
          </h2>
          <div className="space-y-6">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-bold text-charcoal">{tour.date}</p>
                  <p className="text-gray-600">{tour.venue}</p>
                  <p className="text-sm text-gray-500">{tour.location}</p>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                  Tickets
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};