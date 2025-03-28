function Blog() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-white mb-8 text-center sm:text-4xl" data-aos="fade-up">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-xl" data-aos="fade-up">
            <img src="https://via.placeholder.com/400x200?text=Blog+1" alt="Blog 1" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 sm:text-lg">Top 5 Physics Tips for IIT JEE</h3>
            <p className="text-gray-200 dark:text-gray-400 mt-2">Master key concepts with these expert tips from Rakesh Verma.</p>
          </div>
          <div className="glass p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
            <img src="https://via.placeholder.com/400x200?text=Blog+2" alt="Blog 2" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 sm:text-lg">Chemistry Hacks for NEET</h3>
            <p className="text-gray-200 dark:text-gray-400 mt-2">Dr. Sudeshna Verma shares her secrets to ace NEET Chemistry.</p>
          </div>
          <div className="glass p-6 rounded-xl" data-aos="fade-up" data-aos-delay="400">
            <img src="https://via.placeholder.com/400x200?text=Blog+3" alt="Blog 3" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 sm:text-lg">Why Start Early with Foundation?</h3>
            <p className="text-gray-200 dark:text-gray-400 mt-2">The benefits of building a strong base in Classes 9-10.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blog;