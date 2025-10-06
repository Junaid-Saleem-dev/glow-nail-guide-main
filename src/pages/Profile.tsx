import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Edit, Settings, Award } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const navigate = useNavigate();
  const [profile] = useState({
    name: 'Emma Rose',
    email: 'emma@example.com',
    avatar: '',
    memberSince: 'January 2025',
    concerns: ['Brittle nails', 'Slow growth', 'Yellowing'],
  });

  return (
    <AppLayout>
      <div className="px-6 py-8 pb-32 space-y-6">
        {/* Header with Settings */}
        <div className="flex justify-between items-center">
          <h1 className="font-heading text-3xl font-bold">Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/settings')}
            className="rounded-full"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card shadow-soft rounded-3xl p-8 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-24 h-24 border-4 border-primary/20">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white text-2xl font-heading">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="font-heading text-2xl font-semibold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.email}</p>
              <p className="text-sm text-muted-foreground mt-1">Member since {profile.memberSince}</p>
            </div>

            <Button
              onClick={() => navigate('/profile/edit')}
              className="gradient-primary text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="glass-card shadow-soft rounded-2xl p-4 text-center">
            <div className="text-3xl font-heading font-bold text-primary">24</div>
            <div className="text-xs text-muted-foreground mt-1">Scans</div>
          </div>
          <div className="glass-card shadow-soft rounded-2xl p-4 text-center">
            <div className="text-3xl font-heading font-bold text-secondary">12</div>
            <div className="text-xs text-muted-foreground mt-1">Badges</div>
          </div>
          <div className="glass-card shadow-soft rounded-2xl p-4 text-center">
            <div className="text-3xl font-heading font-bold text-accent">7</div>
            <div className="text-xs text-muted-foreground mt-1">Day Streak</div>
          </div>
        </motion.div>

        {/* Nail Concerns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card shadow-soft rounded-3xl p-6"
        >
          <h3 className="font-heading text-xl font-semibold mb-4">Nail Concerns</h3>
          <div className="flex flex-wrap gap-2">
            {profile.concerns.map((concern) => (
              <Badge key={concern} variant="secondary" className="px-4 py-2 text-sm">
                {concern}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <button
            onClick={() => navigate('/achievements')}
            className="w-full glass-card shadow-soft rounded-2xl p-4 flex items-center justify-between hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">My Achievements</span>
            </div>
            <span className="text-muted-foreground">→</span>
          </button>
        </motion.div>
      </div>
      <BottomNav />
    </AppLayout>
  );
};

export default Profile;
