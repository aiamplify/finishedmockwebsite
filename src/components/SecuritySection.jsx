import React from 'react';
import { motion } from 'framer-motion';

const securityFeatures = [
  {
    title: "AI-Powered Detection",
    description: "Advanced machine learning algorithms that identify and block threats in real-time",
    icon: "🤖"
  },
  {
    title: "DDoS Protection",
    description: "Enterprise-grade protection against distributed denial of service attacks",
    icon: "🛡️"
  },
  {
    title: "Content Verification",
    description: "Automated content authentication to prevent unauthorized streams",
    icon: "✅"
  },
  {
    title: "Encryption",
    description: "End-to-end encryption ensuring your content remains private and secure",
    icon: "🔒"
  }
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Enterprise-Grade Security
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Protect your live streams with military-grade security features
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-white/60">
              {feature.description}
            </p>
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
          Learn More About Security
        </motion.button>
      </motion.div>
    </section>
  );
}