import React, { createContext, useContext, useState, useEffect } from 'react';
import { VisualDirection, UserProfile, ActiveTab } from '../types';

interface ThemeContextType {
  direction: VisualDirection;
  setDirection: (dir: VisualDirection) => void;
  activeProfile: UserProfile;
  setActiveProfile: (profile: UserProfile) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
  termQuery: string;
  setTermQuery: (q: string) => void;
  selectedGlossaryTerm: string | null;
  setSelectedGlossaryTerm: (term: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<VisualDirection>('institucional');
  const [activeProfile, setActiveProfile] = useState<UserProfile>('ciudadania');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [termQuery, setTermQuery] = useState('');
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<string | null>(null);

  // Scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <ThemeContext.Provider
      value={{
        direction,
        setDirection,
        activeProfile,
        setActiveProfile,
        activeTab,
        setActiveTab,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        termQuery,
        setTermQuery,
        selectedGlossaryTerm,
        setSelectedGlossaryTerm,
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-200 ${
          fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'
        } ${highContrast ? 'contrast-more bg-black text-white' : ''}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
