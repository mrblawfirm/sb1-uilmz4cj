import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const flowers = Array(12).fill(null);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Flowers */}
      <div className="fixed inset-0 pointer-events-none">
        {flowers.map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
              rotate: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-4xl">🌸</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Happy Valentine's Day! ❤️</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          Open My Letter 💌
        </motion.button>
      </motion.div>

      {/* Love Letter Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-8 max-w-sm w-full shadow-xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Title className="text-2xl font-bold text-pink-600 mb-4">
                My Dearest ❤️
              </Dialog.Title>
              <div className="text-gray-700 mb-6 space-y-4">
                <p>
                  Every moment with you feels like a beautiful dream come true. Your smile lights up my world,
                  and your love makes my heart flutter like these gentle flower petals.
                </p>
                <p>
                  You're my everything, my sunshine, my reason to smile every single day.
                  Will you be my Valentine today and forever?
                </p>
                <p className="font-semibold text-pink-600">
                  With all my love,
                  <br />
                  Your Valentine ❤️
                </p>
              </div>
              <button
                className="w-full bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Close with Love 💕
              </button>
            </motion.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default App;