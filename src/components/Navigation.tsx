import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Wine, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Wine className="h-10 w-10 text-purple-500" />
                <motion.div
                  className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  The China Bar
                </span>
                <span className="text-xs text-gray-400 tracking-widest">PREMIUM LOUNGE</span>
              </div>
            </NavLink>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Menu', 'Gallery', 'Events', 'Reservations', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-sm tracking-wider hover:text-purple-400 transition-colors relative group ${
                      isActive ? 'text-purple-400' : 'text-white'
                    }`
                  }
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
              <button className="px-6 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200">
                Book Now
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden pt-20"
          >
            <div className="flex flex-col items-center space-y-6 p-8">
              {['Home', 'Menu', 'Gallery', 'Events', 'Reservations', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg ${isActive ? 'text-purple-400' : 'text-white'}`
                  }
                >
                  {item}
                </NavLink>
              ))}
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg mt-4">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;