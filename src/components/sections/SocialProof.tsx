'use client';

import { motion } from 'framer-motion';

const Testimonial = ({ content, author, role, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-sm"
  >
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-300 mb-6">{content}</p>
      </div>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-purple-400 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Partner = ({ name, logo, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center justify-center p-4"
  >
    <div className="text-4xl grayscale hover:grayscale-0 transition-all duration-300">
      {logo}
    </div>
  </motion.div>
);

const SocialProof = () => {
  const testimonials = [
    {
      content: "Cloutverse has transformed how I monetize my online presence. My personal token has created a new revenue stream and deeper engagement with my community.",
      author: "Elena Rodriguez",
      role: "Digital Creator & Influencer"
    },
    {
      content: "The platform's reputation scoring system is revolutionary. It's brought transparency and real value to digital influence.",
      author: "James Chen",
      role: "Tech Entrepreneur"
    },
    {
      content: "As an early adopter, I've seen my token value grow alongside my Clout Score. The ecosystem Cloutverse has built is truly groundbreaking.",
      author: "Sarah Mitchell",
      role: "Community Leader"
    }
  ];

  const partners = [
    { name: "TechCrunch", logo: "📱" },
    { name: "Forbes", logo: "📰" },
    { name: "Blockchain Weekly", logo: "⛓️" },
    { name: "Influence Hub", logo: "🌟" },
    { name: "Web3 Daily", logo: "🌐" },
    { name: "Future Finance", logo: "💫" }
  ];

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Total Token Value", value: "$25M+" },
    { label: "Avg. ROI", value: "124%" },
    { label: "Community Size", value: "180K+" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-400 mb-8">Featured In</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <Partner 
                key={partner.name} 
                {...partner} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={testimonial.author} 
                {...testimonial} 
                delay={0.2 * index}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 px-8 py-4 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-400">Bank-Grade Security</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-400">Real-time Updates</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="text-gray-400">Data Protection</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
