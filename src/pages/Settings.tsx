import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bell, Moon, Globe, HelpCircle, LogOut } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'English',
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success('Settings updated');
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/profile')}
      title="Settings"
    >
      <div className="px-6 py-8 space-y-6">
        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card shadow-soft rounded-3xl p-6 space-y-4"
        >
          <h2 className="font-heading text-xl font-semibold mb-4">Preferences</h2>
          
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Notifications</div>
                <div className="text-sm text-muted-foreground">Get scan reminders</div>
              </div>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={() => toggleSetting('notifications')}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Moon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-medium">Dark Mode</div>
                <div className="text-sm text-muted-foreground">Toggle theme</div>
              </div>
            </div>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={() => toggleSetting('darkMode')}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-medium">Language</div>
                <div className="text-sm text-muted-foreground">{settings.language}</div>
              </div>
            </div>
            <span className="text-muted-foreground">→</span>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <Button
            onClick={() => navigate('/help')}
            variant="outline"
            className="w-full justify-start h-auto p-4"
          >
            <HelpCircle className="w-5 h-5 mr-3" />
            <span>Help & Support</span>
          </Button>

          <Button
            onClick={() => {
              toast.success('Logged out successfully');
              navigate('/onboarding');
            }}
            variant="outline"
            className="w-full justify-start h-auto p-4 text-destructive hover:text-destructive"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log Out</span>
          </Button>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-muted-foreground pt-4"
        >
          <p>Nail Health App v1.0.0</p>
          <p className="mt-1">Made with 💅 and care</p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Settings;
