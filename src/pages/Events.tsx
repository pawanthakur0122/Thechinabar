import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Star, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Jazz Night with Sarah Chen',
    date: '2024-03-15',
    time: '20:00 - 23:00',
    description: 'Experience the soulful jazz performance by internationally acclaimed artist Sarah Chen',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    category: 'Live Music'
  },
  {
    id: '2',
    title: 'Mixology Masterclass',
    date: '2024-03-20',
    time: '18:00 - 20:00',
    description: 'Learn the art of cocktail making from our expert mixologists',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80',
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'Wine Tasting Evening',
    date: '2024-03-25',
    time: '19:00 - 22:00',
    description: 'Discover premium wines from around the world with our sommelier',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
    category: 'Tasting'
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
            alt="Events Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Upcoming Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Experience unforgettable moments at The China Bar
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
              alt="Featured Event"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jazz Night with Sarah Chen</h2>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-purple-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>20:00 - 23:00</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Main Stage</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-8">
                  Experience an unforgettable evening of soulful jazz with internationally acclaimed artist Sarah Chen.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event List */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-purple-900/10 rounded-2xl overflow-hidden border border-purple-900/20"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;