
import React from 'react';

interface Props {
  onBack: () => void;
}

const PassiveMonitoring: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0a0f12] animate-in slide-in-from-bottom duration-500 overflow-y-auto no-scrollbar pb-32">
      <header className="sticky top-0 z-10 bg-[#0a0f12]/80 backdrop-blur-md border-b border-primary/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="material-symbols-outlined text-primary text-3xl">biotech</button>
          <div>
            <h1 className="text-sm font-bold tracking-widest text-primary/80 uppercase">System Logs</h1>
            <h2 className="text-lg font-bold leading-none shadow-primary/20">PASSIVE BIOMARKERS</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold text-primary tracking-tighter">LIVE</span>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Mean Flight Time', val: '892ms', diff: '+0.5%', color: 'text-emerald-400', progress: '70%', icon: 'speed' },
            { label: 'Jitter/Variability', val: '12ms', diff: '-1.2%', color: 'text-rose-500', progress: '35%', icon: 'waves' },
            { label: 'Hold Time', val: '115ms', diff: '+0.2%', color: 'text-emerald-400', progress: '55%', icon: 'timer' },
          ].map((m, i) => (
            <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-5 relative overflow-hidden group">
              <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">{m.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold tracking-tight">{m.val}</span>
                <span className={`text-xs font-bold ${m.color}`}>{m.diff}</span>
              </div>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: m.progress }}></div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#121a1d] border border-primary/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">analytics</span>
              Jitter Analysis
            </h3>
            <span className="text-[10px] font-mono text-primary/50">COGNITIVE_CONFIG.gold_standard: 884ms</span>
          </div>
          <div className="relative pt-4 pb-8">
            <div className="flex justify-between text-[10px] font-mono text-white/40 mb-2 uppercase">
              <span>-50ms</span>
              <span>Gold Standard</span>
              <span>+50ms</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-primary/40"></div>
              <div className="absolute left-[48%] right-[40%] top-0 h-full bg-primary/20 border-x border-primary/40"></div>
              <div className="absolute left-[54%] -translate-x-1/2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary shadow-xl border-2 border-[#0a0f12]"></div>
            </div>
            <div className="absolute left-[54%] translate-y-3 -translate-x-1/2 text-[10px] font-bold text-primary">Δ +8ms</div>
          </div>
        </section>

        <section className="flex flex-col min-h-[300px]">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary/60 px-2 mb-2">Live Log Feed [SYSTEM_EXEC]</h3>
          <div className="bg-black/40 border border-primary/20 rounded-xl flex-1 relative overflow-hidden">
            <div className="absolute inset-0 p-4 font-mono text-xs overflow-y-auto flex flex-col gap-1 leading-relaxed">
              <p className="opacity-50 text-white">[10:22:01] SYS_READY: Passive monitoring initiated...</p>
              <p className="text-white">[10:22:04] Key: <span className="text-primary">"A"</span> | FT: 884ms | HT: 110ms</p>
              <p className="text-white">[10:22:05] Key: <span className="text-primary">"Space"</span> | FT: 912ms | HT: 120ms</p>
              <p className="text-white">[10:22:06] Key: <span className="text-primary">"Shift"</span> | FT: 890ms | HT: 112ms</p>
              <div className="bg-primary/10 -mx-4 px-4 py-0.5 border-y border-primary/10">
                <p className="text-white font-bold">[10:22:10] Key: <span className="text-primary">"T"</span> | FT: 882ms | HT: 118ms <span className="ml-2 text-[10px] bg-primary text-black px-1 rounded">NEW</span></p>
              </div>
              <p className="opacity-40 text-white">[10:22:11] ... awaiting input signal</p>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#0a0f12]/80 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 shadow-2xl flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">monitoring</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Monitor</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">bar_chart_4_bars</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Analysis</span>
        </button>
        <button className="bg-primary rounded-full size-12 shadow-lg text-black flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Config</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default PassiveMonitoring;
