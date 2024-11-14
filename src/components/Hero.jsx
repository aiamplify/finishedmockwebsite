import React from 'react';
import { motion } from 'framer-motion';
import SecurityShape from './SecurityShape';

export default function Hero() {
  return (
    <div className="flex items-center justify-between pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full text-white/80 mb-6 text-sm">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Integrated Security Solutions
        </div>
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Personalized security for
          <br />
          your live video feed
        </h1>
        <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
          Keep your live video safe and secure with smart, automated protection
          tailored just for you.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20"
        >
          Try FeedGuard
        </motion.button>
      </motion.div>
      <SecurityShape />
    </div>
  );
}