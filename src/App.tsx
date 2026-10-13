import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResearchThesisSection } from './components/ResearchThesisSection';
import { TeiEditionSection } from './components/TeiEditionSection';
import { ProjectResourcesSection } from './components/ProjectResourcesSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

// Modals
import { CvModal } from './components/modals/CvModal';
import { TeiReaderModal } from './components/modals/TeiReaderModal';
import { OddDocModal } from './components/modals/OddDocModal';
import { CommentaryModal } from './components/modals/CommentaryModal';
import { CitationModal } from './components/modals/CitationModal';
import { FileTreeModal } from './components/modals/FileTreeModal';
import { ImageLightboxModal } from './components/modals/ImageLightboxModal';
import { MethodologyModal } from './components/modals/MethodologyModal';
import { ContactModal } from './components/modals/ContactModal';
import { LegalModal } from './components/modals/LegalModal';
import { GalleryPlate } from './types';

export default function App() {
  // Modal states
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isTeiReaderOpen, setIsTeiReaderOpen] = useState(false);
  const [isOddDocOpen, setIsOddDocOpen] = useState(false);
  const [isCommentaryOpen, setIsCommentaryOpen] = useState(false);
  const [isCitationOpen, setIsCitationOpen] = useState(false);
  const [isFileTreeOpen, setIsFileTreeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [legalModalTopic, setLegalModalTopic] = useState<string | null>(null);

  // Lightbox state
  const [lightboxPlate, setLightboxPlate] = useState<GalleryPlate | null>(null);

  // Methodology modal state
  const [methodologyPhase, setMethodologyPhase] = useState<number | null>(null);

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
        onOpenCvModal={() => setIsCvOpen(true)}
        onOpenContactModal={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#FAF8F5] flex-1">
        {/* Section 0: Hero & Identity */}
        <HeroSection onOpenCvModal={() => setIsCvOpen(true)} />

        {/* Section 1: Research Thesis & Methodology */}
        <ResearchThesisSection
          onOpenLightbox={(plate) => setLightboxPlate(plate)}
          onOpenMethodologyModal={(idx) => setMethodologyPhase(idx)}
        />

        {/* Section 2: TEI Edition (Bel-Air 1907-1916) */}
        <TeiEditionSection
          onOpenTeiReaderModal={() => setIsTeiReaderOpen(true)}
          onOpenFullscreenFacsimile={handleOpenFullscreenFacsimile}
        />

        {/* Section 2.5: Project Resources, ODD & Repositories */}
        <ProjectResourcesSection
          onOpenTeiReader={() => setIsTeiReaderOpen(true)}
          onOpenOddDoc={() => setIsOddDocOpen(true)}
          onOpenCommentary={() => setIsCommentaryOpen(true)}
          onOpenCitation={() => setIsCitationOpen(true)}
          onOpenTreeModal={() => setIsFileTreeOpen(true)}
          onOpenDownloadZip={handleDownloadZip}
          onOpenTranscription12p={() => setIsCommentaryOpen(true)}
        />

        {/* Section 3: Technical Skills & Digital Humanities Toolbox */}
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegalModal={(topic) => setLegalModalTopic(topic)}
        onOpenTeiReader={() => setIsTeiReaderOpen(true)}
      />

      {/* Modals */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      <TeiReaderModal
        isOpen={isTeiReaderOpen}
        onClose={() => setIsTeiReaderOpen(false)}
      />

      <OddDocModal
        isOpen={isOddDocOpen}
        onClose={() => setIsOddDocOpen(false)}
      />

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

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ImageLightboxModal
        plate={lightboxPlate}
        onClose={() => setLightboxPlate(null)}
      />

      <MethodologyModal
        isOpen={methodologyPhase !== null}
        initialPhaseIndex={methodologyPhase ?? 0}
        onClose={() => setMethodologyPhase(null)}
      />

      <LegalModal
        isOpen={legalModalTopic !== null}
        topic={legalModalTopic ?? ''}
        onClose={() => setLegalModalTopic(null)}
      />
    </div>
  );
}
