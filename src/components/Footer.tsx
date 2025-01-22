import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wine, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Wine className="h-8 w-8 text-purple-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  The China Bar
                </span>
                <span className="text-xs text-gray-400 tracking-widest">PREMIUM LOUNGE</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Experience luxury redefined in the heart of the city. Where sophistication meets exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Menu', 'Gallery', 'Events', 'Reservations', 'About Us', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-purple-500" />
                <span className="text-sm">Lot G-01, Menara The Met No. 20, Jalan Dutamas 2
50480 Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-purple-500" />
                <span className="text-sm">+86 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-purple-500" />
                <span className="text-sm">info@thechinabar.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-purple-400">Mon - Thu:</span> 4:00 PM - 1:00 AM
              </p>
              <p className="text-gray-400">
                <span className="text-purple-400">Fri - Sat:</span> 4:00 PM - 3:00 AM
              </p>
              <p className="text-gray-400">
                <span className="text-purple-400">Sunday:</span> 4:00 PM - 12:00 AM
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The China Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;