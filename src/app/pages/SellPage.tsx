import { useState } from 'react';
import Navbar from '../components/Navbar';
import StarsBackground from '../components/StarsBackground';
import { motion } from 'motion/react';
import { submitToGoogleSheets } from '../utils/googleSheets';

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Submit to Google Sheets
    const success = await submitToGoogleSheets({
      name: formData.name,
      email: formData.email,
      type: 'seller',
    });
    
    setIsSubmitting(false);
    
    if (success) {
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <StarsBackground />
      <Navbar />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.div
          className="max-w-lg w-full bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell a Business</h1>
          <p className="text-white/70 text-lg mb-8">
            BlueStoneX is building a modern marketplace where business owners can connect with serious buyers and list their opportunities securely.
          </p>

          {isSubmitted ? (
            <motion.div
              className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-green-400 text-xl font-semibold">
                Thank you! You've been added to the waitlist.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join Seller Waitlist'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}