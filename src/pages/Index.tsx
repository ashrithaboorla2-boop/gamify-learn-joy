import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ThemeSelection from '@/components/ThemeSelection';
import Dashboard from '@/components/Dashboard';

type AppState = 'hero' | 'theme-selection' | 'dashboard';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('hero');
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const handleGetStarted = () => {
    setCurrentState('theme-selection');
  };

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    setCurrentState('dashboard');
  };

  const handleBack = () => {
    if (currentState === 'theme-selection') {
      setCurrentState('hero');
    } else if (currentState === 'dashboard') {
      setCurrentState('theme-selection');
    }
  };

  return (
    <div className="min-h-screen">
      {currentState === 'hero' && (
        <HeroSection onGetStarted={handleGetStarted} />
      )}
      
      {currentState === 'theme-selection' && (
        <ThemeSelection 
          onThemeSelect={handleThemeSelect} 
          onBack={handleBack}
        />
      )}
      
      {currentState === 'dashboard' && (
        <Dashboard 
          theme={selectedTheme} 
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default Index;
