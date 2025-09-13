import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, Heart, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-wellness/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-achievement/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-wellness bg-clip-text text-transparent leading-tight">
                GamifyEd
              </h1>
              <p className="text-xl lg:text-2xl text-foreground-muted font-medium">
                Transform Learning Into Adventure
              </p>
            </div>

            <p className="text-lg text-foreground-muted max-w-2xl">
              Personalized learning platform that combines education, wellness, and gamification. 
              Upload documents, get AI-powered insights, track progress, and grow with themes you love.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-card/50 rounded-2xl backdrop-blur-sm hover-lift">
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium">Smart Learning</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 rounded-2xl backdrop-blur-sm hover-lift">
                <Brain className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium">AI Assistant</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 rounded-2xl backdrop-blur-sm hover-lift">
                <Heart className="w-8 h-8 text-wellness mb-2" />
                <span className="text-sm font-medium">Wellness</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 rounded-2xl backdrop-blur-sm hover-lift">
                <Trophy className="w-8 h-8 text-achievement mb-2" />
                <span className="text-sm font-medium">Gamified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover-glow px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={onGetStarted}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Students learning with GamifyEd platform" 
                className="w-full h-auto rounded-3xl shadow-2xl hover-lift"
              />
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;