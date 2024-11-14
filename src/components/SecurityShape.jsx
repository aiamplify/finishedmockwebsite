import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SecurityShape() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-[600px] h-[600px] flex items-center justify-center"
    >
      <motion.div
        animate={controls}
        className="w-[400px] h-[400px] relative"
        style={{ 
          perspective: 1000,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Main shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 rounded-3xl shadow-2xl transform rotate-45">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        </div>
        
        {/* Reflection layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 rounded-3xl shadow-2xl transform -rotate-45 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        </div>
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 rounded-3xl shadow-2xl transform scale-75 rotate-90 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        </div>
      </motion.div>
    </motion.div>
  );
}