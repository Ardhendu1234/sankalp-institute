import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 9999px;
  background: #e5e7eb;
  color: #1f2937;
  transition: background 0.3s ease, color 0.3s ease;

  &[data-theme="dark"] {
    background: #4b5563;
    color: #e5e7eb;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

function ThemeToggle({ toggleTheme, theme }) {
  return (
    <ToggleButton onClick={toggleTheme} data-theme={theme} aria-label="Toggle theme">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </ToggleButton>
  );
}

export default ThemeToggle;