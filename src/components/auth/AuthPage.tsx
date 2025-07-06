'use client';

import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';

interface AuthPageProps {
  authMode: 'login' | 'signup';
  onToggleMode: () => void;
  onBackToHome: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ 
  authMode, 
  onToggleMode, 
  onBackToHome 
}) => {
  return (
    <div className="min-h-screen bg-slate-auth-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-playfair text-white mb-2 drop-shadow-lg">
            PrepPal
          </h1>
          <p className="text-slate-200 font-nunito text-lg drop-shadow">
            Peer-Powered Mock Interviews
          </p>
        </div>
        
        {authMode === 'login' ? (
          <LoginForm onToggleMode={onToggleMode} />
        ) : (
          <SignupForm onToggleMode={onToggleMode} />
        )}
        
        <div className="text-center mt-6">
          <button
            onClick={onBackToHome}
            className="text-slate-300 hover:text-white transition-colors duration-200 font-nunito text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
