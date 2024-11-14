import React from 'react';
import { motion } from 'framer-motion';

const customers = [
  {
    name: "StreamTech",
    industry: "Live Entertainment",
    quote: "FeedGuard has transformed how we handle security for our live events.",
    stats: "50% reduction in security incidents"
  },
  {
    name: "LiveCast",
    industry: "Education",
    quote: "The most reliable security solution we've ever used for our online courses.",
    stats: "100k+ streams protected"
  },
  {
    name: "GameStream",
    industry: "Gaming",
    quote: "Perfect for protecting our gaming tournaments from attacks.",
    stats: "99.9% uptime achieved"
  }
];

export default function CustomersSection() {
  return (
    <section id="customers" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Customer Success Stories
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          See how leading companies protect their streams with FeedGuard
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {customers.map((customer, index) => (
          <motion.div
            key={customer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {customer.name}
              </h3>
              <div className="text-purple-400 text-sm">
                {customer.industry}
              </div>
            </div>
            <blockquote className="text-white/80 mb-6">
              "{customer.quote}"
            </blockquote>
            <div className="pt-6 border-t border-purple-500/20">
              <div className="text-white font-semibold">
                {customer.stats}
              </div>
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
          Read More Case Studies
        </motion.button>
      </motion.div>
    </section>
  );
}