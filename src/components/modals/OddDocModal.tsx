import React, { useState } from 'react';
import { ODD_RULES_DOCUMENTATION } from '../../data/portfolioData';

interface OddDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OddDocModal: React.FC<OddDocModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'modules' | 'constraints' | 'xml'>('modules');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const oddXmlSample = `<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0"
     xmlns:sch="http://purl.oclc.org/dsdl/schematron">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>Personnalisation ODD Roma — Projet Bel-Air (1907-1916)</title>
        <author>Romain Margaron</author>
      </titleStmt>
      <publicationStmt>
        <p>Université de Neuchâtel &amp; Université de Genève</p>
      </publicationStmt>
      <sourceDesc><p>Généré sous Roma pour TEI P5</p></sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <schemaSpec ident="tei_belair" start="TEI" prefix="tei_">
        <moduleRef key="tei"/>
        <moduleRef key="core" include="p head date persName orgName note add del"/>
        <moduleRef key="header" include="teiHeader fileDesc publicationStmt sourceDesc"/>
        <moduleRef key="transcr" include="pb lb fw metamark subst app lem rdg"/>
        <moduleRef key="namesdates" include="persName orgName placeName"/>

        <!-- Règle Schematron : validation de la date ISO -->
        <elementSpec ident="date" mode="change">
          <constraintSpec ident="check-iso-date" scheme="schematron">
            <constraint>
              <sch:rule context="tei:date[@when]">
                <sch:assert test="matches(@when, '^\\d{4}(-\\d{2}(-\\d{2})?)?$')">
                  L'attribut @when doit respecter la syntaxe ISO 8601 (YYYY, YYYY-MM ou YYYY-MM-DD).
                </sch:assert>
              </sch:rule>
            </constraint>
          </constraintSpec>
        </elementSpec>
      </schemaSpec>
    </body>
  </text>
</TEI>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(oddXmlSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">description</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Documentation ODD Roma &amp; Schéma
              </h3>
              <p className="text-[12px] text-[#64748B]">
                {ODD_RULES_DOCUMENTATION.title} ({ODD_RULES_DOCUMENTATION.schemaFile})
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

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-[#E2DACD] bg-[#F4EFEB]/50">
          <button
            onClick={() => setActiveTab('modules')}
            className={`pb-2.5 px-3 text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer border-b-2 ${
              activeTab === 'modules'
                ? 'border-[#7A2021] text-[#7A2021]'
                : 'border-transparent text-[#64748B] hover:text-[#1E232A]'
            }`}
          >
            Modules &amp; Éléments
          </button>
          <button
            onClick={() => setActiveTab('constraints')}
            className={`pb-2.5 px-3 text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer border-b-2 ${
              activeTab === 'constraints'
                ? 'border-[#7A2021] text-[#7A2021]'
                : 'border-transparent text-[#64748B] hover:text-[#1E232A]'
            }`}
          >
            Contraintes Schematron
          </button>
          <button
            onClick={() => setActiveTab('xml')}
            className={`pb-2.5 px-3 text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer border-b-2 ${
              activeTab === 'xml'
                ? 'border-[#7A2021] text-[#7A2021]'
                : 'border-transparent text-[#64748B] hover:text-[#1E232A]'
            }`}
          >
            Code Source ODD (.odd/.xml)
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-[#1E232A]">
          {activeTab === 'modules' && (
            <div className="space-y-4">
              <p className="text-sm text-[#334155] leading-relaxed">
                Le schéma ODD (<em>One Document Does it all</em>) est paramétré via Roma pour restreindre le vocabulaire TEI P5 aux seules nécessités du registre asilaire, éliminant tout élément superflu et garantissant l'interopérabilité des métadonnées.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ODD_RULES_DOCUMENTATION.modules.map((m) => (
                  <div key={m.name} className="p-3.5 bg-[#F4EFEB] rounded border border-[#E2DACD]">
                    <div className="flex items-center justify-between pb-1">
                      <span className="font-mono text-xs font-bold text-[#7A2021]">
                        Module &lt;{m.name}&gt;
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#C29B38]/20 text-[#4A2E12] font-semibold">
                        Inclus
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'constraints' && (
            <div className="space-y-3">
              <p className="text-sm text-[#334155]">
                Règles de validation sémantique Schematron ISO intégrées au schéma pour interdire les anomalies d'indexation temporelle et prosopographique :
              </p>
              {ODD_RULES_DOCUMENTATION.constraints.map((c, i) => (
                <div key={i} className="p-3.5 bg-[#F4EFEB] rounded border border-[#E2DACD] flex flex-col gap-1.5">
                  <span className="font-semibold text-xs text-[#5b070e] font-mono">
                    sch:rule : {c.rule}
                  </span>
                  <p className="text-xs text-[#334155]">{c.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'xml' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#64748B] font-mono">tei_belair_odd.xml</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-[#F4EFEB] border border-[#E2DACD] text-[#7A2021] hover:bg-white cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copié !' : 'Copier XML'}</span>
                </button>
              </div>
              <pre className="bg-[#1E232A] text-[#FAF8F5] p-4 rounded text-xs overflow-x-auto leading-relaxed">
                <code>{oddXmlSample}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex items-center justify-between">
          <span className="text-xs text-[#64748B]">Conforme aux recommandations du TEI Consortium</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#7A2021] hover:bg-[#5b070e] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
