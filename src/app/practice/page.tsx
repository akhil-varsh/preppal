'use client';

import React, { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Users, 
  Clock, 
  Video, 
  Filter,
  Search,
  Play,
  User,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Palette,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

interface FilterState {
  domain: string;
  skillLevel: string;
  interviewType: string;
  duration: string;
  college: string;
}

interface PracticePartner {
  id: string;
  name: string;
  avatar: string;
  domain: string;
  skillLevel: string;
  college: string;
  rating: number;
  completedSessions: number;
  isOnline: boolean;
  lastSeen: string;
  interviewTypes: string[];
}

const mockPartners: PracticePartner[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'SC',
    domain: 'Frontend Development',
    skillLevel: 'Intermediate',
    college: 'Stanford University',
    rating: 4.8,
    completedSessions: 45,
    isOnline: true,
    lastSeen: 'now',
    interviewTypes: ['Technical', 'System Design']
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    avatar: 'AR',
    domain: 'Data Science',
    skillLevel: 'Advanced',
    college: 'MIT',
    rating: 4.9,
    completedSessions: 78,
    isOnline: true,
    lastSeen: 'now',
    interviewTypes: ['Technical', 'Behavioral']
  },
  {
    id: '3',
    name: 'Priya Sharma',
    avatar: 'PS',
    domain: 'Backend Development',
    skillLevel: 'Expert',
    college: 'IIT Delhi',
    rating: 4.7,
    completedSessions: 92,
    isOnline: false,
    lastSeen: '5 min ago',
    interviewTypes: ['Technical', 'System Design', 'Behavioral']
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'DK',
    domain: 'Product Management',
    skillLevel: 'Intermediate',
    college: 'UC Berkeley',
    rating: 4.6,
    completedSessions: 34,
    isOnline: true,
    lastSeen: 'now',
    interviewTypes: ['Behavioral', 'Case Study']
  },
  {
    id: '5',
    name: 'Emily Johnson',
    avatar: 'EJ',
    domain: 'UI/UX Design',
    skillLevel: 'Advanced',
    college: 'Carnegie Mellon',
    rating: 4.8,
    completedSessions: 56,
    isOnline: false,
    lastSeen: '2 hours ago',
    interviewTypes: ['Portfolio Review', 'Behavioral']
  },
  {
    id: '6',
    name: 'Marcus Thompson',
    avatar: 'MT',
    domain: 'DevOps',
    skillLevel: 'Expert',
    college: 'Georgia Tech',
    rating: 4.9,
    completedSessions: 67,
    isOnline: true,
    lastSeen: 'now',
    interviewTypes: ['Technical', 'System Design']
  }
];

const domains = [
  { name: 'Frontend Development', icon: <Code className="w-4 h-4" />, color: 'bg-blue-500' },
  { name: 'Backend Development', icon: <Shield className="w-4 h-4" />, color: 'bg-green-500' },
  { name: 'Data Science', icon: <BarChart3 className="w-4 h-4" />, color: 'bg-purple-500' },
  { name: 'Product Management', icon: <Briefcase className="w-4 h-4" />, color: 'bg-orange-500' },
  { name: 'UI/UX Design', icon: <Palette className="w-4 h-4" />, color: 'bg-pink-500' },
  { name: 'DevOps', icon: <Zap className="w-4 h-4" />, color: 'bg-yellow-500' },
  { name: 'Machine Learning', icon: <Brain className="w-4 h-4" />, color: 'bg-indigo-500' }
];

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const interviewTypes = ['Technical', 'Behavioral', 'System Design', 'Case Study', 'Portfolio Review'];

