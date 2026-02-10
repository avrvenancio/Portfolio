import { useState } from 'react';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { About } from './components/About';
import { CaseStudy } from './components/CaseStudy';

type Section = 'home' | 'work' | 'about';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    setSelectedCaseStudy(null);
  };

  const handleCaseStudyClick = (id: number) => {
    setSelectedCaseStudy(id);
  };

  const handleBackToWork = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b-2 border-black">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <button 
              onClick={() => handleNavigate('home')}
              className="uppercase tracking-tight hover:underline"
            >
              Portfolio
            </button>
            
            <div className="flex gap-0 border-2 border-black">
              <button
                onClick={() => handleNavigate('home')}
                className={`px-4 py-2 border-r-2 border-black uppercase text-sm tracking-tight ${
                  currentSection === 'home' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('work')}
                className={`px-4 py-2 border-r-2 border-black uppercase text-sm tracking-tight ${
                  currentSection === 'work' || selectedCaseStudy !== null ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`px-4 py-2 uppercase text-sm tracking-tight ${
                  currentSection === 'about' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                }`}
              >
                About
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {selectedCaseStudy !== null ? (
          <CaseStudy id={selectedCaseStudy} onBack={handleBackToWork} />
        ) : (
          <>
            {currentSection === 'home' && <Home onNavigate={handleNavigate} />}
            {currentSection === 'work' && <Work onCaseStudyClick={handleCaseStudyClick} />}
            {currentSection === 'about' && <About />}
          </>
        )}
      </main>
    </div>
  );
}