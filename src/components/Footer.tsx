import React from 'react';

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className="w-full bg-[#F4EFEB] py-12 border-t border-[#E2DACD] shadow-[0_-1px_6px_rgba(74,46,18,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">

        {/* Ligne de contact */}
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-semibold text-[#171c23] uppercase tracking-wider">
            Contact
          </span>
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 text-[14px] text-[#334155]">
            <a
              href="mailto:romain.margaron@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#7A2021]">mail</span>
              <span>romain.margaron@gmail.com</span>
            </a>
            <a
              href="tel:+41781234567"
              className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#7A2021]">call</span>
              <span>+41 78 123 45 67</span>
            </a>
            <a
              href="https://github.com/mroylem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#7A2021]">code</span>
              <span>GitHub / mroylem</span>
            </a>
            <a
              href="https://www.linkedin.com/in/romain-margaron-1412b6140/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#7A2021]">badge</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#E2DACD]/80">
          <span className="text-[13px] text-[#64748B] text-center sm:text-left">
            © Romain Margaron
          </span>
        </div>
      </div>
    </footer>
  );
};
