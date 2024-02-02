'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[999] hidden h-12 w-12 rounded-full border border-black dark:border-white lg:flex"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};
