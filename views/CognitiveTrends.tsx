
import React from 'react';

interface Props {
  onBack: () => void;
}

const CognitiveTrends: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in slide-in-from-right duration-500 overflow-y-auto no-scrollbar pb-24">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="material-symbols-outlined text-primary">arrow_back</button>
            <h1 className="text-xl font-bold tracking-tight uppercase">Cognitive Analysis</h1>
          </div>
          <button className="bg-surface p-2 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary text-xl">notifications</span>
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80">Base Model Calibration</p>
            <p className="text-xs font-bold text-primary">85% COMPLETE</p>
          </div>
          <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '85%' }}></div>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-8">
        <section className="overflow-x-auto no-scrollbar flex gap-3">
          {['Motor Control', 'Speech Fluidity', 'Typing Speed', 'Sleep Regularity'].map((label, i) => (
            <button key={i} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${i === 0 ? 'bg-primary text-background-dark border-primary' : 'bg-surface text-primary/60 border-primary/20'}`}>
              {label}
            </button>
          ))}
        </section>

        <section className="bg-surface/30 rounded-xl p-4 border border-primary/10 relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">30-Day Cognitive Trend</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white tracking-tighter">-15%</span>
                <span className="text-xs font-medium text-accent-red">DEVIATION DETECTED</span>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center gap-2 justify-end">
                <span className="w-3 h-3 rounded-full border border-primary/40 bg-primary/10"></span>
                <span className="text-[10px] uppercase font-bold text-primary/60">Baseline</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-[10px] uppercase font-bold text-white">Real-time</span>
              </div>
            </div>
          </div>

          <div className="h-[220px] w-full relative">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
              <path d="M0,110 Q50,100 100,115 T200,105 T300,110 T400,115" fill="none" stroke="rgba(13,185,242,0.4)" strokeDasharray="4,4" strokeWidth="2" />
              <path d="M0,80 L40,95 L80,75 L120,110 L160,100 L200,135 L240,120 L280,155 L320,140 L360,175 L400,165" fill="none" stroke="#0db9f2" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="280" cy="155" r="6" fill="#ff4d4d" className="animate-pulse" />
            </svg>
            <div className="absolute top-[160px] left-[260px] flex flex-col items-center">
              <div className="w-px h-6 bg-accent-red/50"></div>
              <div className="bg-accent-red px-2 py-0.5 rounded text-[8px] font-bold text-white">CRITICAL POINT</div>
            </div>
          </div>
        </section>

        <section className="bg-accent-red/10 rounded-xl p-5 border border-accent-red/30 flex gap-4 items-start">
          <div className="bg-accent-red p-2 rounded-lg shrink-0">
            <span className="material-symbols-outlined text-white text-xl">warning</span>
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Deviation Detected</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Motor Control is <span className="text-accent-red font-bold">15% below</span> your personal baseline. Likely due to REM sleep lack last night.
            </p>
            <button className="mt-2 text-[10px] font-bold text-accent-red uppercase tracking-widest flex items-center gap-1 group">
              Run Detailed Assessment <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface rounded-xl p-4 border border-primary/5">
            <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">Rolling Avg</p>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold">94.2</span>
              <span className="text-[10px] text-primary/80 mb-1">pts</span>
            </div>
          </div>
          <div className="bg-surface rounded-xl p-4 border border-primary/5">
            <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">Stability Score</p>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold">High</span>
              <div className="flex mb-1.5 gap-0.5">
                <div className="w-1 h-2 bg-primary"></div>
                <div className="w-1 h-2 bg-primary"></div>
                <div className="w-1 h-2 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CognitiveTrends;
