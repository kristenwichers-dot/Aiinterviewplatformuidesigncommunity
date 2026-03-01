import { useNavigate } from 'react-router';
import { Brain, LogOut, Users, TrendingUp, Target, Star, Plus, Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function CompanyDashboard() {
  const navigate = useNavigate();

  const candidates = [
    { name: 'Alice Johnson', score: 95, experience: '3 years', status: 'Shortlisted', position: 'Frontend Developer' },
    { name: 'Bob Smith', score: 92, experience: '5 years', status: 'Interview Scheduled', position: 'Backend Engineer' },
    { name: 'Carol White', score: 88, experience: '2 years', status: 'Shortlisted', position: 'Frontend Developer' },
    { name: 'David Brown', score: 85, experience: '4 years', status: 'Under Review', position: 'Full Stack Developer' },
    { name: 'Eve Davis', score: 82, experience: '3 years', status: 'Under Review', position: 'DevOps Engineer' },
  ];

  const departmentData = [
    { name: 'Engineering', value: 45 },
    { name: 'Marketing', value: 20 },
    { name: 'Sales', value: 25 },
    { name: 'HR', value: 10 },
  ];

  const COLORS = ['#3b82f6', '#9333ea', '#10b981', '#f59e0b'];

  const statsData = [
    { month: 'Jan', candidates: 45 },
    { month: 'Feb', candidates: 62 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Brain className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">AI Interview Platform</h1>
              <p className="text-xs text-gray-500">Company Portal</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut className="size-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Dashboard</h1>
          <p className="text-gray-600">Manage job roles and track candidate performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Users className="size-6 text-white" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Candidates</p>
            <p className="text-3xl font-bold text-gray-900">248</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                <Target className="size-6 text-white" />
              </div>
              <span className="text-sm text-green-600 font-medium">+8%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Active Roles</p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                <Star className="size-6 text-white" />
              </div>
              <span className="text-sm text-green-600 font-medium">+5%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Shortlisted</p>
            <p className="text-3xl font-bold text-gray-900">42</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center">
                <TrendingUp className="size-6 text-white" />
              </div>
              <span className="text-sm text-green-600 font-medium">92%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Success Rate</p>
            <p className="text-3xl font-bold text-gray-900">85%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Job Role */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Job Role</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>HR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      className="py-2 px-3 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-all"
                    >
                      Beginner
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-all"
                    >
                      Intermediate
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition-all"
                    >
                      Advanced
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Plus className="size-5" />
                  <span>Create Role</span>
                </button>
              </form>
            </div>

            {/* Department Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Department Distribution</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={(entry) => entry.name}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Candidate Ranking & Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Analytics Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Candidate Analytics</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="candidates" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Candidate Ranking Table */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Top Candidates</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rank</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Position</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Experience</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Score</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="size-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-900">{candidate.name}</td>
                        <td className="py-4 px-4 text-gray-600">{candidate.position}</td>
                        <td className="py-4 px-4 text-gray-600">{candidate.experience}</td>
                        <td className="py-4 px-4">
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {candidate.score}%
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            candidate.status === 'Shortlisted'
                              ? 'bg-green-100 text-green-700'
                              : candidate.status === 'Interview Scheduled'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {candidate.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
