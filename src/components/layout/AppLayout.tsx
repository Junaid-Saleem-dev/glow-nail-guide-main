import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AppLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
}

export const AppLayout = ({ children, showBackButton, onBack, title }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-md mx-auto"
      >
        {(showBackButton || title) && (
          <header className="sticky top-0 z-50 glass-card border-b px-6 py-4">
            <div className="flex items-center gap-4">
              {showBackButton && onBack && (
                <button
                  onClick={onBack}
                  className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {title && <h1 className="font-heading text-xl font-semibold">{title}</h1>}
            </div>
          </header>
        )}
        <main className="pb-20">{children}</main>
      </motion.div>
    </div>
  );
};
