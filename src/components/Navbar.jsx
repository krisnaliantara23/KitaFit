import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeIcon from '../components/Home.png';
import LifemapIcon from '../components/Chatbot.png';
import ConsultIcon from '../components/Consulting.png';
import LifeCarterIcon from '../components/HeartRate.png';

export default function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-600">
        KitaFit
      </Link>

      <div className="space-x-4 text-sm flex items-center">
        <Link
          to="/"
          className={`flex items-center space-x-2 ${location.pathname === '/' ? 'text-red-600 font-bold' : ''}`}
        >
          <img src={HomeIcon} alt="Home" className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link
          to="/lifemap"
          className={`flex items-center space-x-2 ${location.pathname === '/lifemap' ? 'text-red-600 font-bold' : ''}`}
        >
          <img src={LifemapIcon} alt="Lifemap" className="w-5 h-5" />
          <span>LifeMap</span>
        </Link>

        <Link
          to="/consult"
          className={`flex items-center space-x-2 ${location.pathname === '/consult' ? 'text-red-600 font-bold' : ''}`}
        >
          <img src={ConsultIcon} alt="Consult" className="w-5 h-5" />
          <span>Consult</span>
        </Link>

        <Link
          to="/lifecare"
          className={`flex items-center space-x-2 ${location.pathname === '/lifecare' ? 'text-red-600 font-bold' : ''}`}
        >
          <img src={LifeCarterIcon} alt="LifeCarter" className="w-5 h-5" />
          <span>LifeCare</span>
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-sm text-blue-500">
              Login
            </Link>
            <Link to="/register" className="text-sm text-blue-500">
              Register
            </Link>
          </>
        ) : (
          <div className="text-sm">
            <span>Welcome, User</span>
          </div>
        )}
      </div>
    </nav>
  );
}
