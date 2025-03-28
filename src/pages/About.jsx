import styled from 'styled-components';

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Title = styled.h2`
  font-size: 3.125rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  color: #facc15;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const EducatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const EducatorCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const EducatorImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
`;

const EducatorName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #facc15;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const EducatorRole = styled.p`
  color: #d1d5db;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  border-radius: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialText = styled.p`
  color: #d1d5db;
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  color: #facc15;
`;

function About() {
  return (
    <Section>
      <Title data-aos="fade-up">Who We Are</Title>
      <Text data-aos="fade-up" data-aos-delay="200">
        Sankalp Institute in Bilaspur is dedicated to empowering students for IIT JEE, NEET, and competitive exams with world-class education and personalized guidance.
      </Text>

      <Subtitle data-aos="fade-up">Our Expert Educators</Subtitle>
      <EducatorGrid>
        <EducatorCard data-aos="zoom-in">
          <EducatorImage src="/sudeshna-verma.jpg" alt="Dr Sudeshna Verma" />
          <EducatorName>Dr. Sudeshna Verma</EducatorName>
          <EducatorRole>Chemistry PhD | NEET Specialist</EducatorRole>
        </EducatorCard>
        <EducatorCard data-aos="zoom-in" data-aos-delay="200">
          <EducatorImage src="/rakesh-verma.jpg" alt="Rakesh Verma" />
          <EducatorName>Rakesh Verma</EducatorName>
          <EducatorRole>Physics Maestro | 15+ Years IIT JEE Expertise</EducatorRole>
        </EducatorCard>
      </EducatorGrid>

      <Subtitle data-aos="fade-up">What Students Say</Subtitle>
      <TestimonialGrid data-aos="fade-right">
        <TestimonialCard>
          <TestimonialText>"Physics became my superpower thanks to Rakesh Sir!"</TestimonialText>
          <TestimonialAuthor>- Aryan R.</TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>"Dr. Sudeshna’s chemistry classes are a game-changer."</TestimonialText>
          <TestimonialAuthor>- Neha S.</TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>"Sankalp got me into IIT!"</TestimonialText>
          <TestimonialAuthor>- Vikram P.</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialGrid>
    </Section>
  );
}

export default About;