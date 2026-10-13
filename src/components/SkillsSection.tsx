import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <section
      id="competences"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20 flex flex-col gap-10 scroll-mt-20"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#7A2021] font-bold tracking-wider">
            [CADRE MÉTHODOLOGIQUE &amp; TECHNIQUE]
          </span>
          <div className="h-px bg-[#E2DACD] flex-1"></div>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#5b070e] font-semibold tracking-tight leading-tight">
          Compétences &amp; Boîte à Outils des Humanités Numériques
        </h2>
        <p className="text-[17px] text-[#64748B] max-w-3xl">
          Technologies maîtrisées et mobilisées dans le traitement des corpus textuels et patrimoniaux.
        </p>
      </div>

      {/* 4 Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILL_CATEGORIES.map((category, catIdx) => {
          const isGoldCategory = catIdx === 3;
          return (
            <div
              key={category.title}
              className="p-6 rounded bg-[#F4EFEB] border border-[#E2DACD] flex flex-col gap-4 shadow-xs hover:border-[#7A2021] transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[#E2DACD] pb-3">
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    isGoldCategory ? 'text-[#C29B38]' : 'text-[#7A2021]'
                  }`}
                >
                  {category.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-[13px] uppercase font-semibold text-[#4A2E12] tracking-wider">
                    {category.title}
                  </span>
                  <span className="text-[11px] text-[#64748B]">{category.subtitle}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 text-[14px] text-[#1E232A]">
                {category.skills.map((skill) => {
                  const isExpanded = expandedSkill === skill.name;
                  return (
                    <li
                      key={skill.name}
                      onClick={() => toggleSkill(skill.name)}
                      className={`flex flex-col p-1.5 rounded transition-colors cursor-pointer ${
                        isExpanded ? 'bg-[#FAF8F5] ring-1 ring-[#E2DACD]' : 'hover:bg-[#FAF8F5]/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[13px] flex items-center gap-1">
                          {skill.name}
                          <span className="material-symbols-outlined text-[14px] text-[#64748B] opacity-60">
                            {isExpanded ? 'expand_less' : 'expand_more'}
                          </span>
                        </span>
                        <span
                          className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                            isGoldCategory
                              ? 'text-[#4A2E12] bg-[#C29B38]/20 font-medium'
                              : 'text-[#7A2021] bg-[#7A2021]/10 font-medium'
                          }`}
                        >
                          {skill.badge}
                        </span>
                      </div>
                      {isExpanded && (
                        <p className="mt-1.5 text-[12px] text-[#64748B] leading-relaxed border-t border-[#E2DACD]/50 pt-1.5 animate-fadeIn">
                          {skill.description}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
