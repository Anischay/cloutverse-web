'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Technology', 'Finance', 'Web3', 'Reputation'];

const blogPosts = [
  {
    title: 'The Future of Reputation-Based Finance',
    excerpt: 'How reputation scores are revolutionizing traditional financial systems...',
    category: 'Finance',
    readTime: '5 min',
    image: '/blog/finance.jpg'
  },
  {
    title: 'Understanding Clout Score Algorithm',
    excerpt: 'Deep dive into the AI-driven metrics behind your reputation score...',
    category: 'Technology',
    readTime: '8 min',
    image: '/blog/tech.jpg'
  },
  {
    title: 'Web3 Integration in Modern Finance',
    excerpt: 'Exploring the intersection of blockchain and reputation systems...',
    category: 'Web3',
    readTime: '6 min',
    image: '/blog/web3.jpg'
  },
  {
    title: 'Building Trust in Digital Age',
    excerpt: 'How reputation systems are shaping online interactions...',
    category: 'Reputation',
    readTime: '4 min',
    image: '/blog/trust.jpg'
  }
];

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl overflow-hidden backdrop-blur-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <div className="aspect-video relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:opacity-0 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-400">{post.category}</span>
        <span className="text-sm text-gray-400">•</span>
        <span className="text-sm text-gray-400">{post.readTime}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
        {post.title}
      </h3>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link href="/blog/post" className="text-purple-400 hover:text-pink-400 transition-colors duration-300">
        Read More →
      </Link>
    </div>
  </motion.div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300">
            Explore the latest developments in reputation-based finance
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-lg"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on reputation-based finance delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
