import { useState } from 'react';

export default function DiagnosisPage() {
  const [usia, setUsia] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [tekananDarah, setTekananDarah] = useState('');
  const [kolesterol, setKolesterol] = useState('');
  const [olahraga, setOlahraga] = useState('');
  const [frekuensiOlahraga, setFrekuensiOlahraga] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi manual jika olahraga == "Iya", maka frekuensi harus diisi
    if (
      !usia || !jenisKelamin || !berat || !tinggi || !tekananDarah || !kolesterol || !olahraga ||
      (olahraga === 'Iya' && !frekuensiOlahraga)
    ) {
      setError('Semua kolom wajib diisi.');
      return;
    }

    setError('');

    const data = {
      usia,
      jenisKelamin,
      berat,
      tinggi,
      tekananDarah,
      kolesterol,
      olahraga,
      frekuensiOlahraga: olahraga === 'Iya' ? frekuensiOlahraga : 'Tidak Pernah',
    };

    console.log('Data diagnosis:', data);
    // Simpan ke localStorage / API / navigasi ke halaman hasil
    // localStorage.setItem('dataDiagnosis', JSON.stringify(data));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Form Diagnosis Kesehatan Jantung</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 text-gray-700">Usia</label>
            <input
              type="number"
              required
              value={usia}
              onChange={(e) => setUsia(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Masukkan usia"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Jenis Kelamin</label>
            <select
              required
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Berat Badan (kg)</label>
            <input
              type="number"
              required
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Contoh: 70"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Tinggi Badan (cm)</label>
            <input
              type="number"
              required
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Contoh: 170"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Tekanan Darah (mmHg)</label>
            <input
              type="text"
              required
              value={tekananDarah}
              onChange={(e) => setTekananDarah(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Contoh: 120/80"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Kolesterol (mg/dL)</label>
            <input
              type="number"
              required
              value={kolesterol}
              onChange={(e) => setKolesterol(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Contoh: 190"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Apakah Anda sering berolahraga?</label>
            <select
              required
              value={olahraga}
              onChange={(e) => {
                setOlahraga(e.target.value);
                if (e.target.value === 'Tidak') setFrekuensiOlahraga('');
              }}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Pilih jawaban</option>
              <option value="Iya">Iya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          {olahraga === 'Iya' && (
            <div>
              <label className="block mb-1 text-gray-700">Seberapa sering Anda berolahraga?</label>
              <select
                required
                value={frekuensiOlahraga}
                onChange={(e) => setFrekuensiOlahraga(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Pilih frekuensi</option>
                <option value="1-3x/minggu">1–3 kali/minggu</option>
                <option value="4-5x/minggu">4–5 kali/minggu</option>
                <option value="Setiap hari">Setiap hari</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Lanjutkan Diagnosis
          </button>
        </form>
      </div>
    </div>
  );
}
