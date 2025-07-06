'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { Home, User, Settings, LogOut, BarChart3 } from 'lucide-react';

interface NavbarProps {
  onAuthClick?: (mode: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const { user, userProfile, logout } = useAuth();

  if (user) {
    // Authenticated Navbar
    return (
      <nav className="glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold font-playfair text-slate-800">
                  PrepPal
                </h1>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/dashboard"
                    className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="/practice"
                    className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Practice
                  </a>
                  <a
                    href="/sessions"
                    className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Sessions
                  </a>
                  <a
                    href="/resources"
                    className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Resources
                  </a>
                </div>
              </div>
            </div>            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="/profile"
                className="flex items-center space-x-2 hover:bg-slate-100 rounded-lg px-2 py-1 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-slate-600" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-slate-700">
                    {userProfile?.name || user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {userProfile?.points || 0} points
                  </p>
                </div>
              </a>              <div className="flex items-center space-x-2">
                <a href="/profile" aria-label="Go to profile and settings">
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-secondary"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </a>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="btn-secondary"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
            <a
              href="/dashboard"
              className="text-slate-700 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="/practice"
              className="text-slate-700 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Practice
            </a>
            <a
              href="/sessions"
              className="text-slate-700 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sessions
            </a>
            <a
              href="/resources"
              className="text-slate-700 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </a>
            <a
              href="/profile"
              className="text-slate-700 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </a>
          </div>
        </div>
      </nav>
    );
  }

  // Unauthenticated Navbar
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold font-playfair text-slate-800">
                PrepPal
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  How It Works
                </a>
                <a
                  href="#about"
                  className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </a>
              </div>
            </div>
          </div>          <div className="flex items-center space-x-4">
            {onAuthClick && (
              <>
                <Button
                  onClick={() => onAuthClick('login')}
                  variant="ghost"
                  className="btn-secondary"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => onAuthClick('signup')}
                  className="btn-primary"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
