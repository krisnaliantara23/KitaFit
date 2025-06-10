import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imageGambar from '../components/yum.jpeg'; 
import KafeinGambar from '../components/Kopi.jpeg'; 
import BerjalanGambar from '../components/Berjalan.jpeg';
import makanGambar from '../components/Makan.jpeg'; // Gambar yang diimpor
export default function LandingPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Amelia"); // Default name, will be replaced if logged in.

  useEffect(() => {
    // Simulate checking if the user is logged in (replace with your actual logic)
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setUserName("User"); // Or extract the user's name from the user data
    }
  }, []);

  return (
    <div className="bg-white">

      {/* Header Section - Greeting & Call-to-action */}
      <section className="bg-gradient-to-br from-red-100 to-red-200 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
            Pantau Kesehatan Jantung Anda dengan <span className="text-red-500">KitaFit</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Solusi pintar berbasis Machine Learning untuk deteksi risiko jantung, edukasi, dan gaya hidup sehat.
          </p>
          <a
            href="/diagnosis"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            Cek Kesehatan Sekarang
          </a>
        </div>
      </section>

      {/* User Info Section */}
      {isLoggedIn ? (
        <div className="flex items-center space-x-4 p-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-gray-600 text-sm">Hi, {userName}</p>
            <p className="text-lg font-semibold">Pantau Jantung, Hidup Sehat</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center space-x-4 p-4">
          {/* <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Register
          </button> */}
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[{
              title: "Analisis Risiko Jantung",
              icon: "https://cdn-icons-png.flaticon.com/512/3588/3588500.png",
              desc: "Prediksi kemungkinan risiko penyakit jantung berdasarkan data kesehatan pribadi Anda."
            },
            {
              title: "Rekomendasi Gaya Hidup",
              icon: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
              desc: "Dapatkan saran makanan dan aktivitas yang menyehatkan jantung Anda."
            },
            {
              title: "Chatbot Kesehatan",
              icon: "https://cdn-icons-png.flaticon.com/512/4712/4712055.png",
              desc: "Ajukan pertanyaan seputar kesehatan jantung kapan saja melalui chatbot pintar."
            }].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border hover:shadow-xl transition duration-300">
                <img src={f.icon} alt="" className="w-20 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-red-600 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
          ))}
        </div>
      </section>

      {/* BPM Card Section */}
      {isLoggedIn && (
        <div className="bg-white rounded-xl shadow p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <p className="text-red-600 text-3xl font-bold">91</p>
              <p className="text-gray-500">BPM</p>
            </div>
            <div className="flex-1">
              {/* Simulasi garis BPM */}
              <div className="h-12 bg-red-100 rounded"></div>
            </div>
          </div>

          {/* Riwayat & Ukur Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => navigate('/history')}
              className="flex-1 bg-red-600 text-white py-2 rounded font-semibold"
            >
              Riwayat
            </button>
            <button
              onClick={() => navigate('/diagnosis')}
              className="flex-1 border border-red-600 text-red-600 py-2 rounded font-semibold"
            >
              Ukur
            </button>
          </div>
        </div>
      )}

{/* Recommendation Section */}
<div 
  className="bg-cover bg-center rounded-xl p-4 space-y-2 relative" 
  style={{ backgroundImage: `url(${imageGambar})` }} // Gambar yang diimpor
>
  <div className="absolute inset-0 bg-black opacity-30"></div> {/* Lapisan transparan */}
  <p className="font-semibold text-white relative z-10">
    Lihat Rekomendasi Aktivitas & Makanan Berdasarkan Riwayat Kamu
  </p>
  <button className="text-red-600 font-semibold underline bg-white p-2 rounded relative z-10">
    Lebih Lanjut
  </button>
</div>

      {/* Articles Section */}
<div>
  <div className="px-6"></div>
  <p className="font-semibold mb-4 text-xl text-gray-800">Artikel Terkait</p>
  <div className="space-y-5-4">
    {[{
        title: "Manfaat Berjalan Kaki untuk Kesehatan Jantung",
        image: BerjalanGambar,
        link: "/articles/walking-benefits"
      },
      {
        title: "Kafein dan Kesehatan Jantung: Apa yang Perlu Anda Ketahui",
        image: KafeinGambar,
        link: "/articles/caffeine-heart-health"
      },
      {
        title: "Perubahan Pola Makan yang Efektif untuk Menurunkan Kolesterol Jahat",
        image: makanGambar,
        link: "/articles/walking-benefits"
      },
    ].map((article, index) => (
      <div key={index} className="flex items-center space-x-4 mb-4">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-16 h-16 rounded-lg object-cover mx-4" // Menambahkan margin horizontal untuk gambar
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
          <a href={article.link} className="text-red-600 hover:underline">Baca Selengkapnya</a>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Footer - Action to Register */}
      {!isLoggedIn && (
        <section className="bg-gradient-to-tr from-red-500 to-red-700 text-white text-center py-16 px-4">
          <h2 className="text-3xl font-semibold mb-4">Mulai Hidup Sehat Hari Ini</h2>
          <p className="mb-6 text-sm md:text-base">Gunakan KitaFit untuk mengawasi kesehatan jantung Anda secara cerdas dan terjangkau.</p>
          <a
            href="/register"
            className="bg-white text-red-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Daftar Sekarang
          </a>
        </section>
      )}
    </div>
  );
}
