import React from 'react';

interface CommentaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommentaryModal: React.FC<CommentaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">history_edu</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Commentaire sur l'Édition Numérique
              </h3>
              <p className="text-xs text-[#64748B]">
                Analyse critique, choix d'encodage et démarche philologique • Romain Margaron
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#1E232A] text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#5b070e] border-b border-[#E2DACD] pb-1">
              1. Contexte d'émergence &amp; Corpus documentaire
            </h4>
            <p className="text-[#334155]">
              Le registre conservé sous la cote <em>CH-AEG-Bel-Air-1907-1916</em> consigne l'ensemble des séances de la Commission administrative de l'Asile de Bel-Air. Ce volume in-folio constitue une source pivot pour l'histoire hospitalière et psychiatrique genevoise au début du XXᵉ siècle. La tenue des séances reflète une double nature discursive : d'une part, la régularité formaliste de l'administration publique (admissions, transferts, visas budgétaires) ; d'autre part, la contingence clinique et humaine d'une patientèle souvent précarisée.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#5b070e] border-b border-[#E2DACD] pb-1">
              2. Chaîne opératoire HTR (eScriptorium / Kraken)
            </h4>
            <p className="text-[#334155]">
              La confrontation paléographique a révélé les limites des modèles HTR génériques sur des écritures cursives inclinées à encre ferro-gallique pâle. Une étape préalable de binarisation adaptative sous OpenCV a permis de stabiliser le contraste sans dégrader les hampes des lettres. L'entraînement d'un modèle spécifique sous <strong>Kraken</strong> sur une base d'apprentissage de 42 feuillets a fait chuter le <em>Character Error Rate</em> (CER) en dessous de <strong>4.8%</strong>, autorisant un alignement texte-image d'une haute fidélité.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#5b070e] border-b border-[#E2DACD] pb-1">
              3. Principes éditoriaux et balisage TEI P5
            </h4>
            <p className="text-[#334155]">
              Le choix fondamental réside dans la séparation rigoureuse entre l'état diplomatique du manuscrit et sa normalisation contemporaine :
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#334155]">
              <li>
                <strong>Foliotation et sauts de lignes :</strong> Balises <code>&lt;pb&gt;</code> et <code>&lt;lb&gt;</code> indexées sur les coordonnées de zones polygonales.
              </li>
              <li>
                <strong>Entités nommées &amp; indexation :</strong> Encodage standardisé des patronymes sous <code>&lt;persName role="patient|doctor|commissioner"&gt;</code> et des institutions sous <code>&lt;orgName&gt;</code>.
              </li>
              <li>
                <strong>Apparat critique :</strong> Déclaration des variantes orthographiques et des abréviations administratives via les paires <code>&lt;app&gt; / &lt;lem&gt; / &lt;rdg&gt;</code>.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#5b070e] border-b border-[#E2DACD] pb-1">
              4. Conformité aux principes FAIR &amp; Réutilisation
            </h4>
            <p className="text-[#334155]">
              L'ensemble du corpus transcrit, des modèles d'alignement et des règles Schematron associées à la documentation ODD sont publiés sous licence libre <strong>Creative Commons CC-BY 4.0</strong> sur GitHub et archivés avec identifiants pérennes. Les données prosopographiques sont prêtes à être interrogées par des pipelines de graphes de connaissances (CIDOC-CRM).
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex justify-between items-center">
          <span className="text-xs text-[#64748B]">Document de synthèse philologique • UNINE / UNIGE</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
