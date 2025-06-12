import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeIcon from '../components/Home.png';
import LifemapIcon from '../components/Chatbot.png';
import ConsultIcon from '../components/Consulting.png';
import LifeCarterIcon from '../components/HeartRate.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('User');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser.name) {
          setUsername(parsedUser.name);
        }
      } catch (err) {
        console.error('Gagal parsing user:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

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

        <Link
          to="/chatbot"
          className={`flex items-center space-x-2 ${location.pathname === '/chatbot' ? 'text-red-600 font-bold' : ''}`}
        >
          <span role="img" aria-label="Chatbot">🤖</span>
          <span>ChatBot</span>
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-sm text-blue-500 hover:underline">
              Register
            </Link>
          </>
        ) : (
          <div className="text-sm flex items-center space-x-3">
            <span className="text-gray-600">Welcome, {username}</span>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
