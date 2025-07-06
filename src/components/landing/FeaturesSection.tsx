'use client';

import React from 'react';
import { FeatureCard } from '@/components/landing/FeatureCard';
import { Users, Video, Award, Brain, Globe, Star } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--foreground)] mb-4">
            Why Choose PrepPal?
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Our peer-to-peer platform offers unique features designed to maximize your interview preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Peer Matching"
            description="Get matched with peers based on your domain, skill level, and interview type for targeted practice"
          />
          <FeatureCard
            icon={<Video className="w-12 h-12" />}
            title="Live Video Sessions"
            description="Practice with high-quality video calls powered by Stream's technology for realistic interview experience"
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12" />}
            title="AI Fallback"
            description="No peer available? Practice with our AI interviewer that adapts to your domain and skill level"
          />
          <FeatureCard
            icon={<Award className="w-12 h-12" />}
            title="Gamification"
            description="Earn points, unlock achievements, and compete on leaderboards to stay motivated"
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12" />}
            title="Cross-College Network"
            description="Connect with students and professionals from different colleges to expand your network"
          />
          <FeatureCard
            icon={<Star className="w-12 h-12" />}
            title="Expert Reviews"
            description="Get professional resume reviews and mentorship from industry experts (coming soon)"
          />
        </div>
      </div>
    </section>
  );
};
