import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FAB = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/upload')}
      className="fixed bottom-24 right-6 z-40 w-16 h-16 rounded-full gradient-accent shadow-glow text-white flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Camera className="w-7 h-7" />
    </motion.button>
  );
};
