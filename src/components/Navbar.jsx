import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

// Styled components for the navbar
const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background: #1e3a8a;
    padding: 1rem;
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: #facc15;
  }

  &.active {
    color: #facc15;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Navbar({ toggleTheme, theme }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo>Sankalp Institute</Logo>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </HamburgerButton>
          <NavLinksContainer isOpen={isOpen}>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
            <NavLink to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Courses</NavLink>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</NavLink>
          </NavLinksContainer>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;