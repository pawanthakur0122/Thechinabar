import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassWater, UtensilsCrossed, Phone, Star, Users, Clock, Wine, Award, Music, Sparkles } from 'lucide-react';
import Scene3D from '../components/Scene3D';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80"
            alt="Luxury Bar Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  The China Bar
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Experience the perfect blend of luxury and ambiance in Malaysia's most exclusive premium lounge
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors w-full md:w-auto"
>
  <GlassWater className="w-5 h-5" />
  <Link to="pages/menu">
    <span>View Menu</span>
  </Link>
</motion.button>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors w-full md:w-auto"
>
  <UtensilsCrossed className="w-5 h-5" />
  <Link to="pages/reservations">
    <span>Reserve a Table</span>
  </Link>
</motion.button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <Scene3D />
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Award-Winning Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Recognized globally for our exceptional service and innovative cocktails</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Luxury Bar 2023",
                award: "Forbes Travel Guide",
                icon: Award
              },
              {
                title: "5-Star Excellence",
                award: "Michelin Guide",
                icon: Star
              },
              {
                title: "Top 50 Bars Worldwide",
                award: "World's Best Bars",
                icon: Wine
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-2xl p-8 text-center"
              >
                <award.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-gray-400">{award.award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Star,
                title: "Premium Experience",
                description: "Indulge in our carefully curated selection of finest spirits and cocktails"
              },
              {
                icon: Users,
                title: "Private Events",
                description: "Host your special occasions in our exclusive private lounges"
              },
              {
                icon: Clock,
                title: "Late Night Service",
                description: "Experience the nightlife until the early hours of the morning"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-purple-900/10 backdrop-blur-sm border border-purple-900/20"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80"
            alt="Cocktail Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Signature Cocktails</h2>
            <p className="text-gray-400">Expertly crafted by our world-class mixologists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dragon's Breath",
                description: "Premium vodka, lychee liqueur, dragon fruit, rose water",
                price: "¥188",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
              },
              {
                name: "Jade Emperor",
                description: "Aged baijiu, green tea syrup, yuzu juice, champagne",
                price: "¥228",
                image: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80"
              },
              {
                name: "Golden Phoenix",
                description: "Japanese whisky, osmanthus honey, ginger, gold leaf",
                price: "¥268",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
              }
            ].map((cocktail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">{cocktail.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{cocktail.description}</p>
                    <p className="text-purple-400 font-semibold">{cocktail.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Entertainment</h2>
            <p className="text-gray-400">Experience world-class performances every night</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/9]"
            >
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
                alt="Live Jazz"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Music className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Live Jazz</h3>
                <p className="text-gray-300">Every Thursday - Saturday</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/9]"
            >
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
                alt="DJ Nights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">International DJs</h3>
                <p className="text-gray-300">Friday & Saturday Nights</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80"
            alt="Bar Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Experience Luxury?</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors mx-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us Now</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
