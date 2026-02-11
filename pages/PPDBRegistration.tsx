import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PPDBRegistration: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderProgressBar = () => (
    <div class="w-full max-w-4xl mb-10">
      <nav aria-label="Progress">
        <ol class="flex items-center w-full relative">
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full -z-10"></div>
          <div 
            class="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500 ease-out" 
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((s) => (
            <li key={s} class={`relative ${s < 4 ? 'flex-1' : ''} flex ${s === 1 ? 'justify-start' : s === 4 ? 'justify-end' : 'justify-center'}`}>
              <div class={`flex flex-col items-center gap-2 ${step >= s ? 'text-primary' : 'text-slate-400'}`}>
                <div class={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 bg-white dark:bg-surface-dark
                  ${step >= s ? 'border-primary text-primary scale-110 shadow-lg shadow-primary/20' : 'border-slate-300 dark:border-slate-600'}`}>
                  {step > s ? <span class="material-icons text-sm">check</span> : s}
                </div>
                <span class="absolute top-12 text-xs font-bold whitespace-nowrap hidden sm:block">
                  {s === 1 ? 'Data Diri' : s === 2 ? 'Akademik' : s === 3 ? 'Upload' : 'Selesai'}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );

  return (
    <div class="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      {/* Navbar Simple */}
      <nav class="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-darker sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link to="/" class="flex items-center gap-3">
            <div class="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold">
              <span class="material-icons text-lg">school</span>
            </div>
            <span class="font-bold text-lg tracking-tight">PPDB SMA Nusantara</span>
          </Link>
          <div class="text-sm text-slate-500">
            Butuh Bantuan? <a href="#" class="text-primary hover:underline">Hubungi Panitia</a>
          </div>
        </div>
      </nav>

      <main class="flex-grow flex flex-col items-center py-10 px-4">
        {renderProgressBar()}

        {/* Form Container */}
        <div class="w-full max-w-4xl bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {step === 1 && (
            <div class="animate-fade-in">
              <div class="px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-darker">
                <h1 class="text-2xl font-bold">Data Diri Calon Siswa</h1>
                <p class="text-sm text-slate-500">Lengkapi identitas diri sesuai dokumen resmi.</p>
              </div>
              <div class="p-8 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-1">Nama Lengkap</label>
                    <input type="text" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" placeholder="Sesuai Ijazah" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">NIK</label>
                    <input type="text" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" placeholder="16 Digit NIK" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">NISN</label>
                    <input type="text" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Tempat Lahir</label>
                    <input type="text" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Tanggal Lahir</label>
                    <input type="date" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-1">Alamat Lengkap</label>
                    <textarea class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" rows={3}></textarea>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div class="animate-fade-in">
              <div class="px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-darker">
                <h1 class="text-2xl font-bold">Data Akademik</h1>
                <p class="text-sm text-slate-500">Informasi sekolah asal dan nilai rapor.</p>
              </div>
              <div class="p-8 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-1">Nama Sekolah Asal</label>
                    <input type="text" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary" placeholder="SMP Negeri..." />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Tahun Lulus</label>
                    <select class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-darker p-2.5 focus:ring-primary focus:border-primary">
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                </div>
                <div class="border-t border-slate-200 dark:border-slate-700 pt-6">
                  <h3 class="text-lg font-semibold text-primary mb-4">Nilai Rata-rata Rapor (Semester 1-5)</h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Matematika', 'Bahasa Indonesia', 'IPA'].map(subject => (
                      <div key={subject} class="bg-slate-50 dark:bg-surface-darker p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <label class="block text-sm font-medium mb-2">{subject}</label>
                        <div class="relative">
                          <input type="number" class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark p-2.5 text-center font-bold" placeholder="00" />
                          <span class="absolute right-3 top-2.5 text-xs text-slate-400">/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div class="animate-fade-in">
              <div class="px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-darker">
                <h1 class="text-2xl font-bold">Upload Berkas</h1>
                <p class="text-sm text-slate-500">Format JPG/PDF, Max 2MB per file.</p>
              </div>
              <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Pas Foto 3x4', 'Scan Akta Kelahiran', 'Scan Kartu Keluarga', 'Scan Rapor (Merged)'].map((doc) => (
                  <div key={doc} class="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary group-hover:scale-110 transition-transform">
                      <span class="material-icons">cloud_upload</span>
                    </div>
                    <h3 class="font-medium text-slate-700 dark:text-slate-200">{doc}</h3>
                    <p class="text-xs text-slate-400 mt-1">Drag & drop or click to upload</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div class="animate-fade-in p-12 text-center">
              <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="material-icons text-5xl">check_circle</span>
              </div>
              <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Pendaftaran Berhasil!</h2>
              <p class="text-slate-500 max-w-md mx-auto mb-8">
                Data Anda telah kami terima. Silakan cetak bukti pendaftaran dan pantau status verifikasi secara berkala.
              </p>
              <div class="bg-slate-50 dark:bg-surface-darker p-6 rounded-xl border border-dashed border-primary mb-8 max-w-sm mx-auto">
                <p class="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Nomor Registrasi</p>
                <p class="text-3xl font-mono font-bold text-primary">PPDB-2024-8821</p>
              </div>
              <div class="flex gap-4 justify-center">
                <button class="px-6 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 flex items-center gap-2">
                  <span class="material-icons text-sm">print</span> Cetak Bukti
                </button>
                <Link to="/" class="px-6 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          {step < 4 && (
            <div class="px-8 py-6 bg-slate-50 dark:bg-surface-darker border-t border-slate-200 dark:border-slate-800 flex justify-between">
              <button 
                onClick={() => setStep(s => Math.max(1, s - 1))}
                disabled={step === 1}
                class={`px-6 py-2.5 rounded-lg font-medium border ${step === 1 ? 'opacity-50 cursor-not-allowed border-transparent' : 'border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800'}`}
              >
                Kembali
              </button>
              <button 
                onClick={() => setStep(s => Math.min(4, s + 1))}
                class="px-8 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary-hover shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                {step === 3 ? 'Kirim Data' : 'Selanjutnya'}
                <span class="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PPDBRegistration;