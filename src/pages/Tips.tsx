import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Droplets, Shield, Sun, Heart, ShoppingBag } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { BottomNav } from '@/components/BottomNav';
import { Badge } from '@/components/ui/badge';

interface TipCard {
  icon: typeof Heart;
  category: string;
  title: string;
  description: string;
  gradient: 'primary' | 'accent' | 'gold';
}

const tips: TipCard[] = [
  {
    icon: Heart,
    category: 'Daily Care',
    title: 'Moisturize Daily',
    description: 'Apply cuticle oil every night before bed to keep nails hydrated and prevent brittleness.',
    gradient: 'accent'
  },
  {
    icon: Sparkles,
    category: 'Beauty',
    title: 'Gentle Filing',
    description: 'Always file in one direction to prevent nail splitting. Use a fine-grit file for best results.',
    gradient: 'accent'
  },
  {
    icon: Shield,
    category: 'Protection',
    title: 'Wear Gloves',
    description: 'Protect your nails when cleaning or doing dishes. Harsh chemicals can damage nail structure.',
    gradient: 'accent'
  },
  {
    icon: Sun,
    category: 'Health',
    title: 'Vitamin D',
    description: 'Get enough sunlight! Vitamin D promotes healthy nail growth and prevents brittleness.',
    gradient: 'accent'
  },
  {
    icon: Droplets,
    category: 'Maintenance',
    title: 'Regular Trims',
    description: 'Trim nails every 2 weeks to maintain strength and prevent breakage at the tips.',
    gradient: 'accent'
  },
  {
    icon: ShoppingBag,
    category: 'Nutrition',
    title: 'Biotin Rich Foods',
    description: 'Include eggs, nuts, and avocados in your diet. Biotin strengthens nails from within.',
    gradient: 'accent'
  }
];

const Tips = () => {
  const navigate = useNavigate();

  const gradients = {
    primary: 'gradient-primary',
    accent: 'gradient-accent',
    gold: 'gradient-gold'
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/dashboard')}
      title="Care Tips & Resources"
    >
      <div className="px-6 py-8 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="font-heading text-3xl font-bold">Beauty & Health Tips 💅</h1>
          <p className="text-muted-foreground">Expert advice for gorgeous, healthy nails</p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid gap-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${gradients[tip.gradient]} rounded-2xl p-6 shadow-soft`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-white/70 mb-1 uppercase tracking-wider">
                      {tip.category}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Did You Know Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card shadow-soft rounded-2xl p-6 border-2 border-primary/20"
        >
          <h3 className="font-heading text-xl font-semibold mb-3">💡 Did You Know?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your nails grow about 3mm per month, and fingernails grow faster than toenails! 
            A healthy diet rich in protein, biotin, and omega-3s can significantly improve nail growth and strength.
          </p>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card shadow-soft rounded-2xl p-6"
        >
          <h3 className="font-heading text-xl font-semibold mb-4">Recommended Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Jojoba Cuticle Oil', benefit: 'Deep hydration' },
              { name: 'Glass Nail File', benefit: 'Gentle filing' },
              { name: 'Biotin Supplement', benefit: 'Stronger growth' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-muted-foreground">{product.benefit}</div>
                </div>
                <div className="text-primary">→</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </AppLayout>
  );
};

export default Tips;
