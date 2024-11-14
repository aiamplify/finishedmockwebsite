import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: "Security Best Practices",
    type: "Guide",
    readTime: "5 min read",
    image: "🔐"
  },
  {
    title: "Live Streaming Protection",
    type: "Whitepaper",
    readTime: "15 min read",
    image: "📱"
  },
  {
    title: "Threat Detection",
    type: "Tutorial",
    readTime: "10 min read",
    image: "⚡"
  },
  {
    title: "API Documentation",
    type: "Technical",
    readTime: "20 min read",
    image: "📚"
  }
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Resources & Guides
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Learn how to maximize your streaming security
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:bg-purple-800/40 transition-all duration-300">
              <div className="text-4xl mb-4">{resource.image}</div>
              <div className="flex items-center gap-3 text-sm text-white/60 mb-3">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
                <span>{resource.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {resource.title}
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="text-purple-400 font-medium hover:text-purple-300"
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20"
        >
          View All Resources
        </motion.button>
      </motion.div>
    </section>
  );
}