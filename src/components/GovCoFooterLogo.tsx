import React from 'react';

interface GovCoFooterLogoProps {
  className?: string;
  height?: number;
}

export const GovCoFooterLogo: React.FC<GovCoFooterLogoProps> = ({
  className = '',
  height = 30,
}) => {
  return (
    <a
      href="https://www.gov.co/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#004899] rounded-xs"
      aria-label="Abrir el portal GOV.CO en una nueva pestaña"
    >
      <img
        src="images/branding/logo-govco-footer.png"
        alt="GOV.CO"
        style={{ height: height ? `${height}px` : undefined }}
        className={`inline-block object-contain select-none shrink-0 w-auto ${className}`}
      />
    </a>
  );
};