export default function Practice() {
  const [filters, setFilters] = useState<FilterState>({
    domain: '',
    skillLevel: '',
    interviewType: '',
    duration: '',
    college: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPartners = mockPartners.filter(partner => {
    if (filters.domain && partner.domain !== filters.domain) return false;
    if (filters.skillLevel && partner.skillLevel !== filters.skillLevel) return false;
    if (filters.interviewType && !partner.interviewTypes.includes(filters.interviewType)) return false;
    if (searchTerm && !partner.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-playfair text-slate-800 mb-2">
              Find Practice Partners
            </h1>
            <p className="text-slate-600 font-nunito">
              Connect with peers for mock interview practice sessions
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="btn-secondary flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </Button>
            </div>

            {/* Filter Pills */}
            {showFilters && (
              <Card className="glass-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {/* Domain Filter */}                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Domain</label>
                    <select
                      value={filters.domain}
                      onChange={(e) => handleFilterChange('domain', e.target.value)}
                      aria-label="Select domain"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">All Domains</option>
                      {domains.map(domain => (
                        <option key={domain.name} value={domain.name}>{domain.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Skill Level Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Skill Level</label>
                    <select
                      value={filters.skillLevel}
                      onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                      aria-label="Select skill level"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">All Levels</option>
                      {skillLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  {/* Interview Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Interview Type</label>
                    <select
                      value={filters.interviewType}
                      onChange={(e) => handleFilterChange('interviewType', e.target.value)}
                      aria-label="Select interview type"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">All Types</option>
                      {interviewTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Duration Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
                    <select
                      value={filters.duration}
                      onChange={(e) => handleFilterChange('duration', e.target.value)}
                      aria-label="Select duration"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Any Duration</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="90">1.5 hours</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <Button
                      onClick={() => setFilters({ domain: '', skillLevel: '', interviewType: '', duration: '', college: '' })}
                      variant="outline"
                      className="w-full"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Available Partners */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-montserrat text-slate-800">
                  Available Partners ({filteredPartners.length})
                </h2>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Online Now</span>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {filteredPartners.map(partner => (
                  <Card key={partner.id} className="glass-card hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                              {partner.avatar}
                            </div>
                            {partner.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-slate-600">{partner.rating}</span>
                              </div>
                            </div>
                            
                            <div className="space-y-1 text-sm text-slate-600">
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-3 h-3" />
                                <span>{partner.domain}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <GraduationCap className="w-3 h-3" />
                                <span>{partner.college}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-3 h-3" />
                                <span>{partner.completedSessions} sessions</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mt-2">
                              {partner.interviewTypes.map(type => (
                                <span
                                  key={type}
                                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full"
                                >
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            partner.isOnline 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {partner.isOnline ? 'Online' : partner.lastSeen}
                          </span>
                          
                          <Button
                            size="sm"
                            className="btn-primary flex items-center space-x-1"
                          >
                            <Video className="w-4 h-4" />
                            <span>Connect</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Quick Options & AI Fallback */}
            <div className="space-y-6">
              {/* Quick Practice Options */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-800">Quick Practice</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full btn-primary flex items-center justify-center space-x-2 py-3">
                    <Play className="w-5 h-5" />
                    <span>Quick Match (Any Domain)</span>
                  </Button>
                  
                  <Button variant="outline" className="w-full btn-secondary flex items-center justify-center space-x-2 py-3">
                    <Brain className="w-5 h-5" />
                    <span>Practice with AI</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Domain Balls Interface */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-800">Choose Your Domain</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {domains.map(domain => (
                      <div
                        key={domain.name}
                        onClick={() => handleFilterChange('domain', domain.name)}
                        className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                          filters.domain === domain.name 
                            ? 'ring-2 ring-orange-500 bg-orange-50' 
                            : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-12 h-12 ${domain.color} rounded-full flex items-center justify-center text-white mb-2 mx-auto`}>
                          {domain.icon}
                        </div>
                        <h3 className="text-sm font-medium text-center text-slate-800">
                          {domain.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sessions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-800">Recent Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { partner: 'Sarah Chen', type: 'Technical', rating: 4.8, time: '2 hours ago' },
                      { partner: 'Alex Rodriguez', type: 'Behavioral', rating: 4.9, time: '1 day ago' },
                      { partner: 'Priya Sharma', type: 'System Design', rating: 4.7, time: '3 days ago' }
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{session.partner}</p>
                          <p className="text-xs text-slate-600">{session.type} • {session.time}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-slate-600">{session.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
