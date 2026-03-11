import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Lock, User, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import StarsBackground from '../components/StarsBackground';
import GlowingText from '../components/GlowingText';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = 'BlueStoneX';
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Lock,
      title: 'Secure Transactions',
      description: 'Helping buyers and sellers connect with confidence.',
    },
    {
      icon: User,
      title: 'Serious Buyers',
      description: 'Designed for entrepreneurs actively looking to acquire businesses.',
    },
    {
      icon: Lightbulb,
      title: 'New Opportunities',
      description: 'Discover business opportunities across industries.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <StarsBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <GlowingText 
            text="BlueStoneX" 
            className="text-6xl md:text-8xl font-bold mb-8 justify-center"
          />
          
          <motion.h1
            className="text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Buy and sell businesses – Securely
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A modern marketplace designed to connect entrepreneurs, investors, and business owners looking to buy or sell businesses.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              to="/buy"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 min-w-[250px]"
            >
              I want to buy a business
            </Link>
            <Link
              to="/sell"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 min-w-[250px]"
            >
              I want to sell my business
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-white" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Call Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Looking to Buy a Business?
          </h2>
          <div className="space-y-4 text-xl md:text-2xl text-white/80">
            <p>Discover business acquisition opportunities</p>
            <p>Connect with business owners</p>
            <p>Find your next entrepreneurial venture</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-white/10">
        <a
          href="https://instagram.com/bluestonex_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors text-lg"
        >
          @bluestonex_
        </a>
      </footer>
    </div>
  );
}
