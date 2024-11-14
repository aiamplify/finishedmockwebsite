import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(26, 20, 56, 0)', 'rgba(26, 20, 56, 0.8)']
  );

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const publicNavItems = ['Security', 'Product', 'Resources', 'Customers'];
  const dashboardNavItems = ['Dashboard', 'Analytics', 'Settings'];

  const navItems = currentUser ? dashboardNavItems : publicNavItems;

  return (
    <>
      <motion.nav 
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg shadow-purple-500/20" />
              <span className="text-white text-xl font-medium">FeedGuard</span>
            </Link>
          </motion.div>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={currentUser ? `/${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 bg-purple-900/50 text-white px-4 py-2 rounded-lg text-sm font-medium border border-purple-500/20"
                >
                  <img
                    src={currentUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.email}`}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full bg-purple-800"
                  />
                  <div className="text-left">
                    <div className="font-medium">{currentUser.displayName || currentUser.email}</div>
                    <div className="text-xs text-white/60">Pro Member</div>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-purple-900/90 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/20 py-2"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-purple-800/50 transition-colors text-sm"
                    >
                      Profile Settings
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-purple-800/50 transition-colors text-sm"
                    >
                      Dashboard
                    </Link>
                    <div className="border-t border-purple-500/20 my-2" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-purple-800/50 transition-colors text-sm"
                    >
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-900/50 text-white px-6 py-2 rounded-lg text-sm font-medium border border-purple-500/20"
                  onClick={handleLoginClick}
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg text-sm font-medium shadow-lg shadow-purple-500/20"
                  onClick={handleRegisterClick}
                >
                  Register
                </motion.button>
              </>
            )}
          </div>
        </div>
      </motion.nav>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
}