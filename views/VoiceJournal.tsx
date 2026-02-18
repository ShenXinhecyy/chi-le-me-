
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

const VoiceJournal: React.FC<Props> = ({ onBack }) => {
  const [isRecording, setIsRecording] = useState(true);

  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in slide-in-from-bottom duration-500 overflow-y-auto no-scrollbar pb-20">
      <header className="flex items-center justify-between p-6 bg-background-dark border-b border-primary/10">
        <button onClick={onBack} className="flex items-center justify-center size-12 rounded-full bg-surface/50 text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold tracking-tight">Daily Voice Journal</h1>
        <div className="size-12"></div>
      </header>

      <main className="flex-1 px-6 py-8">
        <section className="flex flex-col items-center justify-center space-y-12 py-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">How was your day?</h2>
            <p className="text-primary/70 text-lg">Tell me everything that's on your mind.</p>
          </div>

          <div className="w-full h-32 flex items-end justify-center gap-1.5 px-10">
            {[8, 16, 24, 32, 20, 28, 14, 24, 10, 6].map((h, i) => (
              <div 
                key={i} 
                className={`w-2 bg-primary rounded-full animate-pulse`} 
                style={{ height: `${h * 4}px`, animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>

          <div className="bg-surface rounded-xl px-8 py-4 flex items-center gap-4 border border-primary/20">
            <span className="size-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-4xl font-mono font-bold tracking-widest text-white">02:45</span>
          </div>

          <div className="flex items-center justify-center gap-8 w-full">
            <button className="flex flex-col items-center gap-2 group" onClick={onBack}>
              <div className="size-16 rounded-full bg-surface flex items-center justify-center text-slate-400 group-hover:bg-red-500/10 group-hover:text-red-500 transition-all">
                <span className="material-symbols-outlined text-3xl">close</span>
              </div>
              <span className="text-sm font-medium opacity-60 uppercase tracking-widest">Cancel</span>
            </button>
            <button onClick={() => setIsRecording(!isRecording)} className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative size-32 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-6xl font-bold">
                  {isRecording ? 'stop' : 'mic'}
                </span>
              </div>
            </button>
            <button className="flex flex-col items-center gap-2 group" onClick={onBack}>
              <div className="size-16 rounded-full bg-surface flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <span className="text-sm font-medium opacity-60 uppercase tracking-widest">Finish</span>
            </button>
          </div>
        </section>

        <section className="space-y-8 mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Daily Analysis</h3>
            <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30 uppercase tracking-wider">Stable Status</span>
          </div>

          <div className="bg-surface rounded-lg p-6 space-y-4 shadow-xl border border-white/5">
            <div className="flex items-center gap-2 text-primary/60">
              <span className="material-symbols-outlined text-sm">description</span>
              <span className="text-xs font-bold uppercase tracking-widest">Automatic Transcript</span>
            </div>
            <p className="text-xl leading-relaxed text-slate-200">
              今天早上我去公园散步了，天气很好。 
              <span className="bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-md border border-amber-400/30 mx-1">那个</span> 
              遇到了老张，我们聊了一会儿。 
              <span className="bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-md border border-amber-400/30 mx-1">然后</span> 
              我去买了菜。感觉 
              <span className="bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-md border border-amber-400/30 mx-1">这个</span> 
              心情非常舒畅。
            </p>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="size-2 rounded-full bg-amber-400"></span>
              <span className="text-xs">Detected Filler words</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-lg p-5 border border-white/5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Semantic Density</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">0.82</span>
                <span className="text-primary text-xs font-bold mb-1.5">↑ 4%</span>
              </div>
            </div>
            <div className="bg-surface rounded-lg p-5 border border-white/5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Disfluency</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">3.2</span>
                <span className="text-amber-400 text-xs font-bold mb-1.5">Stable</span>
              </div>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex gap-4 items-start">
            <div className="size-10 shrink-0 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-red-400 text-sm">Linguistic Shift Detected</h4>
              <p className="text-xs text-slate-400 leading-normal">A slight increase in filler word frequency was noted compared to your baseline. Consider a warm-up game later.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VoiceJournal;
