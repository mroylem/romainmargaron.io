import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GalleryPlate } from '../../types';

interface ImageLightboxModalProps {
  plate: GalleryPlate | null;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const controlBtn =
  'w-10 h-10 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer select-none';

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ plate, onClose }) => {
  const [view, setView] = useState({ zoom: 1, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchDist = useRef<number | null>(null);

  const reset = useCallback(() => setView({ zoom: 1, x: 0, y: 0 }), []);

  // Zoom keeping the point (cx, cy) — relative to stage centre — fixed on screen.
  const zoomAt = useCallback((factor: number, cx = 0, cy = 0) => {
    setView((v) => {
      const zoom = clamp(v.zoom * factor, MIN_ZOOM, MAX_ZOOM);
      if (zoom === MIN_ZOOM) return { zoom, x: 0, y: 0 };
      const k = zoom / v.zoom;
      return { zoom, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k };
    });
  }, []);

  useEffect(() => {
    reset();
  }, [plate, reset]);

  useEffect(() => {
    if (!plate) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') zoomAt(1.4);
      else if (e.key === '-') zoomAt(1 / 1.4);
      else if (e.key === '0') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [plate, onClose, zoomAt, reset]);

  // Wheel must be non-passive to preventDefault page scroll.
  useEffect(() => {
    const el = stageRef.current;
    if (!el || !plate) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const cx = e.clientX - (r.left + r.width / 2);
      const cy = e.clientY - (r.top + r.height / 2);
      zoomAt(Math.exp(-e.deltaY * 0.002), cx, cy);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [plate, zoomAt]);

  if (!plate) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values());
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDist.current) {
        const r = stageRef.current!.getBoundingClientRect();
        const cx = (a.x + b.x) / 2 - (r.left + r.width / 2);
        const cy = (a.y + b.y) / 2 - (r.top + r.height / 2);
        zoomAt(dist / pinchDist.current, cx, cy);
      }
      pinchDist.current = dist;
      return;
    }

    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    setView((v) => (v.zoom > 1 ? { ...v, x: v.x + dx, y: v.y + dy } : v));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    pinchDist.current = null;
    if (pointers.current.size === 0) setDragging(false);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (view.zoom > 1) return reset();
    const r = stageRef.current!.getBoundingClientRect();
    zoomAt(2.5, e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="flex flex-col w-full h-full max-w-[98vw] max-h-[96vh] overflow-hidden rounded-lg bg-[#FAF8F5] border border-[#E2DACD] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#F4EFEB] border-b border-[#E2DACD] shrink-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#7A2021] text-[22px]">image</span>
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#5b070e]">{plate.title}</h4>
            <p className="text-xs font-mono">{plate.subtitle}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          title="Fermer (Échap)"
          className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer ml-2"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0">
      <div
        ref={stageRef}
        className="relative flex-1 min-h-0 min-w-0 overflow-hidden bg-[#1E232A] touch-none"
        style={{ cursor: view.zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={plate.imageUrl}
            alt={plate.title}
            draggable={false}
            className="max-w-full max-h-full object-contain select-none will-change-transform"
            style={{
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`,
              transition: dragging ? 'none' : 'transform 120ms ease-out',
            }}
          />
        </div>

        {/* Controls overlay */}
        <div
          className="absolute top-3 right-3 flex items-center gap-2"
          onPointerDown={(e) => e.stopPropagation()}
          onDoubleClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => zoomAt(1.4)} title="Agrandir (+)" className={controlBtn}>
            <span className="material-symbols-outlined text-[20px]">zoom_in</span>
          </button>
          <button onClick={() => zoomAt(1 / 1.4)} title="Réduire (-)" className={controlBtn}>
            <span className="material-symbols-outlined text-[20px]">zoom_out</span>
          </button>
          <button onClick={reset} title="Ajuster (0)" className={`${controlBtn} text-xs font-mono`}>
            {Math.round(view.zoom * 100)}%
          </button>
        </div>

        {view.zoom === 1 && (
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-mono text-white/60 pointer-events-none whitespace-nowrap">
            Molette pour zoomer · glisser pour déplacer · double-clic
          </p>
        )}
      </div>

      {/* Right column */}
      {plate.sideImageUrl ? (
        <aside className="lg:w-1/2 shrink-0 h-[45%] lg:h-auto overflow-hidden p-2 bg-[#F4EFEB] border-t lg:border-t-0 lg:border-l border-[#E2DACD]">
          <img
            src={plate.sideImageUrl}
            alt={`Transcription — ${plate.title}`}
            className="w-full h-full object-contain"
          />
        </aside>
      ) : (
        <aside className="lg:w-80 shrink-0 max-h-[35%] lg:max-h-none overflow-auto p-4 bg-[#F4EFEB] border-t lg:border-t-0 lg:border-l border-[#E2DACD] text-xs text-[#334155] leading-relaxed space-y-2">
          <p>{plate.description}</p>
          {plate.zoomDetails && <p>{plate.zoomDetails}</p>}
          <p className="text-[#64748B] font-mono">{plate.meta}</p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e] block ml-auto"
          >
            Fermer
          </button>
        </aside>
      )}
      </div>
      </div>
    </div>
  );
};
