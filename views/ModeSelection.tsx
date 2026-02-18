
import React from 'react';

interface Props {
  onSelect: (mode: 'elderly' | 'youth') => void;
  onAdmin: () => void;
}

const ModeSelection: React.FC<Props> = ({ onSelect, onAdmin }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-between p-6 animate-in fade-in duration-700">
      <div className="w-full flex flex-col items-center pt-12">
        <button 
          onClick={onAdmin}
          className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 transition-all hover:scale-110 active:scale-95"
        >
          <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            psychology
          </span>
        </button>
        <h1 className="text-4xl font-bold tracking-tight text-center">
          Chi Le Me <span className="text-primary block mt-1 font-medium text-2xl">(痴了么)</span>
        </h1>
      </div>

      <div className="w-full max-w-md space-y-6 my-12">
        <button 
          onClick={() => onSelect('elderly')}
          className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#e7f3e8] to-[#fdfcf0] p-8 text-left transition-all hover:scale-[1.02] active:scale-95 shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-slate-800 text-3xl font-bold tracking-tight">Elderly Mode</h2>
              <p className="text-slate-600 text-lg font-medium">Guardian & Senior Care</p>
              <div className="flex items-center gap-2 mt-4 text-emerald-700 font-semibold bg-emerald-100/50 w-fit px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="text-sm">Accessible & Simple</span>
              </div>
            </div>
            <div className="bg-white/80 p-4 rounded-full shadow-sm text-emerald-600">
              <span className="material-symbols-outlined text-5xl">volunteer_activism</span>
            </div>
          </div>
        </button>

        <button 
          onClick={() => onSelect('youth')}
          className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#061a21] to-[#0db9f2] p-8 text-left transition-all hover:scale-[1.02] active:scale-95 shadow-xl border border-primary/30"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-white text-3xl font-bold tracking-tight">Youth Mode</h2>
              <p className="text-primary/80 text-lg font-medium">Brain Gym & Training</p>
              <div className="flex items-center gap-2 mt-4 text-primary font-semibold bg-primary/10 w-fit px-3 py-1 rounded-full border border-primary/20">
                <span className="material-symbols-outlined text-sm">bolt</span>
                <span className="text-sm">High Performance</span>
              </div>
            </div>
            <div className="bg-primary/20 p-4 rounded-full border border-primary/30 text-primary">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
            </div>
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col items-center gap-8 pb-8 text-center">
        <p className="text-slate-500 text-sm font-medium tracking-wide uppercase max-w-[280px]">
          Comprehensive Multi-modal Cognitive Health Assessment
        </p>
        <div className="text-slate-600 text-xs flex items-center gap-2">
          <span>Powered by NeuralAI</span>
          <span className="h-1 w-1 bg-slate-600 rounded-full"></span>
          <span>v2.4.0</span>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
