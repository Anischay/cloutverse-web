'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-purple-500/20"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-purple-500"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-gray-400">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Reputation Finance?",
      answer: "Reputation Finance (RepFi) is a revolutionary concept that allows you to tokenize your digital influence and reputation. Through Cloutverse, your online presence becomes a tradable asset, backed by our proprietary Clout Score™ algorithm and blockchain technology."
    },
    {
      question: "How does the Clout Score™ work?",
      answer: "The Clout Score™ is an AI-driven metric that analyzes multiple factors of your digital presence, including social influence, professional achievements, and community engagement. This score provides a reliable foundation for your personal token's value."
    },
    {
      question: "What can I do with my Personal Token?",
      answer: "Your Personal Token serves multiple purposes: monetize your influence, engage with your community through exclusive benefits, create new revenue streams, and grow your digital presence. Token holders can trade these tokens or access special perks you offer."
    },
    {
      question: "Is my reputation data secure?",
      answer: "Absolutely. We employ advanced blockchain technology and encryption to ensure your reputation data is secure and immutable. All calculations and transactions are transparent and verifiable on the blockchain."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple: verify your digital presence, create your personal token with custom parameters, set your distribution strategy, and launch your token. Our platform guides you through each step with our intuitive interface."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about reputation finance and personal tokens
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
