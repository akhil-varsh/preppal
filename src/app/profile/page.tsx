'use client';

import React, { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User,
  Mail,
  School,
  Briefcase,
  Star,
  Edit3,
  Save,
  Camera,
  Bell,
  Shield,
  Palette,
  Globe,
  Award,
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';

interface ProfileData {
  name: string;
  email: string;
  college: string;
  domain: string;
  skillLevel: string;
  bio: string;
  interviewTypes: string[];
  availability: string[];
}

export default function Profile() {
  const { user, userProfile, updateUserProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'privacy'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  
  const [profileData, setProfileData] = useState<ProfileData>({
    name: userProfile?.name || user?.displayName || '',
    email: user?.email || '',
    college: userProfile?.college || '',
    domain: userProfile?.domain || '',
    skillLevel: userProfile?.skillLevel || 'Intermediate',
    bio: userProfile?.bio || '',
    interviewTypes: userProfile?.interviewTypes || [],
    availability: userProfile?.availability || []
  });

  // Update profile data when userProfile changes
  React.useEffect(() => {
    if (userProfile) {
      setProfileData({
        name: userProfile.name || user?.displayName || '',
        email: user?.email || '',
        college: userProfile.college || '',
        domain: userProfile.domain || '',
        skillLevel: userProfile.skillLevel || 'Intermediate',
        bio: userProfile.bio || '',
        interviewTypes: userProfile.interviewTypes || [],
        availability: userProfile.availability || []
      });
    }
  }, [userProfile, user]);

  const handleInputChange = (field: keyof ProfileData, value: string | string[]) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      await updateUserProfile({
        name: profileData.name,
        college: profileData.college,
        domain: profileData.domain,
        skillLevel: profileData.skillLevel,
        bio: profileData.bio,
        interviewTypes: profileData.interviewTypes,
        availability: profileData.availability
      });
      
      setIsEditing(false);
      setSaveMessage('Profile updated successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      setSaveMessage('Error saving profile. Please try again.');
      setTimeout(() => setSaveMessage(''), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const stats = [
    { label: 'Total Sessions', value: '12', icon: Calendar, color: 'text-blue-600' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
    { label: 'Points Earned', value: userProfile?.points || '0', icon: Award, color: 'text-purple-600' },
    { label: 'Success Rate', value: '87%', icon: Target, color: 'text-green-600' }
  ];

  const domains = [
    'Frontend Development', 'Backend Development', 'Full Stack Development',
    'Data Science', 'Machine Learning', 'DevOps', 'Mobile Development',
    'Product Management', 'UI/UX Design', 'Data Analytics'
  ];

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const interviewTypes = ['Technical', 'Behavioral', 'System Design', 'Case Study', 'Portfolio Review'];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-playfair text-slate-800 mb-2">
              Profile & Settings
            </h1>
            <p className="text-slate-600 font-nunito">
              Manage your profile information and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-card">
                <CardContent className="p-6">
                  {/* Profile Summary */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                        {profileData.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>                      <button 
                        aria-label="Change profile picture"
                        className="absolute bottom-0 right-0 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    </div>
                    <h3 className="font-semibold text-slate-900">{profileData.name}</h3>
                    <p className="text-sm text-slate-600">{profileData.domain}</p>
                    <p className="text-xs text-slate-500">{profileData.college}</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    {stats.map(stat => (
                      <div key={stat.label} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <stat.icon className={`w-4 h-4 ${stat.color}`} />
                          <span className="text-sm text-slate-600">{stat.label}</span>
                        </div>
                        <span className="font-semibold text-slate-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card className="glass-card mt-6">
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {[
                      { key: 'profile', label: 'Profile Info', icon: User },
                      { key: 'preferences', label: 'Preferences', icon: Bell },
                      { key: 'privacy', label: 'Privacy & Security', icon: Shield }
                    ].map(item => (
                      <button
                        key={item.key}
                        onClick={() => setActiveTab(item.key as any)}
                        className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                          activeTab === item.key
                            ? 'bg-orange-100 text-orange-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <Card className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      Profile Information
                    </CardTitle>
                    <Button
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                      className={isEditing ? 'btn-primary' : 'btn-secondary'}
                      size="sm"
                    >
                      {isEditing ? (
                        <>
                          <Save className="w-4 h-4 mr-1" />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit3 className="w-4 h-4 mr-1" />
                          Edit
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          value={profileData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          disabled={!isEditing}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <Input
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={true}
                          className="w-full bg-slate-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          College/University
                        </label>
                        <Input
                          value={profileData.college}
                          onChange={(e) => handleInputChange('college', e.target.value)}
                          disabled={!isEditing}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Domain
                        </label>
                        <select
                          value={profileData.domain}
                          onChange={(e) => handleInputChange('domain', e.target.value)}
                          disabled={!isEditing}
                          aria-label="Select domain"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-slate-50"
                        >
                          {domains.map(domain => (
                            <option key={domain} value={domain}>{domain}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Skill Level
                        </label>
                        <select
                          value={profileData.skillLevel}
                          onChange={(e) => handleInputChange('skillLevel', e.target.value)}
                          disabled={!isEditing}
                          aria-label="Select skill level"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-slate-50"
                        >
                          {skillLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-slate-50 resize-none"
                        placeholder="Tell others about yourself..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Interview Types You're Interested In
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {interviewTypes.map(type => (
                          <label key={type} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={profileData.interviewTypes.includes(type)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  handleInputChange('interviewTypes', [...profileData.interviewTypes, type]);
                                } else {
                                  handleInputChange('interviewTypes', profileData.interviewTypes.filter(t => t !== type));
                                }
                              }}
                              disabled={!isEditing}
                              className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="text-sm text-slate-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'preferences' && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        {[
                          'Email notifications for new session requests',
                          'Push notifications for upcoming sessions',
                          'Weekly progress reports',
                          'New resource updates'
                        ].map(setting => (
                          <label key={setting} className="flex items-center justify-between">
                            <span className="text-sm text-slate-700">{setting}</span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Availability</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Preferred Days
                          </label>
                          <div className="space-y-2">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                              <label key={day} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  defaultChecked={!['Saturday', 'Sunday'].includes(day)}
                                  className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                                />
                                <span className="text-sm text-slate-700">{day}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Preferred Time Slots
                          </label>
                          <div className="space-y-2">
                            {['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 5 PM)', 'Evening (5 PM - 9 PM)', 'Night (9 PM - 12 AM)'].map(time => (
                              <label key={time} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  defaultChecked={time.includes('Evening')}
                                  className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                                />
                                <span className="text-sm text-slate-700">{time}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'privacy' && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      Privacy & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Account Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="btn-secondary">
                          Change Password
                        </Button>
                        <Button variant="outline" className="btn-secondary">
                          Enable Two-Factor Authentication
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Privacy Settings</h3>
                      <div className="space-y-3">
                        {[
                          'Show my profile to other users',
                          'Allow others to see my session history',
                          'Include me in recommendation algorithms',
                          'Share anonymous usage data to improve the platform'
                        ].map(setting => (
                          <label key={setting} className="flex items-center justify-between">
                            <span className="text-sm text-slate-700">{setting}</span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="text-lg font-medium text-slate-900 mb-4 text-red-600">Danger Zone</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                          Download My Data
                        </Button>
                        <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
