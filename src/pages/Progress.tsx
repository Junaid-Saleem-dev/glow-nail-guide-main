import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Award, Calendar } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { BottomNav } from '@/components/BottomNav';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan 1', score: 72 },
  { date: 'Jan 8', score: 75 },
  { date: 'Jan 15', score: 78 },
  { date: 'Jan 22', score: 82 },
  { date: 'Jan 29', score: 86 },
];

const scans = [
  { date: '2024-01-29', score: 86, improvement: '+4' },
  { date: '2024-01-22', score: 82, improvement: '+4' },
  { date: '2024-01-15', score: 78, improvement: '+3' },
  { date: '2024-01-08', score: 75, improvement: '+3' },
  { date: '2024-01-01', score: 72, improvement: 'baseline' },
];

const Progress = () => {
  const navigate = useNavigate();

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/dashboard')}
      title="My Progress"
    >
      <div className="px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card shadow-soft rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold font-heading gradient-primary bg-clip-text text-transparent">
              5
            </div>
            <div className="text-sm text-muted-foreground mt-1">Total Scans</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card shadow-soft rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold font-heading text-primary">
              +14
            </div>
            <div className="text-sm text-muted-foreground mt-1">Point Increase</div>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card shadow-soft rounded-3xl p-6"
        >
          <h3 className="font-heading text-xl font-semibold mb-6">Health Score Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Scan History */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-semibold">Scan History</h3>
          
          {scans.map((scan, index) => (
            <motion.div
              key={scan.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="glass-card shadow-soft rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{new Date(scan.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}</div>
                <div className="text-sm text-muted-foreground">Health Score: {scan.score}</div>
              </div>
              <div className={`font-bold text-lg ${
                scan.improvement === 'baseline' 
                  ? 'text-muted-foreground' 
                  : 'text-primary'
              }`}>
                {scan.improvement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-orange-500 rounded-2xl p-6 shadow-soft text-white"
        >
          <h3 className="font-heading text-xl font-semibold mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            {['🏆', '⭐', '💎'].map((emoji, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{emoji}</div>
                <div className="text-xs text-white/90">
                  {index === 0 && 'First Scan'}
                  {index === 1 && '7 Day Streak'}
                  {index === 2 && 'Top Score'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </AppLayout>
  );
};

export default Progress;
