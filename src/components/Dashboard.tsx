import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  MessageCircle, 
  Heart, 
  BookOpen, 
  Trophy, 
  TrendingUp,
  FileText,
  Brain,
  Target,
  Sparkles,
  Settings,
  User
} from 'lucide-react';

interface DashboardProps {
  theme: string;
  onBack: () => void;
}

const Dashboard = ({ theme, onBack }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: 'Alex Student',
    level: 12,
    xp: 2847,
    nextLevelXp: 3000,
    streak: 7,
    documentsProcessed: 15,
    quizzesCompleted: 23,
    wellnessScore: 85
  };

  const recentActivities = [
    { type: 'document', title: 'Physics Chapter 5', score: 92, time: '2 hours ago' },
    { type: 'quiz', title: 'Math Practice Quiz', score: 87, time: '1 day ago' },
    { type: 'wellness', title: 'Mindfulness Break', score: null, time: '1 day ago' },
    { type: 'achievement', title: 'Week Streak Achieved!', score: null, time: '2 days ago' }
  ];

  const getThemeColors = (theme: string) => {
    const colors = {
      marvel: 'from-red-500 to-red-700',
      anime: 'from-pink-500 to-purple-600',
      tech: 'from-blue-500 to-cyan-600',
      sports: 'from-green-500 to-emerald-600',
      wellness: 'from-emerald-400 to-teal-500'
    };
    return colors[theme as keyof typeof colors] || colors.tech;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                GamifyEd
              </h1>
              <span className="text-foreground-muted">|</span>
              <span className="text-foreground-muted capitalize">{theme} Theme</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-achievement text-achievement-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Level {userData.level}
              </div>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-card sticky top-24">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${getThemeColors(theme)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{userData.name}</h3>
                <p className="text-foreground-muted">Level {userData.level} Explorer</p>
              </div>

              {/* XP Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>XP Progress</span>
                  <span>{userData.xp}/{userData.nextLevelXp}</span>
                </div>
                <Progress value={(userData.xp / userData.nextLevelXp) * 100} className="h-3" />
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-achievement" />
                    <span className="text-sm">Streak</span>
                  </div>
                  <span className="font-bold text-achievement">{userData.streak} days</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm">Documents</span>
                  </div>
                  <span className="font-bold">{userData.documentsProcessed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm">Quizzes</span>
                  </div>
                  <span className="font-bold">{userData.quizzesCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-wellness" />
                    <span className="text-sm">Wellness</span>
                  </div>
                  <span className="font-bold text-wellness">{userData.wellnessScore}%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-2">Welcome back, {userData.name}! 🎉</h2>
              <p className="text-foreground-muted text-lg">Ready to continue your learning adventure?</p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="p-6 hover-lift cursor-pointer bg-gradient-card">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-2xl">
                    <Upload className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Upload Document</h3>
                    <p className="text-foreground-muted text-sm">Process PDFs & generate quizzes</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift cursor-pointer bg-gradient-card">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-wellness p-3 rounded-2xl">
                    <Heart className="w-6 h-6 text-wellness-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Wellness Break</h3>
                    <p className="text-foreground-muted text-sm">Take a mindful moment</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift cursor-pointer bg-gradient-card">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-achievement p-3 rounded-2xl">
                    <MessageCircle className="w-6 h-6 text-achievement-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Tutor</h3>
                    <p className="text-foreground-muted text-sm">Chat with your AI friend</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Learning Progress</h3>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <p className="text-foreground-muted text-sm">This week's completion rate</p>
              </Card>

              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Study Streak</h3>
                  <Target className="w-5 h-5 text-achievement" />
                </div>
                <div className="text-3xl font-bold text-achievement mb-2">{userData.streak}</div>
                <p className="text-foreground-muted text-sm">Days in a row</p>
              </Card>

              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Achievements</h3>
                  <Trophy className="w-5 h-5 text-achievement" />
                </div>
                <div className="text-3xl font-bold text-achievement mb-2">12</div>
                <p className="text-foreground-muted text-sm">Badges earned</p>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-bold text-xl mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background-secondary rounded-xl hover-lift">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'document' ? 'bg-primary/20' :
                      activity.type === 'quiz' ? 'bg-primary/20' :
                      activity.type === 'wellness' ? 'bg-wellness/20' :
                      'bg-achievement/20'
                    }`}>
                      {activity.type === 'document' && <FileText className="w-5 h-5 text-primary" />}
                      {activity.type === 'quiz' && <Brain className="w-5 h-5 text-primary" />}
                      {activity.type === 'wellness' && <Heart className="w-5 h-5 text-wellness" />}
                      {activity.type === 'achievement' && <Trophy className="w-5 h-5 text-achievement" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{activity.title}</h4>
                      <p className="text-foreground-muted text-sm">{activity.time}</p>
                    </div>
                    {activity.score && (
                      <div className="text-right">
                        <div className="font-bold text-primary">{activity.score}%</div>
                        <div className="text-foreground-muted text-sm">Score</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button className="fab">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </Button>
    </div>
  );
};

export default Dashboard;