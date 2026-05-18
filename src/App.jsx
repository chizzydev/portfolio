import { useEffect, useState } from 'react';

import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Achievements from './components/sections/Achievements';
//import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' 
      : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
     <main className="pt-20">
<section id="home" className="section-hero">
  <Hero />
</section>

<section id="about" className="section-about">
  <About />
</section>

<section id="tech-stack" className="section-tech">
  <TechStack />
</section>

<section id="experience" className="section-experience">
  <Experience />
</section>

<section id="projects" className="section-projects">
  <Projects />
</section>

<section id="services" className="section-services">
  <Services />
</section>

<section id="achievements" className="section-achievements">
  <Achievements />
</section>

{/*<section id="testimonials" className="section-testimonials">
  <Testimonials />
</section>*/}

<section id="contact" className="section-contact">
  <Contact />
</section>

      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;