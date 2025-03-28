import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  color: #facc15;
  transition: color 0.3s ease;

  &:hover {
    color: #f4d03f;
  }
`;

const Copyright = styled.p`
  color: #d1d5db;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#">Instagram</SocialLink>
        <SocialLink href="#">YouTube</SocialLink>
        <SocialLink href="#">LinkedIn</SocialLink>
      </SocialLinks>
      <Copyright>© 2025 Sankalp Institute | Designed by Ardhendu</Copyright>
    </FooterContainer>
  );
}

export default Footer;