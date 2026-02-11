import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
      {/* Animated Background Effects */}
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>

      <div class="relative z-10 w-full max-w-md p-8 bg-surface-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        <div class="flex flex-col items-center mb-10">
          <div class="w-16 h-16 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
            <span class="material-icons text-white text-3xl">school</span>
          </div>
          <h1 class="text-3xl font-bold text-white">Admin Panel</h1>
          <p class="text-slate-400 mt-1">Secure Access Portal</p>
        </div>

        <form onSubmit={handleLogin} class="space-y-6">
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Username</label>
            <div class="relative">
              <span class="absolute left-3 top-3.5 text-slate-500 material-icons text-sm">person</span>
              <input 
                type="text" 
                placeholder="Enter admin ID"
                class="w-full bg-surface-darker border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Password</label>
            <div class="relative">
              <span class="absolute left-3 top-3.5 text-slate-500 material-icons text-sm">lock</span>
              <input 
                type="password" 
                placeholder="••••••••••••"
                class="w-full bg-surface-darker border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center text-slate-400 cursor-pointer hover:text-slate-300">
              <input type="checkbox" class="mr-2 rounded border-slate-700 bg-surface-darker text-primary focus:ring-primary" />
              Remember me
            </label>
            <a href="#" class="text-primary hover:text-primary-light">Forgot password?</a>
          </div>

          <button 
            type="submit"
            class="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5"
          >
            MASUK
          </button>
        </form>

        <div class="mt-8 text-center text-xs text-slate-500">
          © 2024 School Administration System
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
