
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const ElderlyDashboard: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in slide-in-from-right duration-500">
      <header class="p-6 pt-10 flex flex-col gap-2">
        <div class="flex justify-between items-start">
          <div class="flex items-center gap-4">
            <div class="size-16 rounded-full border-4 border-primary overflow-hidden">
              <img alt="Grandpa Li Profile" className="w-full h-full object-cover" src="https://picsum.photos/seed/grandpa/200/200" />
            </div>
            <div>
              <p class="text-primary font-bold text-xl uppercase tracking-wider">Good Morning</p>
              <h1 class="text-4xl font-bold leading-tight">Grandpa Li</h1>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('MODE_SELECTION')}
            class="bg-card-bg p-4 rounded-full flex items-center justify-center text-primary shadow-lg active:scale-95 transition-transform"
          >
            <span class="material-symbols-outlined text-4xl">logout</span>
          </button>
        </div>
      </header>

      <main class="flex-1 px-6 flex flex-col gap-6 w-full pb-32">
        <div class="bg-card-bg rounded-xl p-8 flex flex-col items-center text-center shadow-2xl border border-white/5">
          <div class="relative mb-4">
            <div class="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
            <span class="material-symbols-outlined text-9xl text-yellow-400 relative" style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
          </div>
          <h2 class="text-3xl font-bold mb-2">Cognitive Forecast</h2>
          <p class="text-xl text-[#90bccb] leading-relaxed">Today looks bright! Your mind is sharp and stable today.</p>
        </div>

        <button 
          onClick={() => onNavigate('CDT_ASSESSMENT')}
          class="w-full bg-primary hover:bg-primary/90 text-background-dark py-10 rounded-xl flex flex-col items-center justify-center gap-4 shadow-[0_20px_50px_rgba(13,185,242,0.3)] active:translate-y-1 transition-all border-b-8 border-primary/40"
        >
          <span class="material-symbols-outlined text-6xl">touch_app</span>
          <span class="text-3xl font-bold tracking-tighter uppercase px-4">TAP HERE TO CHECK-IN</span>
        </button>

        <button 
          onClick={() => onNavigate('VOICE_JOURNAL')}
          class="bg-status-green/10 border-2 border-status-green rounded-xl p-6 flex items-center justify-between shadow-lg active:scale-[0.98] transition-all"
        >
          <div class="flex items-center gap-5 text-left">
            <div class="bg-status-green text-background-dark p-3 rounded-full">
              <span class="material-symbols-outlined text-4xl">mic</span>
            </div>
            <div>
              <p class="text-status-green font-bold text-lg uppercase tracking-widest">Voice Journal</p>
              <p class="text-2xl font-bold">Stable Status</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-status-green text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </button>

        <div class="bg-card-bg/50 border border-white/5 rounded-full px-6 py-4 flex items-center justify-between mt-auto">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">family_restroom</span>
            <p class="text-lg text-[#90bccb]">Connected to: <span class="text-white font-bold">Daughter Sarah</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="size-3 bg-status-green rounded-full animate-pulse"></div>
            <span class="text-sm font-bold uppercase text-status-green">Notified</span>
          </div>
        </div>
      </main>

      <nav class="absolute bottom-0 left-0 right-0 bg-card-bg border-t-2 border-white/5 p-4 flex justify-around items-center z-10">
        <a class="flex flex-col items-center gap-1 text-primary" href="#">
          <span class="material-symbols-outlined text-5xl">home</span>
          <span class="text-sm font-bold">Home</span>
        </a>
        <a class="flex flex-col items-center gap-1 text-[#90bccb]" href="#" onClick={() => onNavigate('VOICE_JOURNAL')}>
          <span class="material-symbols-outlined text-5xl">favorite</span>
          <span class="text-sm font-bold">Health</span>
        </a>
        <a class="flex flex-col items-center gap-1 text-[#90bccb]" href="#">
          <span class="material-symbols-outlined text-5xl">group</span>
          <span class="text-sm font-bold">Family</span>
        </a>
      </nav>
    </div>
  );
};

export default ElderlyDashboard;
