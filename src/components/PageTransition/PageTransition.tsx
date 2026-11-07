import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants: any = {
  initial: { opacity: 0, y: 18 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
