'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  theme: string;
  submenu?: {
    title: string;
    href: string;
    icon: string;
    description: string;
  }[];
}

const navItems: NavItem[] = [
  {
    name: 'Platform',
    href: '/platform',
    icon: '🚀',
    theme: 'from-violet-500 to-fuchsia-500',
    submenu: [
      { title: 'Overview', href: '/platform', icon: '🎯', description: 'Platform features and benefits' },
      { title: 'CloutCoin', href: '/platform/cloutcoin', icon: '💎', description: 'Native platform token' },
      { title: 'Governance', href: '/platform/governance', icon: '⚖️', description: 'Community-driven decisions' },
      { title: 'Roadmap', href: '/platform/roadmap', icon: '🗺️', description: 'Future development plans' }
    ]
  },
  {
    name: 'Products',
    href: '/products',
    icon: '💎',
    theme: 'from-fuchsia-500 to-cyan-500',
    submenu: [
      { title: 'For Individuals', href: '/products/individuals', icon: '👤', description: 'Monetize your online influence' },
      { title: 'For Investors', href: '/products/investors', icon: '📈', description: 'Trade reputation assets' },
      { title: 'For Institutions', href: '/products/institutions', icon: '🏢', description: 'Enterprise-grade solutions' },
      { title: 'For Brands', href: '/products/brands', icon: '🎯', description: 'Leverage creator partnerships' }
    ]
  },
  {
    name: 'Markets',
    href: '/markets',
    icon: '📊',
    theme: 'from-cyan-500 to-violet-500',
    submenu: [
      { title: 'ETFs & Indices', href: '/markets/etfs', icon: '📊', description: 'Curated reputation portfolios' },
      { title: 'Derivatives', href: '/markets/derivatives', icon: '📈', description: 'Advanced trading instruments' },
      { title: 'Trading', href: '/markets/trading', icon: '💹', description: 'Trade personal tokens' },
      { title: 'Analytics', href: '/markets/analytics', icon: '📊', description: 'Market insights and data' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: '📚',
    theme: 'from-violet-500 to-fuchsia-500',
    submenu: [
      { title: 'Documentation', href: '/resources/docs', icon: '📖', description: 'Guides and tutorials' },
      { title: 'Analytics', href: '/resources/analytics', icon: '📊', description: 'Market insights' },
      { title: 'Governance', href: '/resources/governance', icon: '🏛️', description: 'DAO participation' },
      { title: 'API', href: '/resources/api', icon: '🔧', description: 'Developer resources' }
    ]
  },
  {
    name: 'Insurance',
    href: '/insurance',
    icon: '🛡️',
    theme: 'from-fuchsia-500 to-cyan-500',
    submenu: [
      { title: 'Reputation Shield', href: '/insurance', icon: '🛡️', description: 'Protect your reputation score' },
      { title: 'Token Insurance', href: '/insurance/token', icon: '💰', description: 'Safeguard token value' },
      { title: 'Social Capital', href: '/insurance/social', icon: '🌐', description: 'Social media protection' },
      { title: 'Claims', href: '/insurance/claims', icon: '✅', description: 'Process and track claims' }
    ]
  }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    setActiveItem(itemName);
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveItem('');
    setOpenDropdown(null);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 glassmorphism border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text"
            >
              Cloutverse
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className="px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-white/5 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </motion.div>

                {/* Animated Underline */}
                {activeItem === item.name && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${item.theme}`}
                    layoutId="navbar-underline"
                  />
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {openDropdown === item.name && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 dropdown-card overflow-hidden"
                    >
                      <div className="p-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.href} href={subItem.href}>
                            <motion.div
                              className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                              whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-xl bg-black/20 p-2 rounded-lg">{subItem.icon}</span>
                                <div>
                                  <div className="font-medium text-white">
                                    {subItem.title}
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {subItem.description}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Gradient border bottom */}
                      <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic-button text-sm"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="md:hidden"
        initial={false}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-white/5"
            >
              <span className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;