import styled from 'styled-components';

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Hero = styled.div`
  text-align: center;
  padding: 5rem 0;
`;

const HeroTitle = styled.h2`
  font-size: 3.75rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const ExploreButton = styled.a`
  display: inline-block;
  background: #facc15;
  color: #1f2937;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: background 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f4d03f;
  }

  @media (max-width: 640px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.25rem;
  font-weight: bold;
  color: #facc15;

  @media (max-width: 640px) {
    font-size: 1.875rem;
  }
`;

const StatText = styled.p`
  color: #d1d5db;
`;

function Home() {
  return (
    <Section>
      <Hero data-aos="fade-up">
        <HeroTitle>Unlock Your Future with Sankalp</HeroTitle>
        <HeroText>Premier coaching for IIT JEE, NEET, and competitive exams in Bilaspur, led by expert educators.</HeroText>
        <HeroImage src="https://via.placeholder.com/1200x600?text=Sankalp+Hero+Image" alt="Hero" />
        <ExploreButton href="/courses">Explore Courses</ExploreButton>
      </Hero>

      <StatsGrid data-aos="fade-up" data-aos-delay="200">
        <StatCard>
          <StatNumber>500+</StatNumber>
          <StatText>Students Mentored</StatText>
        </StatCard>
        <StatCard>
          <StatNumber>95%</StatNumber>
          <StatText>Success Rate</StatText>
        </StatCard>
        <StatCard>
          <StatNumber>15+</StatNumber>
          <StatText>Years of Excellence</StatText>
        </StatCard>
      </StatsGrid>
    </Section>
  );
}

export default Home;