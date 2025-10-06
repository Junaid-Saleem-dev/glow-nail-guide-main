import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Camera, TrendingUp, Sparkles } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { HealthScoreRing } from '@/components/HealthScoreRing';
import { QuickActionCard } from '@/components/QuickActionCard';
import { BottomNav } from '@/components/BottomNav';
import { FAB } from '@/components/FAB';

const motivationalQuotes = [
  "Strong nails, strong you 💅",
  "Beauty begins with healthy nails ✨",
  "Your nail journey starts here 🌸",
  "Confidence is the best polish 💖"
];

const Dashboard = () => {
  const navigate = useNavigate();
  const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <AppLayout>
      <div className="px-6 py-8 pb-32 space-y-8">
        {/* Greeting Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="font-heading text-4xl font-bold">Hello, Beautiful! 👋</h1>
          <p className="text-muted-foreground text-lg">{quote}</p>
        </motion.div>

        {/* Health Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card shadow-soft rounded-3xl p-8 text-center"
        >
          <h2 className="font-heading text-xl font-semibold mb-6">Your Nail Health</h2>
          <HealthScoreRing score={85} />
          <p className="mt-6 text-muted-foreground">
            Excellent! Keep up the great care routine 🌟
          </p>
        </motion.div>

        {/* Streak Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-orange-500 rounded-2xl p-6 text-center shadow-soft"
        >
          <div className="text-5xl mb-2">🎁</div>
          <h3 className="font-heading text-2xl font-bold text-white mb-1">7 Day Streak!</h3>
          <p className="text-white/80">You're on fire! Keep scanning daily</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-2xl font-semibold">Quick Actions</h2>
          
          <QuickActionCard
            icon={Camera}
            title="Upload Scan"
            description="Take a new photo to analyze your nail health"
            onClick={() => navigate('/upload')}
            gradient="accent"
          />
          
          <QuickActionCard
            icon={TrendingUp}
            title="My Progress"
            description="View your nail health journey and improvements"
            onClick={() => navigate('/progress')}
            gradient="accent"
          />
          
          <QuickActionCard
            icon={Sparkles}
            title="Care Tips"
            description="Learn how to keep your nails healthy and strong"
            onClick={() => navigate('/tips')}
            gradient="accent"
          />
        </motion.div>
      </div>
      <BottomNav />
      <FAB />
    </AppLayout>
  );
};

export default Dashboard;
