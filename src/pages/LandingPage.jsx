export default function LandingPage() {
  return (
    <div className="bg-white">
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

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
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
            }
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border hover:shadow-xl transition duration-300">
              <img src={f.icon} alt="" className="w-20 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-red-600 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
    </div>
  );
}
