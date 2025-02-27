import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest updates and resources directly in your inbox
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
