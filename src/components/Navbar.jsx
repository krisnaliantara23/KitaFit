import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();

  // Scroll ke atas setiap kali ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-600">
        KitaFit
      </Link>

      <div className="space-x-4 text-sm">
<<<<<<< HEAD
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
=======
        <Link to="/" className="px-3 py-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-200">Home</Link>
        <Link to="/login" className="px-3 py-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-200">Login</Link>
        <Link to="/register" className="px-3 py-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-200">Register</Link>
        <Link to="/dashboard" className="px-3 py-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-200">Dashboard</Link>
>>>>>>> 793b481 (nambahin artikel sama nambahin fitur)
      </div>
    </nav>
  );
}
