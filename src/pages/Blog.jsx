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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
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

const BlogImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #facc15;

  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`;

const BlogText = styled.p`
  color: #d1d5db;
  margin-top: 0.5rem;
`;

function Blog() {
  return (
    <Section>
      <Title data-aos="fade-up">Our Blog</Title>
      <BlogGrid>
        <BlogCard data-aos="fade-up">
          <BlogImage src="https://via.placeholder.com/400x200?text=Blog+1" alt="Blog 1" />
          <BlogTitle>Top 5 Physics Tips for IIT JEE</BlogTitle>
          <BlogText>Master key concepts with these expert tips from Rakesh Verma.</BlogText>
        </BlogCard>
        <BlogCard data-aos="fade-up" data-aos-delay="200">
          <BlogImage src="https://via.placeholder.com/400x200?text=Blog+2" alt="Blog 2" />
          <BlogTitle>Chemistry Hacks for NEET</BlogTitle>
          <BlogText>Dr. Sudeshna Verma shares her secrets to ace NEET Chemistry.</BlogText>
        </BlogCard>
        <BlogCard data-aos="fade-up" data-aos-delay="400">
          <BlogImage src="https://via.placeholder.com/400x200?text=Blog+3" alt="Blog 3" />
          <BlogTitle>Why Start Early with Foundation?</BlogTitle>
          <BlogText>The benefits of building a strong base in Classes 9-10.</BlogText>
        </BlogCard>
      </BlogGrid>
    </Section>
  );
}

export default Blog;