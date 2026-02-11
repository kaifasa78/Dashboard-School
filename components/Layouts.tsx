import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-primary dark:text-primary font-bold" : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary";

  return (
    <nav class="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <Link to="/" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              N
            </div>
            <span class="font-bold text-xl tracking-tight text-slate-900 dark:text-white">SMA Nusantara</span>
          </Link>

          <div class="hidden md:flex space-x-8 items-center">
            <Link to="/" class={`${isActive('/')} font-medium transition-colors`}>Beranda</Link>
            <Link to="/gallery" class={`${isActive('/gallery')} font-medium transition-colors`}>Galeri</Link>
            <Link to="/ppdb/register" class={`${isActive('/ppdb/register')} font-medium transition-colors`}>PPDB</Link>
            <a href="#" class="text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors">Alumni</a>
            <a href="#" class="text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors">Profil</a>
          </div>

          <div class="hidden md:flex gap-3">
             <Link to="/admin" class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Admin
            </Link>
            <Link to="/ppdb/register" class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5">
              Daftar Sekarang
            </Link>
          </div>

          <div class="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} class="p-2 rounded-md text-slate-400 hover:text-slate-500 focus:outline-none">
              <span class="material-icons-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div class="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Beranda</Link>
            <Link to="/ppdb/register" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">PPDB</Link>
            <Link to="/gallery" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Galeri</Link>
            <Link to="/admin" class="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Login Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div class="space-y-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
              <span class="font-bold text-xl text-white">SMA Nusantara</span>
            </div>
            <p class="text-sm leading-relaxed text-slate-400">
              Membangun karakter bangsa melalui pendidikan berkualitas tinggi dengan mengedepankan nilai-nilai luhur dan teknologi.
            </p>
          </div>
          <div>
            <h3 class="text-white font-bold mb-6">Akademik</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-primary transition-colors">Kurikulum</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">E-Learning</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Perpustakaan</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-6">Tentang Kami</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-primary transition-colors">Sejarah</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Visi & Misi</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Guru & Staf</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-6">Hubungi Kami</h3>
            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3">
                <span class="material-icons-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Jl. Pendidikan No. 1, Kota Pelajar, Indonesia 12345</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-icons-outlined text-primary text-lg">phone</span>
                <span>(021) 1234-5678</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-icons-outlined text-primary text-lg">email</span>
                <span>info@smanusantara.sch.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 SMA Nusantara. All rights reserved.</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
