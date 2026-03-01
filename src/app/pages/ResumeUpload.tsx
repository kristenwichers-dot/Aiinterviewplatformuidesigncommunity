import { useState } from 'react';
import StudentLayout from '../components/StudentLayout';
import { Upload, FileText, CheckCircle, TrendingUp, Brain, Code, Briefcase } from 'lucide-react';

export default function ResumeUpload() {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileUpload = () => {
    // Simulate file upload
    setIsUploaded(true);
  };

  const skills = [
    { name: 'JavaScript', level: 85, color: 'bg-blue-600' },
    { name: 'React', level: 90, color: 'bg-cyan-600' },
    { name: 'Python', level: 75, color: 'bg-green-600' },
    { name: 'Node.js', level: 80, color: 'bg-purple-600' },
    { name: 'SQL', level: 70, color: 'bg-orange-600' },
  ];

  const matchAnalysis = [
    { category: 'Technical Skills', score: 85, icon: Code },
    { category: 'Experience Level', score: 78, icon: Briefcase },
    { category: 'Education', score: 92, icon: Brain },
  ];

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Analysis</h1>
          <p className="text-gray-600">Upload your resume for AI-powered skill analysis</p>
        </div>

        {!isUploaded ? (
          /* Upload Section */
          <div className="max-w-3xl mx-auto">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-purple-400 hover:bg-purple-50/50 transition-all cursor-pointer"
              onClick={handleFileUpload}
            >
              <div className="size-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
                <Upload className="size-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Drag & Drop Resume Here
              </h3>
              <p className="text-gray-600 mb-6">
                or click to browse files
              </p>
              <button 
                onClick={handleFileUpload}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Select File
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Supported formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <Brain className="size-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 text-sm">AI Analysis</h4>
                <p className="text-xs text-gray-500">Smart skill extraction</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <TrendingUp className="size-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 text-sm">Match Score</h4>
                <p className="text-xs text-gray-500">Job compatibility</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <CheckCircle className="size-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 text-sm">Insights</h4>
                <p className="text-xs text-gray-500">Improvement tips</p>
              </div>
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Success Message */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4">
              <CheckCircle className="size-12 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-1">Resume Uploaded Successfully!</h3>
                <p className="text-green-700">Our AI has analyzed your resume. Here are the results:</p>
              </div>
            </div>

            {/* Overall Match Score */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overall Match Score</h2>
              <div className="flex items-center gap-8">
                <div className="relative size-48">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.85} ${2 * Math.PI * 40}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#9333ea" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">85%</span>
                    <span className="text-sm text-gray-600">Match</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  {matchAnalysis.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <Icon className="size-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{item.category}</span>
                            <span className="text-sm font-semibold text-gray-700">{item.score}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Skill Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Detected Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Recommendations</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Add more quantifiable achievements to strengthen your experience section</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Consider adding certifications in cloud technologies to boost your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Your resume is ATS-friendly and well-structured</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setIsUploaded(false)}
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-purple-300 transition-all"
              >
                Upload Another Resume
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                Download Analysis Report
              </button>
            </div>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}
