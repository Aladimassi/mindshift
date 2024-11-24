import React from 'react';
import { Menu, X, Brain, LogIn, UserPlus, Search, Heart, Coins, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

  // Mock student data (replace with actual auth/data fetching)
  const studentData = {
    coins: 3,
    nextConsultation: '2024-03-20T14:00:00',
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-sky-100/95 shadow-md' : 'bg-sky-100/80 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a onClick={() => navigate('/')} className="flex items-center space-x-2 group cursor-pointer">
              <Brain className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-xl font-bold text-gray-900">MindBridge</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              icon={Search}
              onClick={() => navigate('/find-help')}
            >
              Find Help
            </Button>
            <Button
              variant="ghost"
              icon={Heart}
              onClick={() => navigate('/donate')}
            >
              Donate
            </Button>

            {/* Student Access Section */}
            <div className="flex items-center space-x-4 px-4 py-1.5 bg-white/50 rounded-lg border border-blue-100">
              <div className="flex items-center text-blue-700">
                <Coins className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{studentData.coins} coins</span>
              </div>
              <div className="h-4 w-px bg-blue-200"></div>
              <div className="flex items-center text-blue-700">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">
                  {new Date(studentData.nextConsultation).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="h-6 w-px bg-blue-200"></div>
            <Button
              variant="secondary"
              size="sm"
              icon={LogIn}
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={UserPlus}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              icon={isOpen ? X : Menu}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Student Access Mobile */}
              <div className="flex flex-col space-y-2 p-4 bg-white/50 rounded-lg border border-blue-100 mb-4">
                <div className="flex items-center text-blue-700">
                  <Coins className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{studentData.coins} coins</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Next: {new Date(studentData.nextConsultation).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <Button
                variant="ghost"
                icon={Search}
                className="w-full justify-start"
                onClick={() => {
                  navigate('/find-help');
                  setIsOpen(false);
                }}
              >
                Find Help
              </Button>
              <Button
                variant="ghost"
                icon={Heart}
                className="w-full justify-start"
                onClick={() => {
                  navigate('/donate');
                  setIsOpen(false);
                }}
              >
                Donate
              </Button>
              <div className="h-px bg-blue-200 my-2"></div>
              <Button
                variant="secondary"
                icon={LogIn}
                className="w-full justify-start mb-2"
                onClick={() => {
                  navigate('/signin');
                  setIsOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                icon={UserPlus}
                className="w-full justify-start"
                onClick={() => {
                  navigate('/signup');
                  setIsOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}