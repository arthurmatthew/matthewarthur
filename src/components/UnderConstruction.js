import React from 'react';
import { motion } from 'framer-motion';

export function UnderConstruction() {
  return (
    <motion.div
      className="flex w-full items-center justify-center p-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="rounded-md bg-white p-6">
        This website is under construction. See its progress{' '}
        <a
          href="https://www.github.com/arthurmatthew/matthewarthur"
          target="blank"
          className="text-purple-500"
        >
          here
        </a>
        .
      </div>
    </motion.div>
  );
}
