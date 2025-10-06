import { motion } from 'framer-motion';

interface HealthScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export const HealthScoreRing = ({ score, size = 'lg' }: HealthScoreRingProps) => {
  const sizes = {
    sm: { ring: 80, stroke: 6, text: 'text-xl' },
    md: { ring: 120, stroke: 8, text: 'text-3xl' },
    lg: { ring: 160, stroke: 10, text: 'text-5xl' }
  };

  const { ring, stroke, text } = sizes[size];
  const radius = (ring - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'hsl(var(--primary))';
    if (score >= 60) return 'hsl(var(--accent))';
    return 'hsl(var(--destructive))';
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={ring} height={ring} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={ring / 2}
          cy={ring / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={ring / 2}
          cy={ring / 2}
          r={radius}
          stroke={getScoreColor(score)}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className={`${text} font-bold font-heading`}>{score}</span>
        <span className="text-sm text-muted-foreground">Health Score</span>
      </motion.div>
    </div>
  );
};
