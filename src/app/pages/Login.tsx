import { useNavigate } from 'react-router';
import { Brain, Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would authenticate
    navigate('/student/dashboard');
  };

  const useDemoAccount = (type: 'student' | 'company' | 'college') => {
    if (type === 'student') {
      setEmail('student@demo.com');
      setPassword('demo123');
      setTimeout(() => navigate('/student/dashboard'), 500);
    } else if (type === 'company') {
      setEmail('company@demo.com');
      setPassword('demo123');
      setTimeout(() => navigate('/company/dashboard'), 500);
    } else {
      setEmail('college@demo.com');
      setPassword('demo123');
      setTimeout(() => navigate('/college/viva'), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="size-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Brain className="size-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-center mb-8">Login to your account</p>

          {/* Demo Accounts Section */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">Try Demo Accounts</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => useDemoAccount('student')}
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-gray-200 transition-all"
              >
                <User className="size-5 text-blue-600" />
                <span className="text-xs font-medium text-gray-700">Student</span>
              </button>
              <button
                type="button"
                onClick={() => useDemoAccount('company')}
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:bg-purple-50 hover:border-purple-300 border border-gray-200 transition-all"
              >
                <User className="size-5 text-purple-600" />
                <span className="text-xs font-medium text-gray-700">Company</span>
              </button>
              <button
                type="button"
                onClick={() => useDemoAccount('college')}
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 hover:border-green-300 border border-gray-200 transition-all"
              >
                <User className="size-5 text-green-600" />
                <span className="text-xs font-medium text-gray-700">College</span>
              </button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or login with credentials</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="•���••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-blue-600 hover:underline"
              >
                Register here
              </button>
            </p>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}