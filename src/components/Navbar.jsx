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
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
