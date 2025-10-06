import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  gradient?: 'primary' | 'accent' | 'gold';
}

export const QuickActionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick,
  gradient = 'primary'
}: QuickActionCardProps) => {
  const gradients = {
    primary: 'gradient-primary',
    accent: 'gradient-accent',
    gold: 'gradient-gold'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left"
    >
      <div className={`glass-card shadow-soft p-6 rounded-2xl ${gradients[gradient]} group`}>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-colors">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-lg mb-1 text-white">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};
