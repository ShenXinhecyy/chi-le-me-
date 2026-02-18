
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const YouthDashboard: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in slide-in-from-left duration-500 overflow-y-auto no-scrollbar pb-24">
      <header className="sticky top-0 z-50 glass-panel px-6 py-4 flex items-center justify-between border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
            <span className="material-symbols-outlined text-primary text-2xl">neurology</span>
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary">Chi Le Me</h2>
            <p className="text-[10px] text-accent-green flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              System Status: Optimal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-white/10" onClick={() => onNavigate('MODE_SELECTION')}>
            <span className="material-symbols-outlined text-white/70">logout</span>
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
            <img className="w-full h-full object-cover" src="https://picsum.photos/seed/youth/200/200" />
          </div>
        </div>
      </header>

      <main className="p-6">
        <section className="relative mb-10 flex flex-col items-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle className="text-primary/10" cx="128" cy="128" fill="transparent" r="116" stroke="currentColor" strokeWidth="12" />
              <circle className="text-primary shadow-[0_0_15px_#0db9f2]" cx="128" cy="128" fill="transparent" r="116" stroke="currentColor" strokeDasharray="728" strokeDashoffset="87" strokeLinecap="round" strokeWidth="12" />
            </svg>
            <div className="text-center z-10">
              <p className="text-xs font-medium text-primary/60 tracking-[0.2em] uppercase">Brain Power</p>
              <h1 className="text-7xl font-bold tracking-tighter">88<span className="text-2xl text-primary/40">/100</span></h1>
              <p className="text-accent-green text-sm font-bold mt-1">+5.2% Growth</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-10">
          {[
            { label: 'Memory', val: '92%', icon: 'memory' },
            { label: 'Attention', val: '84%', icon: 'visibility' },
            { label: 'Executive', val: '78%', icon: 'settings_input_component' },
            { label: 'Sleep Rhythm', val: '96%', icon: 'bedtime' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 rounded-xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary mb-2">{stat.icon}</span>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-bold">{stat.val}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold">Weekly Improvements</h3>
            <button onClick={() => onNavigate('COGNITIVE_TRENDS')} className="text-xs text-primary underline">Detailed Logs</button>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] uppercase font-bold tracking-tighter">
                <span>Cognitive Load</span>
                <span className="text-primary">72/100 XP</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] uppercase font-bold tracking-tighter">
                <span>Logic Streak</span>
                <span className="text-accent-green">14 Days</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent-green rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-bold mb-4">Daily Quests</h3>
          <div onClick={() => onNavigate('CDT_ASSESSMENT')} className="glass-panel p-4 rounded-xl border-l-4 border-l-primary flex items-center justify-between cursor-pointer active:scale-95 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Clock Sprint</h4>
                <p className="text-xs text-white/50">Recall 15 neural patterns</p>
              </div>
            </div>
            <button className="bg-primary text-background-dark font-bold text-xs py-2 px-4 rounded-full">START</button>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 p-4 z-50">
        <div className="max-w-md mx-auto glass-panel rounded-full p-2 flex items-center justify-around border border-white/10 shadow-2xl">
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined">dashboard</span>
            </div>
            <span className="text-[10px] font-bold">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">target</span>
            <span className="text-[10px]">Quests</span>
          </a>
          <button className="w-14 h-14 -mt-10 bg-primary text-background-dark rounded-full shadow-[0_0_20px_#0db9f299] flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
          </button>
          <a className="flex flex-col items-center gap-1 text-white/50" href="#" onClick={() => onNavigate('COGNITIVE_TRENDS')}>
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px]">Analysis</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px]">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default YouthDashboard;
