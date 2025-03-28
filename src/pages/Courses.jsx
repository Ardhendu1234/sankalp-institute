import { useState } from 'react';
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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CourseCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #facc15;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const CourseDescription = styled.p`
  color: #d1d5db;
  margin-top: 0.5rem;
`;

const CourseList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  color: #d1d5db;
  margin-top: 1rem;
`;

const ProgressContainer = styled.div`
  margin-top: 1rem;
`;

const ProgressText = styled.p`
  color: #d1d5db;
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #e5e7eb;
  border-radius: 9999px;
  height: 0.625rem;
`;

const ProgressFill = styled.div`
  background: #facc15;
  height: 0.625rem;
  border-radius: 9999px;
  width: ${props => props.progress}%;
`;

function Courses() {
  const [progress] = useState({ iitJee: 30, neet: 50, foundation: 20 });

  return (
    <Section>
      <Title data-aos="fade-up">Our Signature Courses</Title>
      <CourseGrid>
        <CourseCard data-aos="zoom-in">
          <CourseTitle>IIT JEE</CourseTitle>
          <CourseDescription>Master Physics & Chemistry for JEE Main & Advanced.</CourseDescription>
          <CourseList>
            <li>1-Year Program</li>
            <li>Weekly Tests</li>
            <li>Concept Clarity</li>
          </CourseList>
          <ProgressContainer>
            <ProgressText>Progress: {progress.iitJee}%</ProgressText>
            <ProgressBar>
              <ProgressFill progress={progress.iitJee} />
            </ProgressBar>
          </ProgressContainer>
        </CourseCard>
        <CourseCard data-aos="zoom-in" data-aos-delay="200">
          <CourseTitle>NEET</CourseTitle>
          <CourseDescription>Excel in Physics & Chemistry for medical entrance.</CourseDescription>
          <CourseList>
            <li>1-Year Program</li>
            <li>Mock Exams</li>
            <li>Practical Focus</li>
          </CourseList>
          <ProgressContainer>
            <ProgressText>Progress: {progress.neet}%</ProgressText>
            <ProgressBar>
              <ProgressFill progress={progress.neet} />
            </ProgressBar>
          </ProgressContainer>
        </CourseCard>
        <CourseCard data-aos="zoom-in" data-aos-delay="400">
          <CourseTitle>Foundation</CourseTitle>
          <CourseDescription>Build a strong base for Classes 9-10.</CourseDescription>
          <CourseList>
            <li>6-Month Program</li>
            <li>Core Concepts</li>
            <li>Interactive Learning</li>
          </CourseList>
          <ProgressContainer>
            <ProgressText>Progress: {progress.foundation}%</ProgressText>
            <ProgressBar>
              <ProgressFill progress={progress.foundation} />
            </ProgressBar>
          </ProgressContainer>
        </CourseCard>
      </CourseGrid>
    </Section>
  );
}

export default Courses;