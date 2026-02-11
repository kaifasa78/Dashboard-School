import React from 'react';
import { Navbar, Footer } from '../components/Layouts';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPrKeztdT70JAsJIGMdoCjBoojOznrHqdTsrp6YpV9pLwS0zXWsgqNL6MC_Q3msOx6qx1wbTMRQpfEVM2vg8qRyjJVqazvz2BF3ypn1c6zM4Hi4rOA8sEmhHIRG67aNAy06voXjnLTyajurfSSFsqu8oTJyXlg_TOmR5sN0aTzFy_06_OLiE_vnzeRBWXiCVKrkXWYkRmMNqzjEkmBrDwBAp1VVh3MvgAF6z8fr5Za6gj9uS4scShurrEneqc8QrzLNp__laOa0SM", title: "Wisuda 2023", category: "Acara" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNzFrTBCPjzo7CJ3JtCAqwqvdi80gHUl0ET-Pn4y7BFSJou6oqz_lRj8X_VPzyNOcvDTJyRAbDYH5vFWZCIccDtH6qZrdXV0cY5nDxWLXKujhaZSVawvmjSfK3yZfjS4tZX9uKFd_9pvm6J1iel1RoRXdmeTYHQ-fWDNAOzOQFQ91EC4ROm03F3c-OTQaINzDKF_3IZQeeQeYdceRSAmqpQbxy8tP4vqLqT9byCMtf21vf1DE3oKv6UItrsBUsoRVB2IZgfAeaHRY", title: "Perpustakaan Digital", category: "Fasilitas" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7L7S2l6vPiK-7NqjJJU9Or3TVNbN5HSLCkMd66uCzHvtJox51Bzvs6gZUoAFkUkTPhk7_vzInCuPiUvqZJVnRPONBE_G_MukB7ebk4BkuCcSK-oUgGn53fKeBWNi5OYEE4Lt66oblEfVnKoW_Sw8dVBtyc5PMXUxL1cZdyAps_CieSLn9KUKhe4RLMjSf9WtlxzdcZqJL873k2DqslnwDybEKxHbDE-dTxPa4cnV2uh87mxrb0ewGtCuGV8TNf00nX77Dmqb-q_Q", title: "Praktikum Kimia", category: "KBM" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcKnzYViAInFezymoa9q0JuFVjmUlFhU2gOr2m-Iwr3nDxIAv9Ur2uvTW8kN8F7AGQ3XHXlIrd8YgKo5Jv8rRbEDnmVRCbS74G421ckFwHZq1nlI4Nsed0T8LOG6H3sgmJoAbaFQXEVCXgyjLUWTyoT1hICPD2hKPDTg4yTjwrtIrhKqrUFe81lH9FGF5QccHipNvmk0IdMgtqRmtcJfsGQKELVlV9aDj0cxa-RspESe1qEzRRaDF-MUhILaGGBLJ0ghpVsmIxn_8", title: "Tim Basket Juara", category: "Prestasi" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmwnDZl6f6_3vkEtm_71dl1YNUyU51Q0t3O0mrEO5wNC0jBWNghMA9mTagN-xIQMKZ0vh7SgjMg4A_RjVL6bpQ209qky6AWfuzLyAdIHLH9e3ZhEE4uoBmtBOD3p0_c_eW6KfuZgwOVJrk37_iAqke0PtiUV6n6Kv-799XGiz-CFWyX6FWvVHl0_vvZ-hzaSE9pj49Z1hlvINdRQh63vaoc8ulaP5dbWK2JsXnybGKOx3TrA8tKtw05a1LkhLtXREO-qzUAaO6oX8", title: "Belajar Outdoor", category: "KBM" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Dl1K5G_gTwSpO5BQD0IW2eNZZJj1RKVNwnApfBgPlFlvwEMOE9cAGG1JyPQpZkyNgdAWffTmHNspGaeN6U-lWsCY3F0zu0OhxohZZoXvgJLtqfRV8RRK4ZJnrLBGnKNq27ppdqrhj_HBGHeur5IeqpEaGRUpeMP3GNkNErMPAkw3JvxiVCRouvwq8qU1mQJNq9w7ANn07R8JHNqyNYLsNTtuF1FVNHGEAhTojd7McoWim3xmoTLa862AJDlVziTCmtTiH14UpWc", title: "Lab Komputer", category: "Fasilitas" }
  ];

  return (
    <div class="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      <Navbar />
      <main class="flex-grow">
        <section class="bg-white dark:bg-slate-900 pt-16 pb-12 border-b border-slate-100 dark:border-slate-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Galeri Foto</h1>
            <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Merekam jejak prestasi, kreativitas, dan momen berharga siswa SMA Nusantara.
            </p>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            {['Semua', 'Kegiatan', 'Fasilitas', 'Prestasi', 'Acara'].map((filter, idx) => (
              <button key={idx} class={`px-6 py-2.5 rounded-full font-medium transition-all ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'}`}>
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} class="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] cursor-pointer">
                <img src={img.src} alt={img.title} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span class="inline-block px-2 py-1 bg-primary/90 text-white text-xs rounded-md mb-2 font-medium">{img.category}</span>
                    <h3 class="text-white font-bold text-lg">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;