import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Droplets, Shield, Palette, CheckCircle2 } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { HealthScoreRing } from '@/components/HealthScoreRing';
import { Button } from '@/components/ui/button';

interface HealthMetric {
  icon: typeof Droplets;
  label: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-attention';
  advice: string;
}

const metrics: HealthMetric[] = [
  {
    icon: Droplets,
    label: 'Hydration',
    score: 92,
    status: 'excellent',
    advice: 'Your nails are well-hydrated! Keep using cuticle oil daily.'
  },
  {
    icon: Shield,
    label: 'Strength',
    score: 78,
    status: 'good',
    advice: 'Consider taking biotin supplements to improve nail strength.'
  },
  {
    icon: Palette,
    label: 'Color',
    score: 88,
    status: 'excellent',
    advice: 'Healthy pink nail beds indicate good circulation!'
  }
];

const Results = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: HealthMetric['status']) => {
    switch (status) {
      case 'excellent':
        return 'text-primary';
      case 'good':
        return 'text-accent';
      case 'needs-attention':
        return 'text-destructive';
    }
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/dashboard')}
      title="Analysis Results"
    >
      <div className="px-6 py-8 space-y-8">
        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card shadow-soft rounded-3xl p-8 text-center"
        >
          <HealthScoreRing score={86} size="lg" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <h2 className="font-heading text-2xl font-bold mb-2">Excellent Health!</h2>
            <p className="text-muted-foreground">Your nails are in great condition</p>
          </motion.div>
        </motion.div>

        {/* Individual Metrics */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-semibold">Detailed Analysis</h3>
          
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card shadow-soft rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${getStatusColor(metric.status)} bg-current/10`}>
                    <Icon className={`w-6 h-6 ${getStatusColor(metric.status)}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-heading text-lg font-semibold">{metric.label}</h4>
                      <span className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                        {metric.score}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.advice}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="gradient-primary rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-heading text-xl font-semibold text-white mb-4">
            Personalized Recommendations
          </h3>
          <div className="space-y-3">
            {[
              'Continue daily cuticle oil application',
              'Add biotin-rich foods to your diet',
              'Wear gloves when doing dishes or cleaning',
              'Keep nails at a moderate length'
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/dashboard')}
            size="lg"
            className="w-full gradient-accent text-white shadow-soft"
          >
            Back to Dashboard
          </Button>
          <Button
            onClick={() => navigate('/progress')}
            size="lg"
            variant="outline"
            className="w-full"
          >
            View Progress
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Results;
