import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Sparkles, Zap, Code, Gamepad2, Heart } from 'lucide-react';

const themes = [
  {
    id: 'marvel',
    name: 'Marvel Heroes',
    description: 'Learn with superhero powers and epic adventures',
    icon: Zap,
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    features: ['Hero achievements', 'Power-up rewards', 'Comic-style interface']
  },
  {
    id: 'anime',
    name: 'Anime World',
    description: 'Kawaii characters and colorful learning journey',
    icon: Sparkles,
    color: 'from-pink-500 to-purple-600',
    bgColor: 'bg-pink-50',
    features: ['Cute avatars', 'Magical rewards', 'Vibrant animations']
  },
  {
    id: 'tech',
    name: 'Tech Future',
    description: 'Code, innovate, and build the future',
    icon: Code,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    features: ['Code challenges', 'Tech badges', 'Futuristic UI']
  },
  {
    id: 'sports',
    name: 'Sports Arena',
    description: 'Train your mind like an athlete',
    icon: Gamepad2,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    features: ['Team challenges', 'Performance tracking', 'Victory celebrations']
  },
  {
    id: 'wellness',
    name: 'Mindful Learning',
    description: 'Balance knowledge with inner peace',
    icon: Heart,
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    features: ['Meditation breaks', 'Wellness tracking', 'Peaceful interface']
  }
];

interface ThemeSelectionProps {
  onThemeSelect: (theme: string) => void;
  onBack: () => void;
}

const ThemeSelection = ({ onThemeSelect, onBack }: ThemeSelectionProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [ageGroup, setAgeGroup] = useState<string>('');

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const handleContinue = () => {
    if (selectedTheme && ageGroup) {
      onThemeSelect(selectedTheme);
    }
  };

  return (
    <section className="min-h-screen bg-background-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              Choose Your Learning Style
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Select your age group and preferred theme to personalize your GamifyEd experience
            </p>
          </div>

          {/* Age Group Selection */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-center mb-6">First, tell us your age group</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'child', label: '5-12 years', desc: 'Elementary' },
                { id: 'teen', label: '13-17 years', desc: 'High School' },
                { id: 'adult', label: '18+ years', desc: 'College & Beyond' }
              ].map((age) => (
                <Button
                  key={age.id}
                  variant={ageGroup === age.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setAgeGroup(age.id)}
                  className={`px-8 py-4 transition-all duration-300 ${
                    ageGroup === age.id 
                      ? 'bg-gradient-primary text-primary-foreground shadow-lg transform scale-105' 
                      : 'hover:border-primary/40 hover:bg-primary/5'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{age.label}</div>
                    <div className="text-sm opacity-80">{age.desc}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Selection */}
          {ageGroup && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-center mb-8">Now choose your theme</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {themes.map((theme, index) => {
                  const Icon = theme.icon;
                  return (
                    <Card
                      key={theme.id}
                      className={`theme-card cursor-pointer transition-all duration-300 ${
                        selectedTheme === theme.id ? 'active ring-4 ring-primary/30' : ''
                      }`}
                      onClick={() => handleThemeSelect(theme.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative">
                        {selectedTheme === theme.id && (
                          <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-primary animate-bounce-in" />
                        )}
                        
                        <div className={`w-16 h-16 bg-gradient-to-br ${theme.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-center mb-2">{theme.name}</h4>
                        <p className="text-foreground-muted text-center mb-4">{theme.description}</p>
                        
                        <div className="space-y-2">
                          {theme.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-foreground-muted">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onBack}
                  className="px-8 py-4"
                >
                  Back
                </Button>
                <Button 
                  size="lg"
                  onClick={handleContinue}
                  disabled={!selectedTheme || !ageGroup}
                  className="bg-gradient-primary text-primary-foreground hover-glow px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThemeSelection;