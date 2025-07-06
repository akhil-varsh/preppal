'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

interface LandingPageProps {
  onAuthClick: (mode: 'login' | 'signup') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onAuthClick }) => {
  const handleGetStarted = () => {
    onAuthClick('signup');
  };

  return (
    <div className="min-h-screen">
      <Navbar onAuthClick={onAuthClick} />
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection onGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
};
