'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';

const events = [
  {
    title: "CloutVerse Summit 2024",
    date: "March 15, 2024",
    location: "Virtual",
    description: "Global conference on the future of reputation finance"
  },
  {
    title: "DeFi Integration Workshop",
    date: "March 20, 2024",
    location: "Online",
    description: "Technical workshop on integrating with CloutVerse"
  },
  {
    title: "Reputation Markets Meetup",
    date: "April 5, 2024",
    location: "New York",
    description: "Network with leaders in reputation-based finance"
  }
];

const CommunityStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    {[
      { label: "Community Members", value: "50,000+" },
      { label: "Active Validators", value: "1,000+" },
      { label: "Countries", value: "120+" }
    ].map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-lg"
      >
        <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {stat.value}
        </div>
        <div className="text-gray-300">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300">{event.description}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-400">
      <span>{event.date}</span>
      <span>•</span>
      <span>{event.location}</span>
    </div>
  </motion.div>
);

const Community = () => {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300">
            Connect with pioneers in reputation-based finance
          </p>
        </motion.div>

        <CommunityStats />

        {/* Community Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['events', 'forum', 'ambassador'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Section */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        )}

        {/* Forum Preview */}
        {activeTab === 'forum' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Popular Discussions</h3>
            <div className="space-y-4">
              {[
                "The future of DeFi and reputation scores",
                "How to maximize your Clout Score",
                "Integration guides and best practices"
              ].map((topic, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors duration-300 cursor-pointer"
                >
                  <div className="text-white font-medium">{topic}</div>
                  <div className="text-sm text-gray-400 mt-2">
                    {Math.floor(Math.random() * 50 + 10)} replies • {Math.floor(Math.random() * 1000 + 100)} views
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ambassador Program */}
        {activeTab === 'ambassador' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Become an Ambassador</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-400">Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Early access to new features</li>
                  <li>• Exclusive events and networking</li>
                  <li>• Revenue sharing opportunities</li>
                  <li>• Custom reputation badges</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-400">Requirements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Active community participation</li>
                  <li>• Strong reputation score</li>
                  <li>• Industry expertise</li>
                  <li>• Content creation skills</li>
                </ul>
              </div>
            </div>
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Apply Now
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Community;
