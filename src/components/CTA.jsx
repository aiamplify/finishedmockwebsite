import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Live Feed?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who trust FeedGuard for their live streaming security
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-medium shadow-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-700/50 text-white px-8 py-3 rounded-lg font-medium border border-white/20"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}