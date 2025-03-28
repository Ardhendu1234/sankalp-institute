import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { useEffect, useState } from 'react';

// Global styles for theme
const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
  }

  .preloader {
    background: ${({ theme }) => theme.preloaderBackground};
  }
`;

// Styled container for the app
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

// Styled container for particles
const ParticleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Particle = styled.div`
  position: absolute;
  background: white;
  opacity: 0.8;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Define themes
  const lightTheme = {
    bodyBackground: 'linear-gradient(135deg, #1e3a8a, #4f46e5)',
    textColor: '#fff',
    preloaderBackground: '#1e3a8a',
  };

  const darkTheme = {
    bodyBackground: 'linear-gradient(135deg, #111827, #1f2937)',
    textColor: '#e5e7eb',
    preloaderBackground: '#111827',
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    window.emailjs.init("YOUR_EMAILJS_USER_ID");

    setTimeout(() => {
      setLoading(false);
      window.AOS.init({ duration: 1000 });
    }, 2000);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        {loading && <Preloader />}
        <AppContainer>
          <ParticleBackground>
            {[...Array(5)].map((_, i) => (
              <Particle
                key={i}
                className="animate-float"
                style={{
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                }}
              />
            ))}
          </ParticleBackground>

          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
          <BackToTop />
          <ChatWidget />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;