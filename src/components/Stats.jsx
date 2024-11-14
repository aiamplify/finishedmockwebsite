import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '98%', label: 'Accuracy rate' },
    { value: '25k+', label: 'Satisfied customers' }
  ];

  return (
    <div className="flex gap-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-baseline gap-2"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-white/60 text-sm font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}