'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-footer border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-playfair text-[var(--foreground)] mb-4">
              PrepPal
            </h3>
            <p className="text-gray-600 font-nunito max-w-md">
              Empowering students and professionals with peer-powered mock interview practice. 
              Build confidence, improve skills, and ace your next interview.
            </p>
          </div>
          <div>
            <h4 className="font-semibold font-montserrat text-[var(--foreground)] mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600 font-nunito">
              <li>Features</li>
              <li>Pricing</li>
              <li>How it Works</li>
              <li>Demo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-montserrat text-[var(--foreground)] mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 font-nunito">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center text-gray-600 font-nunito">
          <p>&copy; 2025 PrepPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
