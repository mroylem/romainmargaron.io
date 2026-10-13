import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">contact_mail</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Correspondance Académique &amp; Échange
              </h3>
              <p className="text-xs text-[#64748B]">Romain Margaron • Candidature &amp; Recherche</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-[#1E232A]">
          {submitted ? (
            <div className="p-6 text-center space-y-3 bg-[#F4EFEB] rounded border border-[#C29B38]">
              <span className="material-symbols-outlined text-4xl text-[#7A2021]">mark_email_read</span>
              <h4 className="font-serif text-xl font-bold text-[#5b070e]">Message transmis avec succès</h4>
              <p className="text-xs text-[#64748B]">
                Votre demande de contact a été enregistrée. Une réponse vous parviendra dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F4EFEB] p-3.5 rounded border border-[#E2DACD] space-y-1 text-xs text-[#334155]">
                <p>
                  <strong>Courriel universitaire :</strong>{' '}
                  <a href="mailto:romain.margaron@unine.ch" className="text-[#7A2021] hover:underline font-semibold">
                    romain.margaron@unine.ch
                  </a>
                </p>
                <p>
                  <strong>Laboratoire de rattachement :</strong> Université de Neuchâtel (Chaire Humanités Numériques) &amp; UNIGE.
                </p>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#4A2E12] mb-1">
                  Votre Nom &amp; Institution
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Pr. Jeanne Dupont, Université..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-[#E2DACD] bg-[#FAF8F5] focus:outline-none focus:border-[#7A2021]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#4A2E12] mb-1">
                  Votre Courriel
                </label>
                <input
                  type="email"
                  required
                  placeholder="nom@institution.ch"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-[#E2DACD] bg-[#FAF8F5] focus:outline-none focus:border-[#7A2021]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#4A2E12] mb-1">
                  Objet de l'Échange
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Entretien de candidature / Thèse / Projet TEI"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-[#E2DACD] bg-[#FAF8F5] focus:outline-none focus:border-[#7A2021]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#4A2E12] mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Votre message académique..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-[#E2DACD] bg-[#FAF8F5] focus:outline-none focus:border-[#7A2021]"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded border border-[#E2DACD] text-xs font-semibold uppercase text-[#334155] hover:bg-[#F4EFEB] cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#5b070e] cursor-pointer shadow-xs"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
