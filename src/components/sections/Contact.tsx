'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
            required
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
            required
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label className="block text-gray-300 mb-2">Subject</label>
        <input
          type="text"
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
          required
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
      >
        Send Message
      </motion.button>
    </form>
  );
};

const ContactInfo = () => (
  <div className="space-y-8">
    {[
      {
        icon: "📍",
        title: "Location",
        content: "Silicon Valley, California"
      },
      {
        icon: "📧",
        title: "Email",
        content: "contact@cloutverse.com"
      },
      {
        icon: "💬",
        title: "Social",
        content: "Follow us @CloutVerse"
      }
    ].map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg backdrop-blur-lg"
      >
        <div className="text-2xl">{item.icon}</div>
        <div>
          <h3 className="text-white font-semibold mb-1">{item.title}</h3>
          <p className="text-gray-300">{item.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const Contact = () => {
  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          
          <div className="order-1 lg:order-2">
            <ContactInfo />
            
            {/* Map or 3D Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 h-[300px] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden"
            >
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                  <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial
                      color="#4ecdc4"
                      wireframe
                      transparent
                      opacity={0.3}
                    />
                  </mesh>
                </Float>
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
