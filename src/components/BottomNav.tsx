import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Sparkles, User, Bell } from 'lucide-react';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: TrendingUp, label: 'Progress', path: '/progress' },
    { icon: Sparkles, label: 'Tips', path: '/tips' },
    { icon: Bell, label: 'Alerts', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto"
    >
      <div className="glass-card shadow-glow border-t px-6 py-3 rounded-t-3xl">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 relative"
                whileTap={{ scale: 0.9 }}
              >
                <div className={`p-2 rounded-2xl transition-colors ${
                  isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 w-8 h-1 rounded-full bg-primary"
                  />
                )}
                <span className={`text-xs ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
