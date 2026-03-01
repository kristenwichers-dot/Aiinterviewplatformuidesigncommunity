import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Camera, Mic, MicOff, Video, VideoOff, Clock, ChevronRight } from 'lucide-react';

export default function InterviewScreen() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const questions = [
    {
      id: 1,
      question: "Tell me about yourself and your background in software development.",
      time: 120
    },
    {
      id: 2,
      question: "Describe a challenging project you've worked on and how you overcame obstacles.",
      time: 180
    },
    {
      id: 3,
      question: "What programming languages are you most proficient in and why?",
      time: 120
    },
    {
      id: 4,
      question: "How do you stay updated with the latest technology trends?",
      time: 90
    },
    {
      id: 5,
      question: "Where do you see yourself in the next 5 years?",
      time: 90
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Interview complete
      navigate('/student/reports');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">AI Interview Session</h1>
            <p className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg">
              <div className="size-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">Recording</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
              <Clock className="size-5" />
              <span className="text-xl font-mono">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-88px)]">
        {/* Main Question Area */}
        <div className="lg:col-span-2 flex flex-col">
          {/* Question Display */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-6 flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Question {currentQuestion + 1}</span>
            </div>
            <h2 className="text-3xl font-semibold mb-4 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="size-5" />
              <span>Suggested time: {questions[currentQuestion].time}s</span>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-4 rounded-xl transition-all ${
                    isMicOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isMicOn ? <Mic className="size-6" /> : <MicOff className="size-6" />}
                </button>
                <button
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`p-4 rounded-xl transition-all ${
                    isCameraOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isCameraOn ? <Video className="size-6" /> : <VideoOff className="size-6" />}
                </button>
              </div>

              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl transition-all"
              >
                <span className="font-medium">
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
                </span>
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Camera Preview */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-2xl p-6 h-full">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Camera className="size-5" />
              Camera Preview
            </h3>
            <div className="bg-gray-900 rounded-xl aspect-[3/4] flex items-center justify-center mb-6 relative overflow-hidden">
              {isCameraOn ? (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
              ) : (
                <div className="flex flex-col items-center gap-4 text-gray-500">
                  <VideoOff className="size-12" />
                  <p>Camera Off</p>
                </div>
              )}
            </div>

            {/* Microphone Status */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl">
                <span className="text-sm">Microphone Status</span>
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${isMicOn ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm font-medium">{isMicOn ? 'Active' : 'Muted'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl">
                <span className="text-sm">Camera Status</span>
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${isCameraOn ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm font-medium">{isCameraOn ? 'Active' : 'Off'}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="p-4 bg-gray-700 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
