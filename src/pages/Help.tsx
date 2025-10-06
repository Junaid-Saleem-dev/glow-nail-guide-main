import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Mail, MessageCircle } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const faqs = [
  {
    question: 'How accurate is the nail health analysis?',
    answer: 'Our AI-powered analysis uses advanced algorithms trained on thousands of nail images to provide accurate assessments. However, results should be used as guidance and not replace professional medical advice.',
  },
  {
    question: 'How often should I scan my nails?',
    answer: 'We recommend scanning your nails once a week to track progress effectively. Daily scans can help maintain your streak and earn badges!',
  },
  {
    question: 'What lighting is best for scanning?',
    answer: 'Natural daylight works best. Avoid harsh direct sunlight or dim lighting. Make sure your nails are clean and polish-free for the most accurate results.',
  },
  {
    question: 'Can I delete my scan history?',
    answer: 'Yes! Go to Settings > Privacy > Manage Data to delete individual scans or clear your entire history.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Absolutely. We use industry-standard encryption and never share your personal data or photos with third parties.',
  },
];

const Help = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon 💌');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/settings')}
      title="Help & Support"
    >
      <div className="px-6 py-8 space-y-8">
        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="glass-card shadow-soft rounded-3xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-2xl font-semibold">Contact Us</h2>
          <div className="glass-card shadow-soft rounded-3xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => window.open('mailto:support@nailhealth.app')}
          >
            <Mail className="w-5 h-5 mr-3 text-primary" />
            <div className="text-left">
              <div className="font-medium">Email Support</div>
              <div className="text-sm text-muted-foreground">support@nailhealth.app</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => toast.info('Live chat coming soon!')}
          >
            <MessageCircle className="w-5 h-5 mr-3 text-secondary" />
            <div className="text-left">
              <div className="font-medium">Live Chat</div>
              <div className="text-sm text-muted-foreground">Available 9am - 5pm EST</div>
            </div>
          </Button>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Help;
