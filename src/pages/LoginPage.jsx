import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Semua field harus diisi.');
      return;
    }
    if (!email.includes('@')) {
      setError('Format email tidak valid.');
      return;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter.');
      return;
    }

    try {
      const response = await fetch('https://your-backend.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const err = await response.json();
        setError(err.message || 'Login gagal.');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Masuk ke Akun
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-red-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Belum punya akun?{' '}
          <Link to="/register" className="text-red-600 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
