import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  topic: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, topic, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">policy</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                {topic === 'ethique'
                  ? 'Éthique des Données & Archives Médicales'
                  : topic === 'ontologies'
                  ? 'Ontologies CIDOC-CRM & Graphes de Connaissances'
                  : 'Mentions Légales & Propriété Intellectuelle'}
              </h3>
              <p className="text-xs text-[#64748B]">Cadre de conformité scientifique et déontologique</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
          {topic === 'ethique' && (
            <>
              <p>
                <strong>Délai de communicabilité et respect de la vie privée :</strong> Le traitement computationnel des registres asilaires du début du XXᵉ siècle (Fonds Bel-Air, 1907-1916) s'inscrit en stricte conformité avec la loi genevoise sur les archives publiques (LArch, B 2 15) et la législation suisse relative à la protection de la personnalité.
              </p>
              <p>
                <strong>Anonymisation et traçabilité :</strong> Les données médicales sensibles issues des diagnostics psychiatriques font l'objet d'un pseudonymisation conforme aux standards de l'éthique de la recherche en sciences humaines.
              </p>
              <p>
                <strong>Droit à l'oubli et réutilisation académique :</strong> La diffusion des transcriptions est réservée aux usages scientifiques et pédagogiques, sans finalité commerciale.
              </p>
            </>
          )}

          {topic === 'ontologies' && (
            <>
              <p>
                <strong>Alignement CIDOC-CRM :</strong> Les délibérations administratives sont modélisées selon l'ontologie de référence internationale CIDOC-CRM (ISO 21127). Chaque acte d'admission est instancié comme un <code>E5 Event</code> reliant une <code>E21 Person</code> (patient), une <code>E39 Actor</code> (commission) et un <code>E53 Place</code>.
              </p>
              <p>
                <strong>Interopérabilité sémantique :</strong> L'alignement RDF/OWL permet d'interroger le corpus à l'aide de requêtes SPARQL et d'enrichir les données avec Wikidata, IdRef et les archives cantonales de Genève.
              </p>
            </>
          )}

          {topic === 'mentions' && (
            <>
              <p>
                <strong>Direction &amp; Conception :</strong> Romain Margaron, étudiant-chercheur en Humanités Numériques aux universités de Neuchâtel et de Genève.
              </p>
              <p>
                <strong>Licence de diffusion :</strong> Le code source de l'édition numérique et les fichiers TEI-XML sont placés sous licence <em>Creative Commons Attribution 4.0 International (CC-BY 4.0)</em>.
              </p>
              <p>
                <strong>Droits sur les fac-similés :</strong> Les reproductions numériques du registre Bel-Air sont publiées avec l'autorisation gracieuse des Archives d'État de Genève (AEG) à des fins de recherche universitaire.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
