function About() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-white mb-8 text-center sm:text-4xl" data-aos="fade-up">Who We Are</h2>
        <p className="text-lg text-gray-200 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center sm:text-base" data-aos="fade-up" data-aos-delay="200">
          Sankalp Institute in Bilaspur is dedicated to empowering students for IIT JEE, NEET, and competitive exams with world-class education and personalized guidance.
        </p>
  
        <h3 className="text-3xl font-semibold text-yellow-400 mb-6 text-center sm:text-2xl" data-aos="fade-up">Our Expert Educators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-8 rounded-xl text-center" data-aos="zoom-in">
            <img src="/sudeshna-verma.jpg" alt="Dr Sudeshna Verma" className="mx-auto rounded-full mb-4 w-32 h-32 object-cover" />
            <h4 className="text-2xl font-semibold text-yellow-400 sm:text-xl">Dr. Sudeshna Verma</h4>
            <p className="text-gray-200 dark:text-gray-400">Chemistry PhD | NEET Specialist</p>
          </div>
          <div className="glass p-8 rounded-xl text-center" data-aos="zoom-in" data-aos-delay="200">
            <img src="/rakesh-verma.jpg" alt="Rakesh Verma" className="mx-auto rounded-full mb-4 w-32 h-32 object-cover" />
            <h4 className="text-2xl font-semibold text-yellow-400 sm:text-xl">Rakesh Verma</h4>
            <p className="text-gray-200 dark:text-gray-400">Physics Maestro | 15+ Years IIT JEE Expertise</p>
          </div>
        </div>
  
        <h3 className="text-3xl font-semibold text-yellow-400 mb-6 text-center sm:text-2xl" data-aos="fade-up">What Students Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-right">
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-200 dark:text-gray-400 italic">"Physics became my superpower thanks to Rakesh Sir!"</p>
            <p className="mt-4 font-semibold text-yellow-400">- Aryan R.</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-200 dark:text-gray-400 italic">"Dr. Sudeshna’s chemistry classes are a game-changer."</p>
            <p className="mt-4 font-semibold text-yellow-400">- Neha S.</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-200 dark:text-gray-400 italic">"Sankalp got me into IIT!"</p>
            <p className="mt-4 font-semibold text-yellow-400">- Vikram P.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;