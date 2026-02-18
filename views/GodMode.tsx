
import React, { useState } from 'react';
import { AppView } from '../types';

interface Props {
  onBack: () => void;
  onNavigate: (view: AppView) => void;
}

const GodMode: React.FC<Props> = ({ onBack, onNavigate }) => {
  const [weights, setWeights] = useState({ lang: 35, motor: 25, rhythm: 20, memory: 20 });

  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in fade-in duration-500 overflow-y-auto no-scrollbar pb-24">
      <header className="border-b border-primary/20 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 bg-primary/10 rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </button>
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase">God Mode</h1>
              <p className="text-[10px] text-primary font-mono tracking-[0.2em]">LOGIC & WEIGHT CONFIGURATION</p>
            </div>
          </div>
          <button onClick={() => onNavigate('PASSIVE_MONITORING')} className="bg-primary/10 p-2 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary">analytics</span>
          </button>
        </div>
      </header>

      <main className="p-6 space-y-8">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">balance</span>
              <h2 className="text-lg font-bold uppercase">Dynamic Weight Allocation</h2>
            </div>
            <div className="bg-primary/20 px-4 py-1 rounded-full border border-primary/40">
              <span className="text-primary font-bold font-mono">TOTAL: 100%</span>
            </div>
          </div>

          <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 space-y-4">
            {Object.entries(weights).map(([key, val]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between text-sm font-medium capitalize">
                  <span>{key} Weight</span>
                  <span className="text-primary font-mono">{val}%</span>
                </div>
                <input 
                  type="range" 
                  value={val} 
                  onChange={(e) => setWeights({ ...weights, [key]: parseInt(e.target.value) })}
                  className="w-full h-2 bg-primary/20 rounded-full appearance-none cursor-pointer accent-primary" 
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">warning</span> Thresholds
            </h3>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-primary/70">Mild Impairment</label>
                <input type="number" defaultValue="4.5" className="w-full bg-background-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white font-mono" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-primary/70">Severe Impairment</label>
                <input type="number" defaultValue="7.2" className="w-full bg-background-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white font-mono" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">query_stats</span> Algorithm
            </h3>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 h-full flex flex-col justify-between">
              <select className="w-full bg-background-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white">
                <option>Bayesian Update (Dynamic)</option>
                <option>Kalman Filter</option>
                <option>Exponential Smoothing</option>
              </select>
              <div className="p-3 bg-primary/10 rounded border border-dashed border-primary/30 mt-4">
                <p className="text-[11px] text-primary/80 uppercase italic leading-tight">
                  Logic: Current selection prioritizes recent activity clusters with a 0.85 decay factor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <button className="bg-transparent border-2 border-primary/40 hover:border-primary px-8 py-5 rounded-full transition-all text-primary font-bold uppercase tracking-widest text-sm">
            Stress Test
          </button>
          <button className="bg-primary px-8 py-5 rounded-full shadow-lg text-white font-bold uppercase tracking-widest text-sm">
            Export JSON
          </button>
        </section>
      </main>

      <nav className="border-t border-primary/20 bg-background-dark/95 backdrop-blur-xl px-4 pb-6 pt-3 flex justify-around items-center mt-auto">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">terminal</span>
          <span className="text-[10px] uppercase font-bold">Logic</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">sliders</span>
          <span className="text-[10px] uppercase font-bold">Tuning</span>
        </button>
        <button className="bg-primary size-14 -mt-10 rounded-full flex items-center justify-center shadow-lg text-white">
          <span className="material-symbols-outlined text-3xl">save</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">multiline_chart</span>
          <span className="text-[10px] uppercase font-bold">Metrics</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">shield_with_heart</span>
          <span className="text-[10px] uppercase font-bold">Safety</span>
        </button>
      </nav>
    </div>
  );
};

export default GodMode;
