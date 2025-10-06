import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { BottomNav } from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    id: 1,
    type: 'reminder',
    icon: Bell,
    title: 'Time for your daily scan!',
    message: 'Keep your 7-day streak going strong 🔥',
    time: '2 hours ago',
    color: 'primary',
  },
  {
    id: 2,
    type: 'achievement',
    icon: CheckCircle,
    title: 'New badge unlocked!',
    message: 'You earned the "Weekly Warrior" badge',
    time: '1 day ago',
    color: 'secondary',
  },
  {
    id: 3,
    type: 'tip',
    icon: Sparkles,
    title: 'New care tip available',
    message: 'Check out our latest nail strengthening guide',
    time: '2 days ago',
    color: 'accent',
  },
  {
    id: 4,
    type: 'progress',
    icon: TrendingUp,
    title: 'Your nail health improved!',
    message: 'Your hydration score increased by 12%',
    time: '3 days ago',
    color: 'primary',
  },
  {
    id: 5,
    type: 'alert',
    icon: AlertCircle,
    title: 'Concerning patterns detected',
    message: 'Consider booking a dermatologist appointment',
    time: '5 days ago',
    color: 'destructive',
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      accent: 'bg-accent/10 text-accent',
      destructive: 'bg-destructive/10 text-destructive',
    };
    return colors[color] || colors.primary;
  };

  return (
    <AppLayout>
      <div className="px-6 py-8 pb-32 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-heading text-3xl font-bold">Notifications</h1>
          <button className="text-sm text-primary font-medium">Mark all read</button>
        </div>

        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notif, index) => {
              const Icon = notif.icon;
              return (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card shadow-soft rounded-2xl p-4 hover:scale-[1.02] transition-transform cursor-pointer"
                  onClick={() => {
                    if (notif.type === 'achievement') navigate('/achievements');
                    if (notif.type === 'tip') navigate('/tips');
                    if (notif.type === 'progress') navigate('/progress');
                  }}
                >
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(notif.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{notif.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notif.time}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card shadow-soft rounded-3xl p-12 text-center"
          >
            <div className="text-6xl mb-4">🔔</div>
            <h3 className="font-heading text-xl font-semibold mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </motion.div>
        )}
      </div>
      <BottomNav />
    </AppLayout>
  );
};

export default Notifications;
