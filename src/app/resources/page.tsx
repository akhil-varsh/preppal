'use client';

import React, { useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  BookOpen,
  Video,
  FileText,
  Download,
  ExternalLink,
  Search,
  Filter,
  Star,
  Clock,
  User,
  Tag,
  Play,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'video' | 'template' | 'checklist';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  author: string;
  rating: number;
  downloads: number;
  tags: string[];
  thumbnail?: string;
  isPremium: boolean;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Complete Guide to Technical Interviews',
    description: 'A comprehensive guide covering all aspects of technical interviews, from coding challenges to system design.',
    type: 'guide',
    category: 'Technical',
    difficulty: 'Intermediate',
    author: 'PrepPal Team',
    rating: 4.8,
    downloads: 1247,
    tags: ['coding', 'algorithms', 'data-structures'],
    isPremium: false
  },
  {
    id: '2',
    title: 'Behavioral Interview Masterclass',
    description: 'Learn the STAR method and master behavioral interview questions with real examples and practice scenarios.',
    type: 'video',
    category: 'Behavioral',
    difficulty: 'Beginner',
    duration: '45 min',
    author: 'Sarah Johnson',
    rating: 4.9,
    downloads: 892,
    tags: ['behavioral', 'STAR-method', 'communication'],
    isPremium: true
  },
  {
    id: '3',
    title: 'System Design Interview Template',
    description: 'A structured template to approach system design interviews with step-by-step guidance.',
    type: 'template',
    category: 'System Design',
    difficulty: 'Advanced',
    author: 'Alex Chen',
    rating: 4.7,
    downloads: 634,
    tags: ['system-design', 'architecture', 'scalability'],
    isPremium: false
  },
  {
    id: '4',
    title: 'Frontend Developer Interview Checklist',
    description: 'Essential topics and questions every frontend developer should prepare for their interviews.',
    type: 'checklist',
    category: 'Technical',
    difficulty: 'Intermediate',
    author: 'Emily Rodriguez',
    rating: 4.6,
    downloads: 1089,
    tags: ['frontend', 'javascript', 'react', 'css'],
    isPremium: false
  },
  {
    id: '5',
    title: 'Product Manager Case Study Guide',
    description: 'Learn how to tackle product management case studies with frameworks and real examples.',
    type: 'guide',
    category: 'Product',
    difficulty: 'Advanced',
    author: 'David Kim',
    rating: 4.8,
    downloads: 567,
    tags: ['product-management', 'case-studies', 'strategy'],
    isPremium: true
  },
  {
    id: '6',
    title: 'Mock Interview Recording Analysis',
    description: 'Watch and learn from real mock interview sessions with detailed feedback and analysis.',
    type: 'video',
    category: 'General',
    difficulty: 'Beginner',
    duration: '30 min',
    author: 'PrepPal Team',
    rating: 4.5,
    downloads: 1456,
    tags: ['mock-interview', 'feedback', 'improvement'],
    isPremium: false
  }
];

const categories = ['All', 'Technical', 'Behavioral', 'System Design', 'Product', 'General'];
const resourceTypes = ['All Types', 'guide', 'video', 'template', 'checklist'];
const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = mockResources.filter(resource => {
    if (searchTerm && !resource.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !resource.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (selectedCategory !== 'All' && resource.category !== selectedCategory) return false;
    if (selectedType !== 'All Types' && resource.type !== selectedType) return false;
    if (selectedDifficulty !== 'All Levels' && resource.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'template':
        return <FileText className="w-5 h-5" />;
      case 'checklist':
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Resource['type']) => {
    switch (type) {
      case 'guide':
        return 'bg-blue-100 text-blue-700';
      case 'video':
        return 'bg-red-100 text-red-700';
      case 'template':
        return 'bg-green-100 text-green-700';
      case 'checklist':
        return 'bg-purple-100 text-purple-700';
    }
  };

  const getDifficultyColor = (difficulty: Resource['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-playfair text-slate-800 mb-2">
              Interview Resources
            </h1>
            <p className="text-slate-600 font-nunito">
              Comprehensive guides, templates, and videos to help you prepare
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
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

            {/* Category Quick Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <Card className="glass-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Resource Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      aria-label="Select resource type"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {resourceTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      aria-label="Select difficulty level"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>{difficulty}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      onClick={() => {
                        setSelectedCategory('All');
                        setSelectedType('All Types');
                        setSelectedDifficulty('All Levels');
                        setSearchTerm('');
                      }}
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

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card key={resource.id} className="glass-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                    </div>
                    {resource.isPremium && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Premium
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-200">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                        +{resource.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                      {resource.duration && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                      <span className="text-xs text-slate-500">by {resource.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="btn-secondary">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="btn-secondary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex space-x-2">
                      {resource.type === 'video' ? (
                        <Button size="sm" className="btn-primary flex items-center space-x-1">
                          <Play className="w-4 h-4" />
                          <span>Watch</span>
                        </Button>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" className="btn-secondary">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="btn-primary flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>Get</span>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <BookOpen className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No resources found</h3>
              <p className="text-slate-600 mb-4">
                Try adjusting your search criteria or explore different categories.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedType('All Types');
                  setSelectedDifficulty('All Levels');
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
