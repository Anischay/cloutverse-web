import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {/* FAQ items will be added here */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
