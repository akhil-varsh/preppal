'use client';

import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--foreground)] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Get started with peer-powered mock interviews in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--navaidix-amber)] to-[var(--navaidix-orange)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">Sign Up & Set Preferences</h3>
            <p className="text-gray-600 font-nunito">
              Create your profile and select your domain, skill level, and interview type preferences
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--navaidix-amber)] to-[var(--navaidix-orange)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">Get Matched</h3>
            <p className="text-gray-600 font-nunito">
              Our algorithm matches you with a peer or provides an AI interviewer if no peer is available
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--navaidix-amber)] to-[var(--navaidix-orange)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">Practice & Improve</h3>
            <p className="text-gray-600 font-nunito">
              Conduct mock interviews, receive feedback, and track your progress with gamification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
