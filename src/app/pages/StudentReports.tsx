import StudentLayout from '../components/StudentLayout';
import { FileText, Download, TrendingUp, Award, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function StudentReports() {
  const reports = [
    {
      id: 1,
      title: 'Frontend Developer Interview',
      date: '2026-02-15',
      score: 88,
      duration: '28 minutes',
      status: 'Passed',
      type: 'Job Interview'
    },
    {
      id: 2,
      title: 'Data Science Internship',
      date: '2026-02-10',
      score: 92,
      duration: '32 minutes',
      status: 'Passed',
      type: 'Internship'
    },
    {
      id: 3,
      title: 'Backend Engineer Role',
      date: '2026-02-05',
      score: 78,
      duration: '25 minutes',
      status: 'Passed',
      type: 'Job Interview'
    },
    {
      id: 4,
      title: 'Machine Learning Viva',
      date: '2026-01-28',
      score: 85,
      duration: '20 minutes',
      status: 'Passed',
      type: 'Viva'
    },
  ];

  const skillsData = [
    { subject: 'Technical', score: 85 },
    { subject: 'Communication', score: 90 },
    { subject: 'Problem Solving', score: 80 },
    { subject: 'Confidence', score: 88 },
    { subject: 'Clarity', score: 82 },
  ];

  const scoresByMonth = [
    { month: 'Jan', score: 75 },
    { month: 'Feb', score: 88 },
  ];

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Reports</h1>
          <p className="text-gray-600">View and download your interview performance reports</p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Score by Month */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Average Score by Month</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={scoresByMonth}>
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
                <Bar dataKey="score" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Radar */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills Assessment</h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis stroke="#6b7280" />
                <Radar name="Score" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">All Interview Reports</h2>
            <div className="flex items-center gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Job Interview</option>
                <option>Internship</option>
                <option>Viva</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {reports.map((report) => (
              <div 
                key={report.id}
                className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="size-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <FileText className="size-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {report.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>{report.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="size-4" />
                          <span>{report.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {report.score}%
                      </div>
                      <div className="text-sm text-green-600 font-medium">{report.status}</div>
                    </div>
                    <button className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                      <Download className="size-5" />
                    </button>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Technical</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600" style={{ width: '85%' }} />
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Communication</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600" style={{ width: '90%' }} />
                        </div>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Problem Solving</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600" style={{ width: '80%' }} />
                        </div>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Confidence</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-600" style={{ width: '88%' }} />
                        </div>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="size-20 rounded-full bg-white/20 flex items-center justify-center">
              <TrendingUp className="size-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Excellent Progress!</h3>
              <p className="text-blue-100">You've completed 12 interviews with an average score of 85%. Keep up the great work!</p>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
