'use client';

import React, { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Calendar,
  Clock,
  Video,
  User,
  Star,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Download,
  MessageSquare,
  PlayCircle
} from 'lucide-react';

interface Session {
  id: string;
  partnerName: string;
  partnerAvatar: string;
  date: string;
  time: string;
  duration: number;
  type: 'Technical' | 'Behavioral' | 'System Design' | 'Case Study';
  status: 'completed' | 'upcoming' | 'cancelled';
  rating?: number;
  feedback?: string;
  domain: string;
}

const mockSessions: Session[] = [
  {
    id: '1',
    partnerName: 'Sarah Chen',
    partnerAvatar: 'SC',
    date: '2025-06-18',
    time: '14:00',
    duration: 60,
    type: 'Technical',
    status: 'upcoming',
    domain: 'Frontend Development'
  },
  {
    id: '2',
    partnerName: 'Alex Rodriguez',
    partnerAvatar: 'AR',
    date: '2025-06-15',
    time: '10:30',
    duration: 45,
    type: 'Behavioral',
    status: 'completed',
    rating: 4.8,
    feedback: 'Great questions and excellent feedback!',
    domain: 'Data Science'
  },
  {
    id: '3',
    partnerName: 'Priya Sharma',
    partnerAvatar: 'PS',
    date: '2025-06-14',
    time: '16:00',
    duration: 90,
    type: 'System Design',
    status: 'completed',
    rating: 4.9,
    feedback: 'Very thorough and helpful session.',
    domain: 'Backend Development'
  },
  {
    id: '4',
    partnerName: 'David Kim',
    partnerAvatar: 'DK',
    date: '2025-06-12',
    time: '11:00',
    duration: 60,
    type: 'Case Study',
    status: 'cancelled',
    domain: 'Product Management'
  },
  {
    id: '5',
    partnerName: 'Emily Johnson',
    partnerAvatar: 'EJ',
    date: '2025-06-10',
    time: '15:30',
    duration: 45,
    type: 'Behavioral',
    status: 'completed',
    rating: 4.7,
    feedback: 'Good practice session with realistic scenarios.',
    domain: 'UI/UX Design'
  }
];

export default function Sessions() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

  const filteredSessions = mockSessions.filter(session => {
    if (filter === 'all') return true;
    return session.status === filter;
  });

  const getStatusIcon = (status: Session['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'upcoming':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusColor = (status: Session['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-playfair text-slate-800 mb-2">
              Interview Sessions
            </h1>
            <p className="text-slate-600 font-nunito">
              Track your practice sessions and schedule new ones
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {mockSessions.filter(s => s.status === 'completed').length}
                </div>
                <div className="text-sm text-slate-600">Completed</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {mockSessions.filter(s => s.status === 'upcoming').length}
                </div>
                <div className="text-sm text-slate-600">Upcoming</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {(mockSessions.filter(s => s.rating).reduce((sum, s) => sum + (s.rating || 0), 0) / mockSessions.filter(s => s.rating).length).toFixed(1)}
                </div>
                <div className="text-sm text-slate-600">Avg Rating</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {mockSessions.reduce((sum, s) => sum + s.duration, 0)}
                </div>
                <div className="text-sm text-slate-600">Total Minutes</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6">
            <div className="flex space-x-4 border-b border-slate-200">
              {[
                { key: 'all', label: 'All Sessions' },
                { key: 'upcoming', label: 'Upcoming' },
                { key: 'completed', label: 'Completed' },
                { key: 'cancelled', label: 'Cancelled' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    filter === tab.key
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sessions List */}
          <div className="space-y-4">
            {filteredSessions.map(session => (
              <Card key={session.id} className="glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        {session.partnerAvatar}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-slate-900">{session.partnerName}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(session.status)}`}>
                            {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(session.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{session.time} ({session.duration}min)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Video className="w-4 h-4" />
                            <span>{session.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{session.domain}</span>
                          </div>
                        </div>

                        {session.rating && (
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{session.rating}</span>
                            </div>
                            {session.feedback && (
                              <p className="text-sm text-slate-600 italic">"{session.feedback}"</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {getStatusIcon(session.status)}
                      
                      {session.status === 'upcoming' && (
                        <Button size="sm" className="btn-primary">
                          <PlayCircle className="w-4 h-4 mr-1" />
                          Join
                        </Button>
                      )}
                      
                      {session.status === 'completed' && (
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="btn-secondary">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="btn-secondary">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                      
                      <Button size="sm" variant="outline" className="btn-secondary">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No sessions found</h3>
              <p className="text-slate-600 mb-4">
                {filter === 'all' 
                  ? "You haven't scheduled any sessions yet." 
                  : `No ${filter} sessions found.`}
              </p>
              <Button className="btn-primary">
                Schedule New Session
              </Button>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
