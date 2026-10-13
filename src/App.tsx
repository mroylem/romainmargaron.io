import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResearchThesisSection } from './components/ResearchThesisSection';
import { TeiEditionSection } from './components/TeiEditionSection';
import { Footer } from './components/Footer';

// Modals
import { CommentaryModal } from './components/modals/CommentaryModal';
import { CitationModal } from './components/modals/CitationModal';
import { FileTreeModal } from './components/modals/FileTreeModal';
import { ImageLightboxModal } from './components/modals/ImageLightboxModal';
import { LegalModal } from './components/modals/LegalModal';
import { GalleryPlate } from './types';

export default function App() {
  // Modal states
  const [isCommentaryOpen, setIsCommentaryOpen] = useState(false);
  const [isCitationOpen, setIsCitationOpen] = useState(false);
  const [isFileTreeOpen, setIsFileTreeOpen] = useState(false);
  const [legalModalTopic, setLegalModalTopic] = useState<string | null>(null);

  // Lightbox state
  const [lightboxPlate, setLightboxPlate] = useState<GalleryPlate | null>(null);

  // Toast download notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadZip = () => {
    showToast("Préparation de l'archive complète Bel-Air (Transcriptions XML + Schémas ODD + Fac-similés)...");
    setTimeout(() => {
      // Simulate download trigger
      const zipDummy = "Édition TEI Bel-Air 1907-1916 (p. 183-185) - Archive Master\nPar Romain Margaron (UNINE / UNIGE 2025)\nContenu : XML-TEI P5, tei_belair_odd.xml, RelaxNG, Schematron ISO, Images TIFF 600 DPI.";
      const blob = new Blob([zipDummy], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'edition_tei_Bel-Air_p183-185_master.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Téléchargement de l'archive démarré avec succès !");
    }, 800);
  };

  const handleOpenFullscreenFacsimile = (imgUrl: string, caption: string) => {
    setLightboxPlate({
      id: 'facsimile-fullscreen',
      number: '183',
      category: 'Fac-similé',
      title: 'Fac-similé Haute Résolution — Registre Bel-Air',
      subtitle: '',
      filename: 'ms-belair-f183r-600dpi.tif',
      tag: 'Cote : CH-AEG-Bel-Air-1907-1916',
      description: caption,
      meta: 'Résolution : 600 DPI • Non compressé',
      imageUrl: imgUrl
    });
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1E232A] flex flex-col font-sans selection:bg-[#C29B38] selection:text-[#1E232A]">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E232A] text-white px-5 py-3 rounded-md shadow-2xl border border-[#C29B38] flex items-center gap-3 animate-fadeIn text-sm">
          <span className="material-symbols-outlined text-[#C29B38] text-[20px]">info</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#64748B] hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <Header
      />

      {/* Main Content Area */}
      <main className="w-full pt-10 bg-[#FAF8F5] flex-1">
        {/* Section 0: Hero & Identity */}
        <HeroSection />

        {/* Section 1: Research Thesis & Methodology */}
        <ResearchThesisSection
          onOpenLightbox={(plate) => setLightboxPlate(plate)}
        />

        {/* Section 2: TEI Edition (Bel-Air 1907-1916) */}
        <TeiEditionSection
          onOpenFullscreenFacsimile={handleOpenFullscreenFacsimile}
        />
      </main>

      {/* Footer */}
      <Footer
      />

      {/* Modals */}
      <CommentaryModal
        isOpen={isCommentaryOpen}
        onClose={() => setIsCommentaryOpen(false)}
      />

      <CitationModal
        isOpen={isCitationOpen}
        onClose={() => setIsCitationOpen(false)}
      />

      <FileTreeModal
        isOpen={isFileTreeOpen}
        onClose={() => setIsFileTreeOpen(false)}
      />

      <ImageLightboxModal
        plate={lightboxPlate}
        onClose={() => setLightboxPlate(null)}
      />

      <LegalModal
        isOpen={legalModalTopic !== null}
        topic={legalModalTopic ?? ''}
        onClose={() => setLegalModalTopic(null)}
      />
    </div>
  );
}
