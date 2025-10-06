import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trophy, Star, Zap, Heart, Award, Crown } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { BottomNav } from '@/components/BottomNav';

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: 'First Scan',
    description: 'Completed your first nail scan',
    unlocked: true,
    date: 'Jan 15, 2025',
    color: 'primary',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Weekly Warrior',
    description: 'Maintained a 7-day scan streak',
    unlocked: true,
    date: 'Jan 22, 2025',
    color: 'accent',
  },
  {
    id: 3,
    icon: Heart,
    title: 'Self-Care Queen',
    description: 'Read 10 nail care tips',
    unlocked: true,
    date: 'Jan 20, 2025',
    color: 'secondary',
  },
  {
    id: 4,
    icon: Star,
    title: 'Perfect Score',
    description: 'Achieved 95+ health score',
    unlocked: false,
    progress: 85,
    color: 'primary',
  },
  {
    id: 5,
    icon: Crown,
    title: 'Monthly Champion',
    description: 'Scan every day for a month',
    unlocked: false,
    progress: 23,
    color: 'accent',
  },
  {
    id: 6,
    icon: Award,
    title: 'Improvement Master',
    description: 'Increase health score by 20 points',
    unlocked: false,
    progress: 12,
    color: 'secondary',
  },
];

const Achievements = () => {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'from-primary/20 to-primary/5 text-primary',
      secondary: 'from-secondary/20 to-secondary/5 text-secondary',
      accent: 'from-accent/20 to-accent/5 text-accent',
    };
    return colors[color] || colors.primary;
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/profile')}
      title="Achievements"
    >
      <div className="px-6 py-8 pb-32 space-y-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card bg-orange-500  rounded-3xl p-6 text-center"
        >
          <div className="text-5xl mb-3">🏆</div>
          <div className="text-4xl font-heading font-bold text-primary mb-2">
            {achievements.filter(a => a.unlocked).length}/{achievements.length}
          </div>
          <p className="text-muted-foreground">Badges Unlocked</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card shadow-soft rounded-2xl p-6 ${
                  !achievement.unlocked && 'opacity-60'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(achievement.color)} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    {achievement.unlocked ? (
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <span>✓</span>
                        <span>Unlocked on {achievement.date}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-accent rounded-full transition-all"
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {achievement.progress}% complete
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </AppLayout>
  );
};

export default Achievements;
