import React from 'react';

interface GovCoLogoProps {
  className?: string;
  height?: number;
}

export const GovCoLogo: React.FC<GovCoLogoProps> = ({ className = '', height = 24 }) => {
  return (
    <svg
      viewBox="0 0 280 80"
      height={height}
      className={`inline-block select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GOV.CO"
    >
      {/* 'g' circle & tail */}
      <path
        d="M 50 38 C 50 25 39 15 25 15 C 12 15 2 25 2 38 C 2 51 12 61 25 61 C 37 61 47 53 49 42 L 49 55 C 49 67 39 74 25 74 C 15 74 8 70 5 63"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark inside 'g' */}
      <path d="M 14 38 L 22 46" stroke="#FCD116" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 22 46 L 31 34" stroke="#33A8DF" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 31 34 L 39 23" stroke="#E63946" strokeWidth="5.5" strokeLinecap="round" />

      {/* 'o' */}
      <circle cx="78" cy="45" r="16" stroke="currentColor" strokeWidth="6" />

      {/* 'v' */}
      <path
        d="M 108 30 L 122 61 L 136 30"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* '.' */}
      <circle cx="152" cy="57" r="4.5" fill="currentColor" />

      {/* 'c' */}
      <path
        d="M 198 34 C 193 29 186 26 177 26 C 164 26 155 35 155 45 C 155 55 164 64 177 64 C 186 64 193 61 198 56"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* 'o' */}
      <circle cx="228" cy="45" r="16" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
};
