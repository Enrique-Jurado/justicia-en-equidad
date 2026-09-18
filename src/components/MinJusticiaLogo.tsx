import React from 'react';

interface MinJusticiaLogoProps {
  className?: string;
  variant?: 'color' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const MinJusticiaLogo: React.FC<MinJusticiaLogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#003893';

  const fontSizes = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-[26px]',
    lg: 'text-3xl sm:text-4xl',
  };

  const barHeights = {
    sm: 'h-[3px] w-12',
    md: 'h-[4px] w-16 sm:w-20',
    lg: 'h-[5px] w-24 sm:w-28',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none py-0.5 ${className}`}>
      {/* Texto Oficial "Justicia" */}
      <span
        className={`font-black tracking-tight leading-none ${fontSizes[size]}`}
        style={{
          color: textColor,
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        Justicia
      </span>

      {/* Franja Tricolor Oficial de Colombia: Amarillo (doble ancho), Azul, Rojo */}
      <div className={`flex items-center mt-1 rounded-full overflow-hidden shadow-2xs ${barHeights[size]}`}>
        <div className="h-full bg-[#FCD116]" style={{ width: '48%' }} />
        <div className="h-full bg-[#003893]" style={{ width: '26%' }} />
        <div className="h-full bg-[#CE1126]" style={{ width: '26%' }} />
      </div>
    </div>
  );
};
