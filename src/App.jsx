// Main App component - Portfolio application root
import { useEffect, useState } from 'react';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

// Common components
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  // Theme state management (dark/light mode)
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        {/* Hero Section - Landing page */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack">
          <TechStack />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Services Section (Optional - can be hidden) */}
        <section id="services">
          <Services />
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;