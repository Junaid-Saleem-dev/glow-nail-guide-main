import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import onboarding1 from '@/assets/onboarding-1.png';
import onboarding2 from '@/assets/onboarding-2.png';
import onboarding3 from '@/assets/onboarding-3.png';

const slides = [
  {
    image: onboarding1,
    title: 'Welcome to NailCare AI',
    description: 'Your personal nail health companion. Track, analyze, and improve your nail health with AI-powered insights.'
  },
  {
    image: onboarding2,
    title: 'AI-Powered Analysis',
    description: 'Simply upload a photo of your hands and get instant analysis of your nail health, hydration, and strength.'
  },
  {
    image: onboarding3,
    title: 'Track Your Progress',
    description: 'Monitor improvements over time with detailed progress tracking and personalized care recommendations.'
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-80 object-cover rounded-3xl shadow-soft mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center space-y-4"
            >
              <h1 className="font-heading text-3xl font-bold">
                {slides[currentSlide].title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="px-6 pb-8 space-y-3">
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full gradient-primary text-white font-semibold shadow-soft"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Button>
        
        {currentSlide < slides.length - 1 && (
          <Button
            onClick={handleSkip}
            variant="ghost"
            size="lg"
            className="w-full"
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
