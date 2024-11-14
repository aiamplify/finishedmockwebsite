import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "FeedGuard has revolutionized how we handle our live streaming security. It's simply incredible.",
    author: "Sarah Chen",
    role: "Head of Content, StreamTech"
  },
  {
    quote: "The real-time protection is unmatched. We've never felt more secure with our live content.",
    author: "Michael Rodriguez",
    role: "Security Director, LiveCast"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          See what our customers have to say about FeedGuard
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
          >
            <blockquote className="text-xl text-white/90 mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-white">
                {testimonial.author}
              </div>
              <div className="text-white/60 text-sm">
                {testimonial.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}