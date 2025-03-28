function Home() {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center py-20" data-aos="fade-up">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight sm:text-4xl">Unlock Your Future with Sankalp</h2>
          <p className="text-xl text-gray-200 dark:text-gray-400 mb-8 max-w-2xl mx-auto sm:text-lg">Premier coaching for IIT JEE, NEET, and competitive exams in Bilaspur, led by expert educators.</p>
          <img src="https://via.placeholder.com/1200x600?text=Sankalp+Hero+Image" alt="Hero" className="mx-auto rounded-xl shadow-2xl mb-8 w-full max-w-5xl" />
          <a href="/courses" className="bg-yellow-400 text-gray-800 px-10 py-4 rounded-full hover:bg-yellow-500 transition duration-300 font-semibold text-lg shadow-lg sm:px-6 sm:py-3 sm:text-base">Explore Courses</a>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400 sm:text-3xl">500+</h3>
            <p className="text-gray-200 dark:text-gray-400">Students Mentored</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400 sm:text-3xl">95%</h3>
            <p className="text-gray-200 dark:text-gray-400">Success Rate</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400 sm:text-3xl">15+</h3>
            <p className="text-gray-200 dark:text-gray-400">Years of Excellence</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;