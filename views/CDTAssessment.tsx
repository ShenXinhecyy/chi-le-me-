
import React, { useRef, useState, useEffect } from 'react';

interface Props {
  onBack: () => void;
}

const CDTAssessment: React.FC<Props> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Initial clear
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.beginPath();
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#101e22';

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in zoom-in-95 duration-300 overflow-hidden">
      <header className="flex items-center justify-between p-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/10">
        <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold tracking-tight">Digital CDT Assessment</h1>
          <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">Neuro-Diagnostic Module</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-full">
          <span className="material-symbols-outlined text-sm">warning</span>
          <span className="text-xs font-bold">RISK FLAG</span>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6 overflow-y-auto no-scrollbar">
        <section className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Instructions</span>
            <span className="text-white/40 text-xs">Test ID: #CDT-9928</span>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-white/5 shadow-xl">
            <p className="text-lg leading-relaxed font-medium">
              "Please draw a clock face with all the numbers and set the time to <span className="text-primary underline underline-offset-4">10 minutes past 11</span>."
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-primary rounded-full shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-xs animate-pulse">record_voice_over</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Recording Active</span>
          </div>
          <div className="w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border-4 border-surface cursor-crosshair">
            <canvas 
              ref={canvasRef}
              width={400}
              height={400}
              className="w-full h-full"
              onMouseDown={startDrawing}
              onMouseUp={endDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchEnd={endDrawing}
              onTouchMove={draw}
            />
            {showHeatmap && (
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] right-[30%] w-12 h-12 bg-accent-red blur-xl rounded-full"></div>
                <div className="absolute bottom-[40%] right-[20%] w-8 h-8 bg-amber-400 blur-xl rounded-full"></div>
              </div>
            )}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <button onClick={clearCanvas} className="w-full h-14 bg-surface border border-white/10 hover:border-primary/50 text-white rounded-2xl flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined">delete</span>
              <span className="font-bold">Clear Canvas</span>
            </button>
            <div className="flex items-center justify-between px-4 py-3 bg-surface rounded-2xl border border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/40 uppercase">Overlay</span>
                <span className="text-xs font-medium">Neuro-Analysis</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={showHeatmap} onChange={(e) => setShowHeatmap(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
          <button className="h-full bg-primary hover:bg-primary/90 text-background-dark rounded-2xl flex flex-col items-center justify-center gap-1 shadow-lg shadow-primary/20 transition-all active:scale-95" onClick={onBack}>
            <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
            <span className="font-bold text-sm uppercase tracking-wider">Submit Test</span>
          </button>
        </section>

        <section className="mt-4 animate-in slide-in-from-bottom duration-700">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Total Time', val: '85s', color: 'text-amber-400' },
              { label: 'Pauses > 2s', val: '2', color: 'text-accent-red' },
              { label: 'Efficiency', val: '92%', color: 'text-primary' },
            ].map((m, i) => (
              <div key={i} className="bg-surface p-4 rounded-3xl border border-white/5 space-y-1 text-center">
                <p className="text-[10px] text-white/40 font-bold uppercase">{m.label}</p>
                <p className={`text-2xl font-bold ${m.color}`}>{m.val}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-3xl flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">psychology</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Preliminary Observation</h4>
              <p className="text-xs text-white/60 leading-relaxed mt-1">High stroke efficiency noted. Minor hesitations at digit positioning. Overall spatial planning within normal parameters.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CDTAssessment;
