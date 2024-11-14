import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "FeedGuard Basic",
    price: "$29",
    features: [
      "Real-time threat detection",
      "Basic DDoS protection",
      "24/7 monitoring",
      "Email support"
    ]
  },
  {
    title: "FeedGuard Pro",
    price: "$99",
    features: [
      "Advanced AI detection",
      "Enterprise DDoS protection",
      "Custom security rules",
      "Priority support"
    ]
  },
  {
    title: "FeedGuard Enterprise",
    price: "Custom",
    features: [
      "Full security suite",
      "Dedicated protection",
      "Custom integration",
      "24/7 phone support"
    ]
  }
];

export default function ProductSection() {
  return (
    <section id="product" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Choose Your Protection
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Select the perfect security package for your streaming needs
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {product.title}
            </h3>
            <div className="text-3xl font-bold text-purple-400 mb-6">
              {product.price}
              {product.price !== "Custom" && <span className="text-sm text-white/60">/month</span>}
            </div>
            <ul className="space-y-4 mb-8">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}