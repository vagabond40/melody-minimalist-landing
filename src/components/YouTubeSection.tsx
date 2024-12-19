import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export const YouTubeSection = () => {
  const videos = [
    {
      id: "video1",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      title: "Live at Royal Albert Hall",
      views: "234K views",
    },
    {
      id: "video2",
      thumbnail: "https://images.unsplash.com/photo-1501612780327-45045538702b",
      title: "Studio Session - Midnight Echo",
      views: "186K views",
    },
    {
      id: "video3",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      title: "Behind the Scenes - Making of 'Waves'",
      views: "142K views",
    },
  ];

  return (
    <section className="py-20 bg-charcoal/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Latest Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="text-white/60">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};