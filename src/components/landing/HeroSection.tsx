'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[var(--navaidix-orange)] mb-6 animate-fade-in-up">
            Ace Your Next Interview with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--navaidix-light-slate)] to-[var(--navaidix-white)]">
              Peer Practice
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-nunito max-w-3xl mx-auto mb-8 animate-fade-in-up-delayed-1">
            Connect with peers for dynamic mock interview practice. Build confidence, 
            improve skills, and get ready for your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-2">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="text-lg px-8 py-4 btn-primary"
            >
              Start Practicing Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 btn-secondary"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 floating-element rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 floating-element-secondary rounded-full animate-float-delayed-1"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 floating-element rounded-full animate-float-delayed-2"></div>
    </section>
  );
};
