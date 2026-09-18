import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ConozcaView } from './views/ConozcaView';
import { RutaCiudadanaView } from './views/RutaCiudadanaView';
import { ConciliadoresView } from './views/ConciliadoresView';
import { PljeView } from './views/PljeView';
import { PaceView } from './views/PaceView';
import { SistemaView } from './views/SistemaView';
import { RecursosView } from './views/RecursosView';
import { FaqView } from './views/FaqView';
import { GlosarioView } from './views/GlosarioView';

const MainContent: React.FC = () => {
  const { activeTab, direction, highContrast, fontSize } = useTheme();

  const themeClass =
    direction === 'comunitaria'
      ? 'theme-comunitaria font-sans bg-[#FDFBF7]'
      : direction === 'editorial'
      ? 'theme-editorial font-sans bg-[#F8F9FA]'
      : 'theme-institucional font-sans bg-[#F8FAFC]';

  const contrastClass = highContrast ? 'contrast-125 saturate-150' : '';

  const fontClass =
    fontSize === 'large'
      ? 'text-[17px]'
      : fontSize === 'xlarge'
      ? 'text-[19px]'
      : 'text-[15px]';

  return (
    <div className={`min-h-screen flex flex-col ${themeClass} ${contrastClass} ${fontClass} text-slate-900 transition-colors duration-200`}>
      <Header />
      <main className="flex-1">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'conozca' && <ConozcaView />}
        {activeTab === 'ruta-ciudadana' && <RutaCiudadanaView />}
        {activeTab === 'conciliadores' && <ConciliadoresView />}
        {activeTab === 'plje' && <PljeView />}
        {activeTab === 'pace' && <PaceView />}
        {activeTab === 'sistema' && <SistemaView />}
        {activeTab === 'recursos' && <RecursosView />}
        {activeTab === 'faq' && <FaqView />}
        {activeTab === 'glosario' && <GlosarioView />}
      </main>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
