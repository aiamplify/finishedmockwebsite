import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "🛡️",
    title: "Real-time Protection",
    description: "Advanced algorithms detect and prevent security threats in real-time"
  },
  {
    icon: "🎯",
    title: "Smart Detection",
    description: "AI-powered content analysis for precise threat identification"
  },
  {
    icon: "⚡",
    title: "Zero Latency",
    description: "Lightning-fast processing with no impact on stream performance"
  },
  {
    icon: "🔒",
    title: "End-to-End Encryption",
    description: "Military-grade encryption for maximum content security"
  }
];

export default function Features() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Advanced Security Features
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Protect your content with our comprehensive suite of security features
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/60">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}