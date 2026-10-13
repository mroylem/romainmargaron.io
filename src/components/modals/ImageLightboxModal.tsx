import React, { useState } from 'react';
import { GalleryPlate } from '../../types';

interface ImageLightboxModalProps {
  plate: GalleryPlate | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ plate, onClose }) => {
  const [zoom, setZoom] = useState(1);

  if (!plate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.6));
  const handleReset = () => setZoom(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7A2021] text-[22px]">image</span>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#5b070e]">
                {plate.title}
              </h4>
              <p className="text-xs text-[#64748B] font-mono">{plate.filename} • {plate.meta}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              title="Agrandir"
              className="w-8 h-8 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center text-[#1E232A] hover:bg-[#F4EFEB] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            </button>
            <button
              onClick={handleZoomOut}
              title="Réduire"
              className="w-8 h-8 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center text-[#1E232A] hover:bg-[#F4EFEB] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">zoom_out</span>
            </button>
            <button
              onClick={handleReset}
              title="100%"
              className="w-8 h-8 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center text-[#1E232A] hover:bg-[#F4EFEB] cursor-pointer text-xs font-mono"
            >
              1:1
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer ml-2"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Image Display Area with Pan/Zoom container */}
        <div className="flex-1 overflow-auto bg-[#1E232A] p-4 flex items-center justify-center min-h-[360px] sm:min-h-[460px]">
          <div
            className="transition-transform duration-200 flex items-center justify-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src={plate.imageUrl}
              alt={plate.title}
              className="max-h-[65vh] max-w-full object-contain rounded shadow-lg border border-[#334155]"
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-xs text-[#334155] leading-relaxed max-w-3xl">
            <strong>Description paléographique :</strong> {plate.description}{' '}
            {plate.zoomDetails && (
              <span className="text-[#4A2E12] italic block sm:inline mt-1 sm:mt-0 sm:ml-1">
                ({plate.zoomDetails})
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e] self-end sm:self-auto shrink-0"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
