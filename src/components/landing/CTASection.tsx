'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-24 bg-gradient-cta">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-6">
          Ready to Ace Your Next Interview?
        </h2>
        <p className="text-xl text-white/90 font-nunito mb-8 max-w-2xl mx-auto">
          Join thousands of students and professionals who are already improving their interview skills with PrepPal
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={onGetStarted}
          className="text-lg px-8 py-4 bg-[var(--navaidix-white)] text-[var(--navaidix-slate)] hover:bg-[var(--navaidix-light-slate)] shadow-lg"
        >
          Get Started for Free
        </Button>
      </div>
    </section>
  );
};
