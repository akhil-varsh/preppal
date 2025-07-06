'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LandingPage } from '@/components/landing/LandingPage';
import { AuthPage } from '@/components/auth/AuthPage';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const handleToggleMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleBackToHome = () => {
    setShowAuth(false);
  };

  if (showAuth) {
    return (
      <AuthPage
        authMode={authMode}
        onToggleMode={handleToggleMode}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return <LandingPage onAuthClick={handleAuthClick} />;
}
