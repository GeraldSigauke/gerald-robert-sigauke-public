import { createContext, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import HeroComponent from './pages/HeroComponent';
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
import FooterComponent from './pages/FooterComponent';
import Skills from './components/Skills';
import SkillsPage from './pages/SkillsPage';

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
          <NavbarComponent />
          <Home />
          <HeroComponent />
          <About />
          <AboutPage />
          <Résumé />
          <RésuméPage />
          <Skills />
          <SkillsPage />
          <Portfolio />
          <ProjectsPage />
          <Testimonials />
          <TestimonialsPage />
          <ContactMe />
          <ContactPage />
          <FooterComponent />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
