'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const IndividualsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {
      title: "Reputation Analytics",
      description: "Deep insights into your digital presence",
      features: ["Sentiment analysis", "Engagement metrics", "Growth tracking", "Competitor analysis"],
      icon: "📊"
    },
    {
      title: "Content Optimization",
      description: "AI-powered content recommendations",
      features: ["Topic suggestions", "Timing optimization", "Format recommendations", "Audience insights"],
      icon: "✨"
    },
    {
      title: "Network Growth",
      description: "Strategic network expansion tools",
      features: ["Connection suggestions", "Collaboration opportunities", "Community building", "Influence tracking"],
      icon: "🌐"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Parallax Hero Section */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, purple 0%, transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            For Individuals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your online presence into a valuable digital asset
          </motion.p>
        </div>
      </motion.div>

      {/* Interactive Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Your Toolbox</h2>
          <p className="text-xl text-gray-400">Powerful tools to grow and monetize your influence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeTool === index
                  ? 'bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-500'
                  : 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20'
              }`}
              onClick={() => setActiveTool(index)}
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-400 mb-4">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400">See how others have transformed their digital presence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Tech Influencer",
                growth: "+320%",
                testimonial: "Cloutverse helped me quantify and grow my influence systematically.",
                image: "👩‍💻"
              },
              {
                name: "Marcus Johnson",
                role: "Content Creator",
                growth: "+250%",
                testimonial: "The analytics tools gave me insights I never had before.",
                image: "👨‍🎨"
              },
              {
                name: "Elena Rodriguez",
                role: "Startup Founder",
                growth: "+400%",
                testimonial: "Turned my personal brand into a valuable business asset.",
                image: "👩‍💼"
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/50 backdrop-blur-xl border border-purple-500/20"
              >
                <div className="text-6xl mb-4">{story.image}</div>
                <div className="text-xl font-bold mb-1">{story.name}</div>
                <div className="text-purple-400 mb-2">{story.role}</div>
                <div className="text-green-400 font-bold mb-4">Growth: {story.growth}</div>
                <p className="text-gray-300 italic">"{story.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Start Your Journey</h2>
          <p className="text-xl text-gray-400 mb-12">Three simple steps to begin monetizing your influence</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect Accounts",
                description: "Link your social media accounts for comprehensive analysis"
              },
              {
                step: "2",
                title: "Get Your Score",
                description: "Receive your initial Clout Score™ and personalized insights"
              },
              {
                step: "3",
                title: "Start Growing",
                description: "Use our tools to systematically grow your digital presence"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                    {step.step}
                  </span>
                </div>
                <div className="pt-8 p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Started Now
          </button>
        </motion.div>
      </div>

      {/* New Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Monetize Your Digital Influence
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your online reputation into a valuable digital asset with Personal Tokens
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Launch Your Token",
              description: "Create your personal token backed by your Clout Score™",
              icon: "🚀",
              link: "/platform/personal-token"
            },
            {
              title: "Build Your Score",
              description: "Improve your Clout Score™ through verified achievements",
              icon: "📈",
              link: "/platform/clout-score"
            },
            {
              title: "Protect Your Value",
              description: "Secure your reputation with insurance coverage",
              icon: "🛡️",
              link: "/platform/insurance"
            },
            {
              title: "Engage Community",
              description: "Create exclusive benefits for your token holders",
              icon: "🤝",
              link: "/resources/community"
            },
            {
              title: "Trade & Earn",
              description: "Access the marketplace to trade personal tokens",
              icon: "💹",
              link: "/markets"
            },
            {
              title: "Track Analytics",
              description: "Monitor your token performance and holder metrics",
              icon: "📊",
              link: "/resources/analytics"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              <Link href={feature.link}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Tech Influencer",
                story: "Launched $CHEN token and grew community to 50,000 holders",
                growth: "+425%",
                image: "/testimonials/sarah.jpg"
              },
              {
                name: "Marcus Williams",
                role: "Content Creator",
                story: "Used token rewards to incentivize community engagement",
                growth: "+280%",
                image: "/testimonials/marcus.jpg"
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-gray-400">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{story.story}</p>
                <div className="text-green-400 font-semibold">{story.growth} Token Growth</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/platform/personal-token">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Launch Your Token Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default IndividualsPage;
