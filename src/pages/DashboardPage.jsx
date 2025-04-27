export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Anda</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">Status Kesehatan</h2>
            <p className="text-2xl font-bold text-green-600">Normal</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">Tanggal Diagnosis Terakhir</h2>
            <p className="text-2xl font-bold text-blue-600">24 April 2025</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">Total Pemeriksaan</h2>
            <p className="text-2xl font-bold text-red-600">5 Kali</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition mb-10">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Riwayat Diagnosis Terbaru</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="py-3 px-4 font-semibold">Tanggal</th>
                  <th className="py-3 px-4 font-semibold">Hasil</th>
                  <th className="py-3 px-4 font-semibold">Catatan</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-t">
                  <td className="py-3 px-4">24 April 2025</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">Normal</td>
                  <td className="py-3 px-4">Tidak ada kelainan signifikan</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">12 April 2025</td>
                  <td className="py-3 px-4 text-yellow-600 font-semibold">Sedang</td>
                  <td className="py-3 px-4">Disarankan olahraga rutin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="/diagnosis"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow font-semibold transition"
          >
            Cek Kesehatan Lagi
          </a>
        </div>
      </div>
    </div>
  );
}