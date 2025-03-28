import { useState } from 'react';

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
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-5xl font-bold text-white mb-8 text-center sm:text-4xl" data-aos="fade-up">Let’s Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-xl" data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 sm:text-xl">Contact Info</h3>
          <p className="text-gray-200 dark:text-gray-400">Phone: <a href="tel:9303615628" className="text-yellow-400 hover:underline">9303615628</a></p>
          <p className="text-gray-200 dark:text-gray-400">Email: <a href="mailto:ronyrx468@gmail.com" className="text-yellow-400 hover:underline">ronyrx468@gmail.com</a></p>
          <p className="text-gray-200 dark:text-gray-400">Address: Bilaspur, Chhattisgarh</p>
        </div>
        <div className="glass p-8 rounded-xl" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4 sm:text-xl">Reach Out</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 mb-4 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
              required
            />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
              required
            >
              <option value="" disabled>Course Interest</option>
              <option value="IIT JEE">IIT JEE</option>
              <option value="NEET">NEET</option>
              <option value="Foundation">Foundation</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
              rows="4"
              required
            />
            <button type="submit" className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full hover:bg-yellow-500 transition duration-300 font-semibold shadow-lg sm:px-6 sm:py-2">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;