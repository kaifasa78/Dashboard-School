import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/Layouts';

const LandingPage: React.FC = () => {
  return (
    <div class="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section class="relative bg-background-dark min-h-[600px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img 
            alt="School Building" 
            class="w-full h-full object-cover object-center opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFl_CzZdC4-1q61yCAUMmymaFw40Eks2CH5Xh-MUsuEoiupVf5J9g-DNDm3psUx17vjmoj_1xcxe_XqTABSB7rcICJDO_ITEh8TvKUg2kMGcQBmV6P6ITtUpRcGUYxY3CtfV5eH6ACs6hcpZqHzA18sS1J9Pc6T2w4OYG4fJGWfFZodP6tE2TCexiOOhN2rV8yFRCkb1GPpZe9DfAzYoSTzNu3yG5HBTw3p87Om7aehprZYhTCII3LDfGTVrRV3iBw8CQSPRt2xTI" 
          />
          <div class="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-primary/30"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8 animate-fade-in-up">
              <div class="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Pendaftaran PPDB Telah Dibuka
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                SELAMAT DATANG DI <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">SMA NUSANTARA</span>
              </h1>
              <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Mewujudkan generasi unggul, berkarakter, dan berdaya saing global melalui pendidikan berkualitas dan inovasi berkelanjutan.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/ppdb/register" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-primary bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span class="material-icons-outlined mr-2">app_registration</span>
                  Daftar PPDB
                </Link>
                <a href="#news" class="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                  <span class="material-icons-outlined mr-2">newspaper</span>
                  Berita Terbaru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-12 bg-white dark:bg-surface-dark relative -mt-16 z-20 mx-4 lg:mx-8 rounded-xl shadow-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { icon: 'groups', val: '500+', label: 'Siswa Aktif' },
              { icon: 'local_library', val: '50+', label: 'Guru Berdedikasi' },
              { icon: 'school', val: '1000+', label: 'Alumni Sukses' },
              { icon: 'emoji_events', val: '15+', label: 'Penghargaan Nasional' }
            ].map((stat, idx) => (
              <div key={idx} class="flex items-center justify-center md:justify-start space-x-4 p-2">
                <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <span class="material-icons-outlined text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <p class="text-3xl font-bold text-slate-900 dark:text-white">{stat.val}</p>
                  <p class="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Welcome */}
      <section class="py-20 bg-background-light dark:bg-background-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div class="w-full lg:w-1/2 relative group">
              <div class="absolute -inset-4 bg-gradient-to-r from-primary to-teal-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  alt="Principal" 
                  class="w-full h-full object-cover transform transition duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0PEDX_Cmkfk-6h9mNvgRXOz7urIOkPMilgztmnFxkzUh2Kev2miFN6gTpIvBhIpk5bnPe8cuoCan5xcFjHvhh8oWCkrpMcGIiCc5mEPtwmFMIQvewE2zq3urPqYU-5OxfMXgqteWVOnV4iyrZhj1G1ZTjGm19T_qsiThDdHmFK0UbjC22zoAcCpVWvN-xEebf0HgSrpoK34odg3dHeTT1zmo-QQvA8UHwFfpnbPEHduX0NQdHkDKe0JkUMrEBhMNDlpBmJmzvpd8" 
                />
              </div>
              <div class="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-lg shadow-lg">
                <h4 class="text-lg font-bold text-slate-900 dark:text-white">Dr. Budi Santoso, M.Pd</h4>
                <p class="text-primary text-sm font-medium">Kepala Sekolah SMA Nusantara</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 space-y-6">
              <div class="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-wider text-sm">
                <span class="w-8 h-[2px] bg-primary"></span>
                <span>Sambutan Kepala Sekolah</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Membangun Masa Depan Gemilang</h2>
              <div class="relative pl-6 border-l-4 border-primary/30">
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "SMA Nusantara berkomitmen untuk tidak hanya mencetak siswa yang cerdas secara akademis, tetapi juga memiliki integritas moral yang tinggi. Kami percaya bahwa pendidikan adalah jembatan menuju masa depan yang lebih baik."
                </p>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Kami menyediakan fasilitas modern dan kurikulum yang adaptif terhadap perkembangan zaman, didukung oleh tenaga pengajar profesional yang siap membimbing siswa menggali potensi terbaik mereka.
              </p>
              <button class="text-primary hover:text-primary-hover font-semibold inline-flex items-center group">
                Baca Selengkapnya
                <span class="material-icons-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" class="py-20 bg-white dark:bg-surface-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Berita Terkini</span>
            <h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Kabar Dari Sekolah</h2>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Juara 1 Olimpiade Sains Nasional", 
                date: "12 Okt 2023", 
                tag: "Prestasi", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZCMLotIqHzz7pS3xjE-j3d5fN73VGC-Aik6vF0mAPa6GjfT451F_nyfDnRhfvpCVuZdB6D14AuCBNmS3rwo-Fg9WrvdzOSP1EAIzdqFiPkx87dqWbqFDYRsrQgzntDnGFsXm9yjpkSKS_yNVd8nrhzfS1veh3684wyKlHOO3Y4aLOZRWgBlmVqFGtEwSEuxY6GxZ8Ii-8QyJQeBrgRULnjnW3jVjj6dDON_YohKlzPSH3zjYbBao2U86we_-xV2L9_jryPzYP6rw"
              },
              { 
                title: "Penerimaan Peserta Didik Baru (PPDB)", 
                date: "05 Okt 2023", 
                tag: "Akademik", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8CII9ZH4GQXq6Dj9lv9-OAKlr6HT31JwPAt4FIW6gt2Wa3sWooIUbvAx9MBNWkpvXzvWoWn7bbqfBb8foC-mZvnYKZVK6c61T1aWm3F2B1BgW5tqa73g0EoNvsf6fvbzoDClA6j-9GmPNKmnhYgwYf9SH2MY57irnZENvD_0y239few0tcg5-gcFgLqMh3tzsjxROkEyLBExi_kKspwoRYutQEtimhiKt7cSxmR5sLzVEj6TOwnqmHX9y8pfxHRRGy7QXOoayI_o"
              },
              { 
                title: "Kunjungan Industri ke Tech Valley", 
                date: "28 Sep 2023", 
                tag: "Kegiatan", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMCj3vyW_cXLmu7VwQoDohzI1hZHJMyX_7JujiOjceZPA7f8LAJ7ooFw1uyOaV5ZsgzszJUwhoTsth3PDJz3sqN0KTlAKpomtLzf8e6daFGtFxRb37-SWi9GAn0bi2pK17AmoUVQw-wZaysqDLqPiPRf1iwC0F6sqmdpfgzvN1c1QL0hVLpMHZ3XmB-4FD6GGFfjyAYx88cFnD-R0fyF1L8hmE5mAzNo-SL9kUre6O6EhHclWB6fv6V5kZOxheTjsrdt15jxE2j0k"
              }
            ].map((news, idx) => (
              <div key={idx} class="group bg-background-light dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
                <div class="relative h-56 overflow-hidden">
                  <img alt={news.title} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src={news.img} />
                  <div class="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{news.tag}</div>
                </div>
                <div class="p-6 flex-1 flex flex-col">
                  <div class="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span class="material-icons-outlined text-base mr-1">calendar_today</span>
                    {news.date}
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{news.title}</h3>
                  <a href="#" class="inline-flex items-center text-primary font-semibold hover:underline mt-auto">
                    Baca Berita <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
