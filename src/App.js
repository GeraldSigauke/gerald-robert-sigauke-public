import { createContext, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import HeroComponent from './components/HeroComponent';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import Résumé from './components/Résumé';
import RésuméPage from './pages/RésuméPage';
import Portfolio from './components/Portfolio';
import ProjectsPage from './pages/ProjectsPage';
import Testimonials from './components/Testimonials';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactMe from './components/ContactMe';
import ContactPage from './pages/ContactPage';
import FooterComponent from './components/FooterComponent';
import Skills from './components/Skills';
import SkillsPage from './pages/SkillsPage';
import FastTravelComponents from './components/FastTravelComponents';
import HeroPage from './pages/HeroPage';

// Dark and Light Theme Stuff:

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <div id='origin' className=""></div>
          <NavbarComponent />
          <Home />
          <HeroPage />
          <About />
          <AboutPage />
          <Skills />
          <SkillsPage />
          <Résumé />
          <RésuméPage />
          <Portfolio />
          <ProjectsPage />
          <Testimonials />
          <TestimonialsPage />
          <ContactMe />
          <ContactPage />
          {/* <HeroComponent /> */}
          <FooterComponent />
          <FastTravelComponents />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
