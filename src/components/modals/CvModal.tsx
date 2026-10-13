import React from 'react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/romainmargaron.io/CV_RM_2026.pdf';
    a.download = 'CV_Romain_Margaron_2026.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">description</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Curriculum Vitæ Académique
              </h3>
              <p className="text-[12px] text-[#64748B]">Romain Margaron — Version 2025 (UNINE / UNIGE)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#1E232A]">
          {/* Header Summary */}
          <div className="border-b border-[#E2DACD] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#5b070e]">Romain Margaron</h4>
              <p className="text-sm text-[#4A2E12] italic">
                Étudiant-chercheur en Humanités Numériques &amp; Valorisation du Patrimoine
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Neuchâtel / Genève, Suisse • romain.margaron@unine.ch • +41 78 123 45 67
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#7A2021]/10 text-[#7A2021] text-xs font-semibold uppercase">
                Disponible Thèse / Ingénieur DH
              </span>
            </div>
          </div>

          {/* Formation */}
          <div>
            <h5 className="font-serif text-lg font-semibold text-[#5b070e] border-b border-[#E2DACD] pb-1 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#C29B38]">school</span>
              Formation Universitaire
            </h5>
            <div className="space-y-3 text-sm">
              <div className="bg-[#F4EFEB] p-3 rounded border border-[#E2DACD]">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#1E232A]">
                    Master ès Lettres et Sciences Humaines, orientation Humanités Numériques
                  </span>
                  <span className="text-xs font-mono text-[#7A2021]">2023 – 2025</span>
                </div>
                <p className="text-xs text-[#4A2E12]">Université de Neuchâtel (UNINE), Suisse</p>
                <p className="text-xs text-[#64748B] mt-1">
                  Mémoire de recherche : <em>« Analyse et Traitement Numérique des Archives Hospitalières et Administratives : Fonds Bel-Air (1907-1916) »</em>. Mention Très Bien.
                </p>
              </div>

              <div className="bg-[#F4EFEB] p-3 rounded border border-[#E2DACD]">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#1E232A]">
                    Baccalauréat universitaire en Histoire générale et Littérature comparée
                  </span>
                  <span className="text-xs font-mono text-[#7A2021]">2020 – 2023</span>
                </div>
                <p className="text-xs text-[#4A2E12]">Université de Genève (UNIGE), Suisse</p>
                <p className="text-xs text-[#64748B] mt-1">
                  Spécialisation en histoire des institutions sanitaires et paléographie moderne.
                </p>
              </div>
            </div>
          </div>

          {/* Projets de Recherche */}
          <div>
            <h5 className="font-serif text-lg font-semibold text-[#5b070e] border-b border-[#E2DACD] pb-1 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#C29B38]">biotech</span>
              Projets de Recherche &amp; Livrables
            </h5>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-[#F4EFEB] rounded border border-[#E2DACD]">
                <span className="font-semibold text-[#5b070e]">
                  Édition critique synoptique TEI P5 du Fonds Bel-Air (Pages 183-185)
                </span>
                <p className="text-xs text-[#334155] mt-1 leading-relaxed">
                  Modélisation ODD Roma, validation Schematron stricte, indexation prosopographique fine et interface web interactive conforme aux normes du Consortium TEI.
                </p>
              </div>
              <div className="p-3 bg-[#F4EFEB] rounded border border-[#E2DACD]">
                <span className="font-semibold text-[#5b070e]">
                  Pipeline HTR eScriptorium &amp; Kraken sur manuscrits cursifs
                </span>
                <p className="text-xs text-[#334155] mt-1 leading-relaxed">
                  Transcription continue de 12 pages de délibérations administratives asilaires, entraînement de réseaux de neurones (CER &lt; 4.8%), alignement textuel verba-ad-verbum.
                </p>
              </div>
            </div>
          </div>

          {/* Compétences informatiques */}
          <div>
            <h5 className="font-serif text-lg font-semibold text-[#5b070e] border-b border-[#E2DACD] pb-1 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#C29B38]">terminal</span>
              Maîtrise Technique &amp; Standards
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#F4EFEB] border border-[#E2DACD]">
                <strong className="text-[#5b070e]">Balisage &amp; Schémas :</strong> TEI P5, XML, ODD Roma, Schematron ISO, RelaxNG, XPath, XSLT 3.0.
              </div>
              <div className="p-2.5 rounded bg-[#F4EFEB] border border-[#E2DACD]">
                <strong className="text-[#5b070e]">HTR &amp; Vision :</strong> eScriptorium, Kraken, Transkribus, IIIF Image/Presentation v3, OpenCV.
              </div>
              <div className="p-2.5 rounded bg-[#F4EFEB] border border-[#E2DACD]">
                <strong className="text-[#5b070e]">Code &amp; Données :</strong> Python (spaCy, pandas, nltk), PostgreSQL, SQLite, Neo4j (bases de graphes).
              </div>
              <div className="p-2.5 rounded bg-[#F4EFEB] border border-[#E2DACD]">
                <strong className="text-[#5b070e]">Science Ouverte :</strong> Principes FAIR, Dublin Core, CIDOC-CRM, GitHub Actions CI/CD, Zenodo.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#64748B]">Document certifié • UNINE / UNIGE 2025</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded border border-[#E2DACD] text-xs font-semibold uppercase text-[#334155] hover:bg-[#FAF8F5] cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#7A2021] hover:bg-[#5b070e] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer shadow"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Télécharger (.PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
