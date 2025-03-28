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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ContactCard = styled.div`
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

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #facc15;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ContactInfo = styled.p`
  color: #d1d5db;

  a {
    color: #facc15;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: #facc15;
  color: #1f2937;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: background 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    background: #f4d03f;
  }

  @media (max-width: 640px) {
    padding: 0.5rem 1.5rem;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
      to_email: "ronyrx468@gmail.com",
    }).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }).catch((error) => {
      alert("Failed to send message: " + error);
    });
  };

  return (
    <Section>
      <Title data-aos="fade-up">Let’s Connect</Title>
      <ContactGrid>
        <ContactCard data-aos="fade-right">
          <CardTitle>Contact Info</CardTitle>
          <ContactInfo>Phone: <a href="tel:9303615628">9303615628</a></ContactInfo>
          <ContactInfo>Email: <a href="mailto:ronyrx468@gmail.com">ronyrx468@gmail.com</a></ContactInfo>
          <ContactInfo>Address: Bilaspur, Chhattisgarh</ContactInfo>
        </ContactCard>
        <ContactCard data-aos="fade-left">
          <CardTitle>Reach Out</CardTitle>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
            />
            <Select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Course Interest</option>
              <option value="IIT JEE">IIT JEE</option>
              <option value="NEET">NEET</option>
              <option value="Foundation">Foundation</option>
            </Select>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactCard>
      </ContactGrid>
    </Section>
  );
}

export default Contact;