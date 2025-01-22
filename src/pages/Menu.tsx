import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float, Html } from '@react-three/drei';
import { Wine, Coffee, Utensils, IceCream2 } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: "Dragon's Breath",
    description: "Premium vodka, lychee liqueur, dragon fruit, rose water",
    price: "¥188",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    category: "Signature Cocktails"
  },
  {
    id: '2',
    name: "Jade Emperor",
    description: "Aged baijiu, green tea syrup, yuzu juice, champagne",
    price: "¥228",
    image: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80",
    category: "Signature Cocktails"
  },
  {
    id: '3',
    name: "Golden Phoenix",
    description: "Japanese whisky, osmanthus honey, ginger, gold leaf",
    price: "¥268",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    category: "Signature Cocktails"
  },
  // Add more menu items as needed
];

const categories = [
  { name: "Signature Cocktails", icon: Wine },
  { name: "Mocktails", icon: Coffee },
  { name: "Bar Snacks", icon: Utensils },
  { name: "Desserts", icon: IceCream2 },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Signature Cocktails");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80"
            alt="Bar Interior"
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
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Discover our curated selection of premium drinks and delicacies
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map(({ name, icon: Icon }) => (
              <motion.button
                key={name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(name)}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-colors ${
                  selectedCategory === name
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-gray-300 hover:bg-purple-900/40'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <p className="text-purple-400 font-semibold">{item.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Item */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Drink</h2>
            <p className="text-gray-400">Experience our most celebrated creation</p>
          </div>
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <Environment preset="night" />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                  <cylinderGeometry args={[0.5, 0.3, 2, 32]} />
                  <meshStandardMaterial
                    color="#9333ea"
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#4c1d95"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.7}
                  />
                  <Html position={[0, 0, 0.5]} center>
                    <div className="text-center bg-black/80 backdrop-blur-md p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-400 mb-2">Dragon's Breath</h3>
                      <p className="text-gray-300">Our signature cocktail</p>
                    </div>
                  </Html>
                </mesh>
              </Float>
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;