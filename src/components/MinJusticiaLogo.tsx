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
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-h-9',
    md: 'h-10 sm:h-12 max-h-12',
    lg: 'h-14 sm:h-16 max-h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="images/branding/logo-minjusticia-oficial.png"
        alt="Ministerio de Justicia y del Derecho"
        className={`w-auto object-contain shrink-0 ${sizeClasses[size]}`}
      />
    </div>
  );
};

