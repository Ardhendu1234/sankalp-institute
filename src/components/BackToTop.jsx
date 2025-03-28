import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #facc15;
  color: #1f2937;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
  opacity: ${props => (props.isVisible ? 1 : 0)};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <BackToTopButton
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      isVisible={isVisible}
    >
      <FaArrowUp />
    </BackToTopButton>
  );
}

export default BackToTop;