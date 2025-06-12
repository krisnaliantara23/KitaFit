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
    // Simpan token ke localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    navigate('/dashboard');
  } catch (err) {
    console.error(err);
    setError('Terjadi kesalahan saat login.');
  }
};

} 