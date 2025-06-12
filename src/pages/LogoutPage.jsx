import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
        localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect ke halaman login
    navigate('/login');
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sedang logout...</h2>
    </div>
  );
}
