// components/PageWrapper.jsx
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen pt-20 "
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;