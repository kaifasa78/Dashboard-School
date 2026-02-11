import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Mock Data
const trendData = [
  { name: '01 Jun', val: 20 }, { name: '05 Jun', val: 45 }, { name: '10 Jun', val: 30 },
  { name: '15 Jun', val: 80 }, { name: '20 Jun', val: 65 }, { name: '25 Jun', val: 100 },
  { name: '30 Jun', val: 85 },
];

const pieData = [
  { name: 'Diterima', value: 680, color: '#10b981' },
  { name: 'Menunggu', value: 170, color: '#f59e0b' },
  { name: 'Ditolak', value: 150, color: '#ef4444' },
];

const schoolData = [
  { name: 'SMPN 1', applicants: 245 },
  { name: 'SMP Harapan', applicants: 180 },
  { name: 'SMP Al-Azhar', applicants: 120 },
  { name: 'SMPN 12', applicants: 95 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div class="flex h-screen bg-background-light dark:bg-background-dark font-body text-slate-600 dark:text-slate-300">
      {/* Sidebar */}
      <aside class="w-64 bg-surface-dark border-r border-slate-700 hidden lg:flex flex-col">
        <div class="h-16 flex items-center px-6 border-b border-slate-700">
          <span class="text-xl font-bold text-white tracking-tight">Admin Panel</span>
        </div>
        <nav class="flex-1 p-4 space-y-1">
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 bg-primary rounded-lg text-white">
            <span class="material-icons text-sm">dashboard</span> Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-700 rounded-lg transition-colors">
            <span class="material-icons text-sm">people</span> Data Pendaftar
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-700 rounded-lg transition-colors">
            <span class="material-icons text-sm">school</span> Sekolah Asal
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-700 rounded-lg transition-colors">
            <span class="material-icons text-sm">settings</span> Pengaturan
          </a>
        </nav>
        <div class="p-4 border-t border-slate-700">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-slate-600"></div>
            <div>
              <p class="text-sm font-bold text-white">Admin User</p>
              <p class="text-xs">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="h-16 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 flex justify-between items-center px-8">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white">Dashboard Overview</h2>
          <div class="flex gap-4">
            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-green-500"></span> Live
            </span>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
          {/* Stats Cards */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-medium">Total Pendaftar</p>
                  <h3 class="text-3xl font-bold text-slate-900 dark:text-white mt-2">1,240</h3>
                </div>
                <span class="material-icons text-primary bg-primary/10 p-2 rounded-lg">groups</span>
              </div>
              <div class="mt-4 text-xs text-green-500 font-bold">+12% vs last year</div>
            </div>
            
            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-medium">Verifikasi Pending</p>
                  <h3 class="text-3xl font-bold text-slate-900 dark:text-white mt-2">45</h3>
                </div>
                <span class="material-icons text-warning bg-warning/10 p-2 rounded-lg">pending_actions</span>
              </div>
              <div class="mt-4 text-xs text-warning font-bold">Needs Action</div>
            </div>

            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-medium">Diterima</p>
                  <h3 class="text-3xl font-bold text-slate-900 dark:text-white mt-2">680</h3>
                </div>
                <span class="material-icons text-success bg-success/10 p-2 rounded-lg">check_circle</span>
              </div>
              <div class="mt-4 text-xs text-slate-400">Quota: 1000</div>
            </div>

            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-medium">Rata-rata Nilai</p>
                  <h3 class="text-3xl font-bold text-slate-900 dark:text-white mt-2">88.5</h3>
                </div>
                <span class="material-icons text-primary bg-primary/10 p-2 rounded-lg">analytics</span>
              </div>
              <div class="mt-4 text-xs text-green-500 font-bold">+2.1 pts</div>
            </div>
          </div>

          {/* Charts Area */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Trend Chart */}
            <div class="lg:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Tren Pendaftaran</h3>
              <div class="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1152d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1152d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff'}}
                      itemStyle={{color: '#fff'}}
                    />
                    <Area type="monotone" dataKey="val" stroke="#1152d4" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Status Pie Chart */}
            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Status Distribusi</h3>
              <div class="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div class="space-y-3 mt-4">
                {pieData.map((item, idx) => (
                  <div key={idx} class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></span>
                      <span>{item.name}</span>
                    </div>
                    <span class="font-bold text-slate-900 dark:text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Feeder Schools */}
            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Top Sekolah Asal (Feeder)</h3>
              <div class="space-y-4">
                {schoolData.map((school, idx) => (
                  <div key={idx}>
                    <div class="flex justify-between text-sm mb-1">
                      <span class="font-medium text-slate-700 dark:text-slate-200">{school.name}</span>
                      <span class="font-bold">{school.applicants} Siswa</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        class="bg-primary h-2 rounded-full" 
                        style={{width: `${(school.applicants / 300) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Applicants Table */}
            <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Pendaftar Terbaru</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                  <thead>
                    <tr class="text-slate-500 border-b border-slate-200 dark:border-slate-700">
                      <th class="pb-3 font-medium">Nama</th>
                      <th class="pb-3 font-medium">Asal Sekolah</th>
                      <th class="pb-3 font-medium">Nilai</th>
                      <th class="pb-3 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      { name: "Ahmad Fauzi", school: "SMPN 1 JKT", score: 88.5, status: "Verified" },
                      { name: "Siti Nurhaliza", school: "SMP Harapan", score: 92.1, status: "Pending" },
                      { name: "Budi Santoso", school: "SMP Al-Azhar", score: 76.4, status: "Rejected" },
                    ].map((row, idx) => (
                      <tr key={idx} class="group hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td class="py-3 font-medium text-slate-900 dark:text-white">{row.name}</td>
                        <td class="py-3">{row.school}</td>
                        <td class="py-3 font-bold">{row.score}</td>
                        <td class="py-3 text-right">
                          <span class={`inline-block px-2 py-1 rounded text-xs font-bold 
                            ${row.status === 'Verified' ? 'bg-green-100 text-green-700' : 
                              row.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-red-100 text-red-700'}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
