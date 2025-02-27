'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,#8B5CF640,transparent)]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Be among the first to experience the future of reputation finance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20 p-8 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Get Early Access
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: "🎯", text: "Priority access to platform features" },
                  { icon: "💎", text: "Exclusive airdrops and rewards" },
                  { icon: "📈", text: "Early adopter benefits" },
                  { icon: "🌟", text: "Community governance rights" }
                ].map(item => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' :
                   status === 'success' ? 'Welcome Aboard! 🎉' :
                   'Join Waitlist'}
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span>Early Access</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="text-lg">🔒</span>
            Your email is safe with us. We never share your data.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
