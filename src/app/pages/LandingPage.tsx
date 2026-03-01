import { useNavigate } from 'react-router';
import { Brain, FileText, Sparkles, BarChart3, TrendingUp, Users, Target, Clock } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: 'Resume Analysis',
      description: 'AI-powered resume scanning and skill extraction for accurate candidate evaluation'
    },
    {
      icon: Brain,
      title: 'AI Evaluation',
      description: 'Advanced AI algorithms assess answers in real-time with human-like understanding'
    },
    {
      icon: Clock,
      title: 'Real-Time Scoring',
      description: 'Instant feedback and scoring during interviews for immediate insights'
    },
    {
      icon: BarChart3,
      title: 'Performance Reports',
      description: 'Comprehensive analytics and detailed reports for every interview session'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Brain className="size-6 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Interview Platform
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm">
            <Sparkles className="size-4" />
            <span>Powered by Advanced AI Technology</span>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI-Based Smart Interview Platform
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your hiring process with AI-powered interviews for job placements, 
            internships, and viva assessments. Get real-time feedback, comprehensive analytics, 
            and data-driven insights.
          </p>

          <div className="flex items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => navigate('/student/dashboard')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Start Interview
            </button>
            <button 
              onClick={() => navigate('/student/resume')}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl text-lg hover:border-purple-300 hover:shadow-lg transition-all"
            >
              Upload Resume
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="size-5 text-blue-600" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="size-5 text-purple-600" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="size-5 text-blue-600" />
              <span>50,000+ Interviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features for Modern Interviews
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for a complete AI-powered interview experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-purple-200"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                  <Icon className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Interview Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies and institutions using our AI-powered platform
          </p>
          <button 
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>© 2026 AI Interview Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
