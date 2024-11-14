import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedShape() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      <div className="w-[500px] h-[500px] relative">
        <motion.div
          animate={{
            rotateZ: isHovered ? 180 : 0
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-700 rounded-3xl shadow-2xl transform -rotate-12"
        />
      </div>
    </motion.div>
  );
}