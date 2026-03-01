import StudentLayout from '../components/StudentLayout';
import { Trophy, Target, Clock, TrendingUp, PlayCircle, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router';

export default function StudentDashboard() {
  const navigate = useNavigate();

  const stats = [
    { icon: Trophy, label: 'Overall Score', value: '85%', color: 'from-blue-600 to-blue-700', trend: '+5%' },
    { icon: Target, label: 'Interviews Completed', value: '12', color: 'from-purple-600 to-purple-700', trend: '+3' },
    { icon: Clock, label: 'Average Time', value: '25m', color: 'from-green-600 to-green-700', trend: '-2m' },
    { icon: TrendingUp, label: 'Success Rate', value: '92%', color: 'from-orange-600 to-orange-700', trend: '+8%' },
  ];

  const chartData = [
    { name: 'Jan', score: 65 },
    { name: 'Feb', score: 72 },
    { name: 'Mar', score: 68 },
    { name: 'Apr', score: 78 },
    { name: 'May', score: 82 },
    { name: 'Jun', score: 85 },
  ];

  const recentInterviews = [
    { title: 'Frontend Developer Interview', date: '2026-02-15', score: 88, status: 'Passed' },
    { title: 'Data Science Internship', date: '2026-02-10', score: 92, status: 'Passed' },
    { title: 'Backend Engineer Role', date: '2026-02-05', score: 78, status: 'Passed' },
    { title: 'Machine Learning Viva', date: '2026-01-28', score: 85, status: 'Passed' },
  ];

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Here's your interview performance overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <span className="text-sm text-green-600 font-medium">{stat.trend}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Score Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="url(#colorGradient)" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5 }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Interviews */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Interviews</h2>
            <button 
              onClick={() => navigate('/student/reports')}
              className="text-blue-600 hover:underline text-sm"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentInterviews.map((interview, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate('/student/reports')}
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <FileText className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{interview.title}</h3>
                    <p className="text-sm text-gray-500">{interview.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{interview.score}%</p>
                    <p className="text-sm text-green-600">{interview.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <button
            onClick={() => navigate('/student/interview')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 hover:shadow-2xl transition-all flex items-center gap-4"
          >
            <div className="size-16 rounded-xl bg-white/20 flex items-center justify-center">
              <PlayCircle className="size-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-1">Start New Interview</h3>
              <p className="text-blue-100">Begin your AI-powered interview session</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/student/resume')}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="size-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <FileText className="size-8 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Upload Resume</h3>
              <p className="text-gray-600">Get AI-powered resume analysis</p>
            </div>
          </button>
        </div>
      </div>
    </StudentLayout>
  );
}
