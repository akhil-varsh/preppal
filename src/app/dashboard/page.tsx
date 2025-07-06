'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Users, 
  Video, 
  Award, 
  Calendar, 
  BookOpen, 
  TrendingUp,
  Clock,
  Star,
  Target,
  BarChart3
} from 'lucide-react';

export default function Dashboard() {
  const { user, userProfile } = useAuth();
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        
        {/* Dashboard Content */}
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-playfair text-slate-800 mb-2">
              Welcome back, {userProfile?.name || user?.displayName?.split(' ')[0] || 'there'}!
            </h2>
            <p className="text-slate-600 font-nunito">
              Ready to ace your next interview? Let's get started with your practice sessions.
            </p>
          </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Total Sessions</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Success Rate</p>
                  <p className="text-2xl font-bold text-slate-900">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Practice Partners</p>
                  <p className="text-2xl font-bold text-slate-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Points Earned</p>
                  <p className="text-2xl font-bold text-slate-900">{userProfile?.points || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="btn-primary h-16 flex flex-col items-center justify-center space-y-2">
                    <Video className="h-6 w-6" />
                    <span>Start Mock Interview</span>
                  </Button>
                  <Button className="btn-secondary h-16 flex flex-col items-center justify-center space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Find Practice Partner</span>
                  </Button>
                  <Button className="btn-secondary h-16 flex flex-col items-center justify-center space-y-2">
                    <BookOpen className="h-6 w-6" />
                    <span>Study Resources</span>
                  </Button>
                  <Button className="btn-secondary h-16 flex flex-col items-center justify-center space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span>Schedule Session</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Video className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">
                        Completed mock interview with Sarah
                      </p>
                      <p className="text-xs text-slate-500">2 hours ago</p>
                    </div>
                    <div className="text-green-600 text-sm font-medium">+15 points</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">
                        Reviewed JavaScript concepts
                      </p>
                      <p className="text-xs text-slate-500">1 day ago</p>
                    </div>
                    <div className="text-blue-600 text-sm font-medium">+5 points</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">
                        Connected with new practice partner
                      </p>
                      <p className="text-xs text-slate-500">3 days ago</p>
                    </div>
                    <div className="text-purple-600 text-sm font-medium">+10 points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <div className="p-1 bg-amber-100 rounded">
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">Frontend Interview</p>
                      <p className="text-xs text-slate-500">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="p-1 bg-blue-100 rounded">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">System Design</p>
                      <p className="text-xs text-slate-500">Friday, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">Progress This Week</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Interview Practice</span>
                    <span className="text-sm font-medium text-slate-900">4/5 sessions</span>
                  </div>                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Study Time</span>
                    <span className="text-sm font-medium text-slate-900">12/15 hours</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Weekly Goal</span>
                    <span className="text-sm font-medium text-slate-900">85% complete</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">Today's Tip</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Target className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      Practice the STAR Method
                    </p>
                    <p className="text-xs text-slate-600">
                      Structure your behavioral interview answers using Situation, Task, Action, and Result for more compelling responses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
}
