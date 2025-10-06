import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload as UploadIcon, X } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Upload = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      navigate('/results');
    }, 2000);
  };

  const handleRemove = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <AppLayout
      showBackButton
      onBack={() => navigate('/dashboard')}
      title="Scan Your Nails"
    >
      <div className="px-6 py-8 space-y-6">
        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card shadow-soft rounded-2xl p-6"
        >
          <h2 className="font-heading text-xl font-semibold mb-3">How to Take a Good Photo</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span>✓</span>
              <span>Use natural lighting</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Keep your hands flat and fingers spread</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Capture all fingernails clearly</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Avoid shadows on your nails</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Preview or Upload Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {selectedImage ? (
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={selectedImage}
                alt="Selected hand"
                className="w-full h-96 object-cover"
              />
              <button
                onClick={handleRemove}
                className="absolute top-4 right-4 p-2 bg-destructive text-white rounded-full shadow-lg hover:bg-destructive/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              {/* Hand outline overlay guide */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-64 h-64 opacity-30" viewBox="0 0 200 200" fill="none">
                  <path
                    d="M100 50 L110 70 L115 90 L112 110 L115 130 L110 150 M90 50 L85 70 L82 90 L85 110 L82 130 L85 150"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="glass-card shadow-soft rounded-3xl p-12 text-center border-2 border-dashed border-border">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="font-heading text-xl font-semibold mb-2">No Image Selected</h3>
              <p className="text-muted-foreground mb-6">Choose a method below to get started</p>
            </div>
          )}
        </motion.div>

        {/* Upload Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            onClick={() => cameraInputRef.current?.click()}
            size="lg"
            className="w-full gradient-primary text-white shadow-soft"
          >
            <Camera className="w-5 h-5 mr-2" />
            Take Photo
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            size="lg"
            variant="outline"
            className="w-full"
          >
            <UploadIcon className="w-5 h-5 mr-2" />
            Upload from Gallery
          </Button>

          {selectedImage && (
            <Button
              onClick={handleAnalyze}
              size="lg"
              className="w-full gradient-accent text-white shadow-soft"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                  />
                  Analyzing...
                </>
              ) : (
                'Analyze Photo'
              )}
            </Button>
          )}
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Upload;
